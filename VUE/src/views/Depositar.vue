<template>
  <div class="content">
    <div class="body">
      <h1>Depositar</h1>
      <form class="form" v-on:submit.prevent="onSubmit">
        <fieldset>
          <label>Conta:</label>
          <input type="text" placeholder="Conta" />
        </fieldset>
        <fieldset>
          <label>Agência:</label>
          <input type="text" placeholder="Agencia" />
        </fieldset>
        <fieldset>
          <label>Valor:</label>
          <input type="text" placeholder="Valor" />
        </fieldset>
        <button type="submit">Depositar</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';

@Component({
  components: {
    HelloWorld,
  },
  methods: {
    onSubmit: function(e){
      console.log("enviando1");
      // e.preventDefault();
      console.log(e)

      axios.get('http://127.0.0.1:8000/api/accounts/extrato')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }
  },
})
export default class Home extends Vue {

}
</script>

<style scoped>
.form {
  text-align: left;
}
fieldset {
  align-content: space-between;
}
.content {
  width: 100%;
  height: 100%;
  background: orange;
  justify-content: center;
  align-self: center;
  align-items: center;
  display: flex;
}

.body {
  background: #f39539;
  width: 60vw;
  height: 50vh;
}
</style>