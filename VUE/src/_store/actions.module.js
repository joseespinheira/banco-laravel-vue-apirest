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

        saldo({ dispatch, commit }){

            actionService.sacar()
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

    },
    mutations: {

    }
}
