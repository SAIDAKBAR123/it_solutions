<template>
  <v-app id="inspire">
     <!-- <v-parallax
    src="https://cdn2.f-cdn.com/contestentries/1411561/3896505/5bc44e200926f_thumb900.jpg"
  ></v-parallax> -->
  <!--Toolbar of content-->
  <tool-bar/>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
              <h3>jhrldasd</h3>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import ToolBar from './components/VToolbar/ToolBar'
export default {
  components: {
    ToolBar
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
