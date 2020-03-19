<template>
  <div v-resize="onResize" class="home">
      <v-card color="#ebedf785" tile flat>
         <v-parallax :height="windowSize.y-windowSize.y/2" src="https://alltips.in/wp-content/uploads/2019/11/08162a40-accounting-aerial-businesswoman-1043506-1200x858.jpg">
       </v-parallax>
        <popular-cards />
      </v-card>
      <v-container class="">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="8"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <recent-posts />
          </v-card>
        </v-col>
        <v-col
          cols="6"
          md="4"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            THIS SIDE IS ON PROCESS...
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PopularCards from '../components/VCustom/PopularCards'
import RecentPosts from '../components/VCustom/RecentPosts'
// @ is an alias to /src
export default {
  name: 'Home',
  data () {
    return {
      windowSize: {
        x: 0,
        y: 0
      }
    }
  },
  components: {
    PopularCards,
    RecentPosts
  },
  methods: {
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    }
  },
  mounted () {
    this.onResize()
  }
}
</script>
<style scoped>
.asd{
color: #ebedf785;
}
</style>
