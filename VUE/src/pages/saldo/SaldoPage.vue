<template>
  <div>
    <!--div class="alert alert-info">Pagina de saldo</div-->
    <h2><u>Saldo</u></h2>
    <div class="valor">

    <h3 v-on="handleH(user)">Valor: R$
      </h3>
        <img v-show="saldochegou" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
    <h3 style="padding: 10px">
          {{' '+saldo}}
    </h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saldochegou: true,
      saldo: "",
      agencia: "",
      conta: "",
      valor: "",
      submitted: false
    };
  },
  computed: {
    user() {
      return this.$store.state.authentication.user.user;
    },
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    }
  },
  methods: {
    handleH(e) {

        let valor = 0
      const requestOptions = {
        method: "GET"
        // headers: authHeader()
      };
      const a = fetch(
        `http://127.0.0.1:8000/api/accounts/saldo?` +
          `agency=${this.user.agencia}&account=${this.user.conta}`,
        requestOptions
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          valor = data.valor;
        });

      setTimeout(() => {

          this.saldo = valor;
          this.saldochegou = false;
      }, 500);
    },
    handleSubmit(e) {
      this.submitted = true;
      const { agencia, conta, valor } = this;
      const { dispatch } = this.$store;
      if (agencia && conta && valor) {
        dispatch("actions/sacar", { agencia, conta, valor });
      }
    }
  }
};
</script>

<style scoped>
.valor{
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: baseline;
}
img{
  width: 16px;
  height: 16px;
}
</style>