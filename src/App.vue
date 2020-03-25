<template>
  <v-app id="inspire">
  <!--Toolbar of content-->
    <v-content >
      <!-- <div id="_main"></div> -->
        <tool-bar v-if="!isAboutPage" />
       <router-view></router-view>
      <v-footer v-if="!isAboutPage"/>
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
    dark: false,
    drawer: null
  }),
  computed: {
    isAboutPage () {
      return this.$store.state.isAboutPage
    }
  }
}
</script>
<style scoped>
</style>
