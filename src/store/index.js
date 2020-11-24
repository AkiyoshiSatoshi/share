import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user: ""
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.logout = payload;
    },
    changeUserData(state, payload) {
      state.user.profile = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      let responseLogin = await axios.post(
        "https://warm-ridge-51366.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        }
      );
      let responseUser = await axios.get(
        "https://warm-ridge-51366.herokuapp.com/api/user",
        {
          params: {
            email: email,
          },
        }
      );
      commit("auth", responseLogin.data.auth);
      commit("user", responseUser.data.data[0]);
      router.replave("/home");
    },
    logout({ commit }) {
      axios.post("https://warm-ridge-51366.herokuapp.com/api/logout", {
        auth: this.state.auth,
      })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replave("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeUserData({ commit }, { profile }) {
      commit("changeUserData", profile);
    }
  },
  modules: {
  }
})
