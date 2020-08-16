import config from 'config';
import { authHeader } from '../_helpers';

export const actionService = {

    depositar,
    saldo,
    sacar
};

function depositar(agencia, conta, valor) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    // console.log(agencia);
    // console.log(conta);
    // console.log(valor);
    // console.log(requestOptions.body);
    return fetch(`${config.apiUrl}/accounts/depositar?` + `agency=${agencia}&account=${conta}&balance=${valor}`, requestOptions)
        .then(handleResponse)
        .then(retorno => {
            return retorno;
        });
}

function sacar(agencia, conta, valor) {
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    // console.log(agencia);
    // console.log(conta);
    // console.log(valor);
    // console.log(requestOptions.body);
    return fetch(`${config.apiUrl}/accounts/sacar?` + `agency=${agencia}&account=${conta}&balance=${valor}`, requestOptions)
        .then(handleResponse)
        .then(retorno => {
            return retorno;
        });
}

function saldo(user) {
    console.log(user);
    const requestOptions = {
        method: 'POST',
        headers: authHeader()
    };
    // console.log(agencia);
    // console.log(conta);
    // console.log(valor);
    // console.log(requestOptions.body);
    return fetch(`${config.apiUrl}/accounts/sacar?` + `agency=${agencia}&account=${conta}&balance=${valor}`, requestOptions)
        .then(handleResponse)
        .then(retorno => {
            return retorno;
        });
}


function handleResponse(response) {
    // console.log(response);
    return response.text().then(text => {
        // console.log(response);
        // console.log(response.headers);
        const data = text && JSON.parse(text);
        // console.log('data')
        // console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}