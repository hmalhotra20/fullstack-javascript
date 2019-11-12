<template>
  <div class="w3-card-4  w3-margin">
    <header class="w3-container w3-indigo">
      <h4>Results</h4>
    </header>
    <div class="w3-container ">
      <p>
        <ul
          v-if="symbols"
          class="w3-ul"
        >
          <li
            v-for="ticker in symbols"
            :key="ticker.symbol"
            class="w3-bar w3-small"
          >
            <div class="w3-row">
              <div class="w3-dark-grey w3-quater w3-bar-item w3-col m4 l1">
                <b> {{ ticker.symbol }} </b>
              </div>
              <div class="w3-blue-grey w3-quater w3-bar-item w3-col m4 l3">
                {{ ticker.name }}
              </div>
              <div class="w3-blue-grey w3-center w3-quater w3-bar-item w3-col m4 l1">
                {{ ticker.currency }}
              </div>
              <div class="w3-teal w3-bar-item w3-col m4 l3">
                {{ ticker.stock_exchange_long }}
              </div>
              <div class="w3-teal w3-bar-item w3-col m4 l1">
                {{ ticker.stock_exchange_short }}
              </div>
              <div class="w3-red w3-bar-item w3-col m4 l1">
                {{ ticker.price }}
              </div>
              <div class="w3-bar-item w3-col m2 l1 w3-dark-grey">
                <a
                  href="#"
                  class=" w3-text-white"
                  @click="symbolClicked(ticker.symbol, $event)"
                >Add</a>
              </div>
            </div>
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SearchResults',
  props: {
    symbols: Array
  },
  methods: {
    symbolClicked(symbol, event) {
      this.$emit('symbolClicked', symbol);
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.w3-row {
  font-weight: bold;
}
</style>
