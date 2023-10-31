import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos
    },
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: 'todos-app',
      paths: [
        'todos'
      ],
    }),
  ]
})
