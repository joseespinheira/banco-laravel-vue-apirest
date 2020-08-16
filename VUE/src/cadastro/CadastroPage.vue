<template>
    <div>

        <h2>Cadastro</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="firstName">Primeiro Nome</label>
                <input type="text" v-model="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && !firstName }" />
                <div v-show="submitted && !firstName" class="invalid-feedback">Primeiro Nome é obrigatório!</div>
            </div>
            <div class="form-group">
                <label htmlFor="lastName">Ultimo Nome</label>
                <input type="lastName" v-model="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && !lastName }" />
                <div v-show="submitted && !lastName" class="invalid-feedback">Ultimo Nome é obrigatório!</div>
            </div>
            <div class="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
                <div v-show="submitted && !email" class="invalid-feedback">Email é obrigatório!</div>
            </div>
            <div class="form-group">
                <label htmlFor="agencia">agencia</label>
                <input type="agencia" v-model="agencia" name="agencia" class="form-control" :class="{ 'is-invalid': submitted && !agencia }" />
                <div v-show="submitted && !agencia" class="invalid-feedback">agencia é obrigatório!</div>
            </div>
            <div class="form-group">
                <label htmlFor="conta">conta</label>
                <input type="conta" v-model="conta" name="conta" class="form-control" :class="{ 'is-invalid': submitted && !conta }" />
                <div v-show="submitted && !conta" class="invalid-feedback">conta é obrigatório!</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password é obrigatório!</div>
            </div>
            <div class="form-group">
                <label htmlFor="password_confirmation">Confirme o Password</label>
                <input type="password_confirmation" v-model="password_confirmation" name="password_confirmation" class="form-control" :class="{ 'is-invalid': submitted && !password_confirmation }" />
                <div v-show="submitted && !password_confirmation" class="invalid-feedback">Confirme o Password é obrigatório!</div>
            </div>
            <div class="form-group">
                <router-link to="/" class="btn btn-warning" >Voltar</router-link>
                <button class="btn btn-primary" :disabled="loggingIn">Cadastrar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            firstName: '',
            lastName: '',
            email: '',
            agencia: '',
            conta: '',
            password: '',
            password_confirmation: '',
            submitted: false
        }
    },
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            const { username, password, firstName, lastName, email, agencia, conta, password_confirmation } = this;
            const { dispatch } = this.$store;
            if ( password && firstName && lastName && email && agencia && conta && password_confirmation) {
                console.log('foi view');
                dispatch('authentication/cadastrar', { username, password, firstName, lastName, email, agencia, conta, password_confirmation });
            }
        }
    }
};
</script>