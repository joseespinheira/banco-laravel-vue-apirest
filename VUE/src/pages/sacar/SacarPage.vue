<template>
  <div>
    <h2><u>Sacar</u></h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="agencia">Agência</label>
        <input
          type="number"
          v-model="agencia"
          name="agencia"
          class="form-control"
          :class="{ 'is-invalid': submitted && !agencia }"
        />
        <div v-show="submitted && !agencia" class="invalid-feedback">Agência é obrigatório</div>
      </div>
      <div class="form-group">
        <label for="conta">Conta</label>
        <input
          type="number"
          v-model="conta"
          name="conta"
          class="form-control"
          :class="{ 'is-invalid': submitted && !conta }"
        />
        <div v-show="submitted && !conta" class="invalid-feedback">Conta é obrigatório</div>
      </div>
      <div class="form-group">
        <label for="valor">Valor</label>
        <input
          type="number"
          v-model="valor"
          name="valor"
          class="form-control"
          :class="{ 'is-invalid': submitted && !valor }"
        />
        <div v-show="submitted && !valor" class="invalid-feedback">Valor é obrigatório</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="loggingIn">Sacar</button>
      </div>
    </form>
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
        dispatch("actions/sacar", { agencia, conta, valor });
      }
    }
  }
};
</script>