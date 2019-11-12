<template>
    <div class="w3-card-4  w3-margin">
        <header class="w3-container w3-indigo">
          <h4>Results</h4>
        </header>
        <div class="w3-container w3-pale-yellow">
          <p>
            <ul class="w3-ul" v-if="symbols">
              <li class="w3-bar w3-small" v-for="symbol in symbols" v-bind:key="symbol.symbol">
                <div class="w3-row">
                  <div class="w3-dark-grey w3-quater w3-bar-item w3-col m4 l1"> 
                    <b> {{ symbol.symbol }} </b>
                  </div>
                  <div class="w3-blue-grey w3-quater w3-bar-item w3-col m4 l3"> {{ symbol.name }} </div>
                  <div class="w3-blue-grey w3-center w3-quater w3-bar-item w3-col m4 l1"> {{ symbol.currency }} </div>
                  <div class="w3-teal w3-bar-item w3-col m4 l3"> {{ symbol.stock_exchange_long }} </div>
                  <div class="w3-teal w3-bar-item w3-col m4 l1"> {{ symbol.stock_exchange_short }} </div>
                  <div class="w3-red w3-bar-item w3-col m4 l1"> {{ symbol.price }} </div>
                  <div class="w3-bar-item w3-col m2 l1 w3-dark-grey"> 
                    <a href="#" @click="symbolClicked(symbol.symbol, $event)" class=" w3-text-white">Add</a>
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
      //console.log(`You selected Symbol: ${symbol}, Event: ${event}`);
      console.log("You selected Symbol: " + symbol + " and event: ", event);
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

