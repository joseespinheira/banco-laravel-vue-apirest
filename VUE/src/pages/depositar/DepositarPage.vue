<template>
  <div>

    <h2>Depositar</h2>
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
        <button class="btn btn-primary" :disabled="loggingIn">Login</button>
        <img
          v-show="loggingIn"
          src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
        />
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
        dispatch("actions/depositar", { agencia, conta, valor });
      }
    }
  }
};
</script>