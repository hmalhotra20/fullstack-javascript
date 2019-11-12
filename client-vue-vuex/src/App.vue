<template>
<v-app class="ma-0 pa-0">
  <v-app-bar class="ma-0 pa-0" app>
    <div class="w3-bar w3-dark-grey w3-large w3-text-white">
      <a class="w3-bar-item w3-button w3-text-white" href="#">
        <i class="fa fa-bars"></i>
      </a>
      <router-link class="w3-bar-item w3-text-white w3-button w3-hover-grey" to='/'>Home</router-link>
      <router-link class="w3-bar-item w3-text-white w3-button w3-hover-grey" to='/config'>Config</router-link>
      <router-link class="w3-bar-item w3-text-white w3-button w3-hover-grey w3-right" to='/dashboard'>Dashboard</router-link>
    </div>
  </v-app-bar>
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style scoped>
</style>
