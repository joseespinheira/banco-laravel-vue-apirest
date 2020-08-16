import { actionService } from '../_services';
import { router } from '../_helpers';

export const actions = {
    namespaced: true,
    actions: {
        depositar({ dispatch, commit }, {agencia, conta, valor}){

            actionService.depositar(agencia,conta,valor)
                .then(
                    bla => {
                        router.push('/depositado');
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                )
        },

        sacar({ dispatch, commit }, {agencia, conta, valor}){

            actionService.sacar(agencia,conta,valor)
                .then(
                    bla => {
                        router.push('/sacado');
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                )
        },

        saldo({ dispatch, commit }, {user}){
            commit('saldo',  "false" );
            actionService.saldo(user)
                .then(
                    bla => {
                        commit('saldo',  "true" );
                    },
                    error => {
                        commit('loginFailure', error);
                        dispatch('alert/error', error, { root: true });
                    }
                )
        },

    },
    mutations: {
        saldo(state) {
            state.status = { saldo: true };
        },
    }
}
