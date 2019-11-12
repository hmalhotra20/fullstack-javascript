import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tickers : []
  },
  mutations: {
    changeList(state, mySymbolsList) {
      state.tickers = mySymbolsList
    }
  },
  getters: {
    tickersList : state => state.tickers
  },
  actions: {
    updateTickers: (context, data) => {
      context.commit("tickersList", data);
    }
  }
});
