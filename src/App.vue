<template>
  <v-app full-height class="mainapp">
    <!-- <v-content> -->
      <v-container align-center style="height:100%">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
      </v-container>
    <!-- </v-content> -->
  </v-app>
</template>

<script lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>
<style>
html {
    height: 100%;
}
.mainapp {
  position: relative;
  z-index: 1;
  /* background-color: rgba(71, 92, 122, .5) !important; */
}
.mainapp::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: .15;
  background: url('@/assets/codebackgroundminimal.png') !important;
  /* bac */
  background-size: cover !important;
  /* background-color: rgba(71, 92, 122, .5) !important; */

}
</style>