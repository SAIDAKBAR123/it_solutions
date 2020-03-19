<template>
  <v-app id="inspire">
  <!--Toolbar of content-->
    <v-content v-resize="onResize">
      <!-- <div id="_main"></div> -->
      <v-parallax :height="windowSize.y-windowSize.y/2" src="https://www.pptgrounds.com/wp-content/uploads/2015/02/Orange-Color-PPT-Backgrounds.jpg"></v-parallax>
        <tool-bar />
      <v-container
        fluid
      >
       <router-view></router-view>
      </v-container>
      <v-footer/>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from './components/VToolbar/ToolBar'
import Footer from './components/VFooter/Footer'
export default {
  components: {
    ToolBar,
    VFooter: Footer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    windowSize: {
      x: 0,
      y: 0
    }
  }),
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  },
  created () {
    this.onResize()
    this.$vuetify.theme.dark = false
  }
}
</script>
<style scoped>
#_main{

  background: url('https://abconsultech.com/wp-content/uploads/2019/06/IT-Solutions.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-color: #cccccc;
  height: 20%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
