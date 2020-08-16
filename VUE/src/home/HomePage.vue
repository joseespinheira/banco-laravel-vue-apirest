<template>
    <div>
      <h1>BanZé</h1>
      <h1>Bem vindo(a)!</h1>

    </div>
</template>

<script>
export default {
    computed: {
        user () {
            return this.$store.state.authentication.user;
        },
        users () {
            return this.$store.state.users.all;
        }
    },
    created () {
        this.$store.dispatch('users/getAll');
    }
};
</script>

<style scoped>
.ag-conta{
    padding: 10px;
    border: 1px solid #ccc;
}
</style>