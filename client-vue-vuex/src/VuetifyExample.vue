<template>
<!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
    <!-- -->Navigation
  </v-navigation-drawer>

  <v-system-bar app>
  System
  </v-system-bar>
  <v-app-bar app>
  <div class="w3-bar w3-dark-grey w3-large">
    <a class="w3-bar-item w3-button" href="#">
      <i class="fa fa-bars"></i>
    </a>
    <router-link class="w3-bar-item w3-button w3-hover-grey" to='/'>Home</router-link>
    <router-link class="w3-bar-item w3-button w3-hover-grey" to='/config'>Config</router-link>
    <router-link class="w3-bar-item w3-button w3-hover-grey w3-right" to='/dashboard'>Dashboard</router-link>
  </div>
  <router-view></router-view>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>
    Content
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
    <v-carousel>
  <v-carousel-item
    v-for="(color, i) in colors"
    :key="color"
  >
    <v-sheet
      :color="color"
      height="100%"
      tile
    >
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <div class="display-3">Slide {{ i + 1 }}</div>
      </v-row>
    </v-sheet>
  </v-carousel-item>
</v-carousel>
    </v-container>
  </v-content>

  <v-footer app>
    <!-- -->Foooter
  </v-footer>
</v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 18px;
}
</style>
