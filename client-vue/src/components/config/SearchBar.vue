<template>
  <div class="w3-card-4 w3-third w3-margin">
    <header class="w3-container w3-blue">
      <h4>Search</h4>
    </header>
    <div class="w3-container">
      <form v-on:submit.prevent="searchSymbols">
        <p>
          <input v-model="msg" placeholder="Search Symbols" id="_search" class="w3-input" />
        </p>
        <button type="submit" class="w3-button w3-blue">Go</button>
        <p />
      </form>
    </div>
    <footer class="w3-container w3-blue" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBar",
  props: {},
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    symbols: function() {
      return [];
    }
  },
  methods: {
    searchSymbols: async function(event) {
      var response = await axios.get("http://localhost:3000/api/search?symbol=" + this.msg);
      this.$emit('searchResults', response.data.data);
    }
  }
};
</script>

<style scoped>
</style>
