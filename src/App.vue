<template>
  <v-app id="inspire">
  <!--Toolbar of content-->
    <v-content >
      <!-- <div id="_main"></div> -->
        <tool-bar />
       <router-view></router-view>
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
    drawer: null
  }),

  created () {
    this.$vuetify.theme.dark = false
  }
}
</script>
<style scoped>
.video
{
  width: 100%;
  margin-left: 0%;
position: absolute;
   background: rgba(255, 0, 0, 0.829);

}

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
