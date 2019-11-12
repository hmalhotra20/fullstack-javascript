<template>
  <div id="app" class="">

    <div class="w3-bar w3-dark-grey w3-large">
      <a class="w3-bar-item w3-button" href="#">
        <i class="fa fa-bars"></i>
      </a>
      <router-link class="w3-bar-item w3-button w3-hover-grey" to='/'>Home</router-link>
      <router-link class="w3-bar-item w3-button w3-hover-grey" to='/config'>Config</router-link>
      <router-link class="w3-bar-item w3-button w3-hover-grey w3-right" to='/dashboard'>Dashboard</router-link>
    </div>
    <router-view></router-view>

  </div>
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
