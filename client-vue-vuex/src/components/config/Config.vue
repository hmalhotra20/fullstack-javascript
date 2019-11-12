<template>
  <div>
    <div class="w3-row">
      <SearchBar @searchResults="showResults" />
      <SymbolsList :symbols="tickersList" />
    </div>
    <div class="w3-row">
      <SearchResults
        :symbols="searchResults"
        @symbolClicked="addSymbols"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import SymbolsList from './SymbolsList'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Config',
  components : {
      SearchBar,
      SearchResults,
      SymbolsList
  },
  props: {
    msg: String
  },
  data() {
      return {
          searchResults: []
      }
  },
  created() {
      axios.get(
              'http://localhost:3000/api/config')
              .then((response) => {
                  this.$store.commit('changeList', response.data);
          }, error => {
                console.log(error);
          })
  },
  computed : {
    //...mapState(['tickers']),
    ...mapGetters(['tickersList'])
  },
  methods: {
      showResults(results) {
          this.searchResults = results;
      },
      addSymbols(symbol)    {
          axios.post(
              'http://localhost:3000/api/config',{
                symbol : symbol
              }).then((response) => {
                  this.$store.commit('changeList', response.data);
          }, error => {
                console.log(error);
          })
      }
  }
}
</script>

<style scoped>
</style>
