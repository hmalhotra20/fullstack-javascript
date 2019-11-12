<template>
<div>
    <v-container fluid>
      <div class="w3-display-container w3-blue-light-grey" style="height:600px;">
        <div class="w3-display-middle w3-center">
          <h2>Welcome to the POC App for Node and Vuejs</h2>
          <h4>This is the HOME component</h4>
          <h4>Please click on Config first and then Dashboard</h4>
        </div>
      </div>
    </v-container>
    <v-footer app>
      <i class="w3-small">This is a POC App only and still in progress.</i>
    </v-footer>
</div>
</template>

<script>
export default {
  name: 'Home',

  props: {

  },
  data () {
      return {
      }
    }
}
</script>

<style scoped>
body, html {
}
</style>
