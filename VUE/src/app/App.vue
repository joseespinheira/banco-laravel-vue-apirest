<template>
  <div id="app">
    <div class="jumbotron">
      <div v-if="$store.state.authentication.user && $store.state.authentication.user.status">
        <div id="nav">
          <div class="button">
            <router-link to="/">Inicio</router-link>
          </div>
          <div class="button">
            <router-link to="/depositar">Depositar</router-link>
          </div>
          <div class="button">
            <router-link to="/sacar">Sacar</router-link>
          </div>
          <div class="button">
            <router-link to="/saldo">Saldo</router-link>
          </div>
          <div class="button">
            <router-link to="/extrato">Extrato</router-link>
          </div>
          <div class="button">
            <router-link to="/login">Sair</router-link>
          </div>
        </div>
        <div>
          <div class="dados">
            <div>Olá, {{user.user.firstName + ' ' + user.user.lastName}}</div>
            <div id="ag-conta">
              <div>Agência: {{user.user.agencia}}</div>
              <div>Conta: {{user.user.agencia}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 offset-sm-3">
            <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    alert() {
      return this.$store.state.alert;
    },
    user() {
      return this.$store.state.authentication.user;
    }
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.$store.dispatch("alert/clear");
    }
  },
  methods: {
    logado() {
      if (!this.$store.state.authentication.user) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style>
#ag-conta {
  display: flex;
  justify-content: flex-end;
  padding: 0px 10px;
}
.dados {
  padding: 10px 50px;
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
#nav {
  font-size: 1.5rem;
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.button {
  height: 50px;
  width: auto;
  border: 2px solid;
  padding: 1.4rem;
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
  border-radius: 8px;
}
.button + .button {
  margin-left: 10px;
}
</style>