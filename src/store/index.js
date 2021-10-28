import Vue from 'vue';
import Vuex from 'vuex';

import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from "../firebaseDb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [],
  },
  actions: {
    bindUsers: firestoreAction(({ bindFirestoreRef }) => {
      console.log("in action")
      return bindFirestoreRef("allUsers", db.collection("users"));
    }),
  },
  mutations: {
    ...vuexfireMutations,
  },
  getters: {
    users(state) {
      return state.allUsers;
    },
  },
});