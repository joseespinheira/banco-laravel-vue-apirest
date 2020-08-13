<template>
  <div id="app">
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
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

#nav {
  font-size: 1.5rem;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.button{
  width: 130px;
  border: 2px solid;
  background: gray;
  padding: 1.4rem;
}
.button + .button {
  margin-left: 10px;
}
</style>
