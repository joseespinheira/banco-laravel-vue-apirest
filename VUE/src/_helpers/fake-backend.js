export function configureFakeBackend() {
    // const { data } = await axios.get("https://api.agify.io/?name=michael");
    // this.data = data;

    let users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        // console.log(url);
        // console.log(opts);

        return new Promise((resolve, reject) => {
            // fetch(url, {
            //                 method: "POST",
            //                 body: {email: opts.body.email,gugu: "dada"}
            //             }).then(function(response) {
            //     if(response.ok) {
            //         console.log("123retornou algo")
            //       response.blob().then(function(myBlob) {
            //         var objectURL = URL.createObjectURL(myBlob);
            //         myImage.src = objectURL;
            //       });
            //     } else {
            //       console.log('123Network response was not ok.');
            //     }
            //   })
            //   .catch(function(error) {
            //     console.log('123There has been a problem with your fetch operation: ' + error.message);
            //   });
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // async getName(){
                //     const res = await fetch('https://api.agify.io/?name=michael');
                //     const data = await res.json();
                //     this.data = data;
                //   }
                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        // console.log(url);
                        // console.log(user.username);
                        // console.log(params.username);
                        // console.log(user.password);
                        // console.log(params.password);
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    setTimeout(() => {

                    }, 50000);
                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 50);
        });
    }
}