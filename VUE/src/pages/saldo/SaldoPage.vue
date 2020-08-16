<template>
  <div>
    <!--div class="alert alert-info">Pagina de saldo</div-->
    <h3>Conta: {{user.conta}}</h3>
    <h3>Agência: {{user.agencia}}</h3>
    <h2>Saldo</h2>
    <h2 v-on="handleH()">Valor: {{saldo}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      }, 1000);
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