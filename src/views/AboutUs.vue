<template>
  <div class=" overflow-hidden">
  <div class="section-1">
        <video-bg :sources="['https://static.videezy.com/system/resources/previews/000/042/970/original/bg0002-5.mp4']" img="sa">
    <v-card color="transparent" width="100%" height="100%">
          <v-row style="height:100%" justify="center" align="center">
        <v-col cols="12" align="center">
            <h3 class="display-4 orange--text border-yellow">IT SOLUTIONS</h3>
            <span class="white--text fs_header_2 nunito">Future starts from today !</span>
        </v-col>
    </v-row>
    </v-card>
</video-bg>
  </div>
    <div class="section-2">
        <v-card height="1000">
            <v-card-title>GHasdad</v-card-title>
        </v-card>
    </div>
  </div>
</template>

<script>
//  import * as easings from 'vuetify/es5/services/goto/easing-patterns'
export default {
  methods: {
    getAll () {
      console.log('up')
    },
    getAll1 () {
      console.log('down')
    }
  },
  created () {
    this.$store.commit('aboutPage', true)
  }
}
</script>

<style>

</style>
