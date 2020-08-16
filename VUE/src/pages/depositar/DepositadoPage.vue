<template>
  <div>
    <h2>Deposito realizado com sucesso!</h2>
  </div>
</template>

<script>
export default {
  data () {
        return {
            agencia: '',
            conta: '',
            valor: '',
            submitted: false
        }
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    // created () {
    //     // reset login status
    //     this.$store.dispatch('authentication/logout');
    // },
  methods: {
    handleSubmit(e) {
      this.submitted = true;
      const { agencia, conta, valor } = this;
      const { dispatch } = this.$store;
      if (agencia && conta && valor) {
        dispatch("actions/depositar", { agencia, conta, valor });
      }
    }
  }
};
</script>