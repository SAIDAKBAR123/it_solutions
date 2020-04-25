<template>
  <v-app id="inspire">
  <!--Toolbar of content-->
    <v-content >
      <!-- <div id="_main"></div> -->
        <tool-bar v-if="!isAboutPage" />
        <transition name="component-fade" mode="out-in">
       <router-view></router-view>
        </transition>
      <v-footer />
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
