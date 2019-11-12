<template>
  <div>
    <div class="w3-row">
      <SearchBar @searchResults="showResults"></SearchBar>
      <SymbolsList v-bind:symbols="mySymbolsList"></SymbolsList>
    </div>
    <div class="w3-row">
      <SearchResults v-bind:symbols="searchResults" @symbolClicked="addSymbols"></SearchResults>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import SymbolsList from './SymbolsList'

export default {
  name: 'Config',
  props: {
    msg: String
  },
  created() {
      axios.get(
              'http://localhost:3000/api/config')
              .then((response) => {
                  console.log("symbols: ", response);
                  this.mySymbolsList = response.data;
          }, error => {
                console.log(error);
          })
  },
  data() {
      return {
          searchResults: [],
          mySymbolsList: []
      }
  },
  components : {
      SearchBar,
      SearchResults,
      SymbolsList
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
                  console.log("symbols: ", response);
                  this.mySymbolsList = response.data;
          }, error => {
                console.log(error);
          })
      }
  }
}
</script>

<style scoped>
</style>
