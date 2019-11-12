<template>
  <div class="w3-card-4 w3-third w3-margin">
    <header class="w3-container w3-blue">
      <h4>List of Added Symbols</h4>
    </header>
    <div class="w3-container">
      <div v-if="symbols">
        <div
          v-for="symbol in symbols"
          :key="symbol"
          class="w3-tag w3-blue w3-padding"
          style="margin: 5px;"
        >
          {{ symbol }}
        </div>
      </div>
    </div>
    <footer class="w3-container w3-blue" />
  </div>
</template>

<script>

export default {
  name: 'SymbolsList',
  props: {
    msg: String,
    symbols: Array
  }
}
</script>

<style scoped>
</style>
