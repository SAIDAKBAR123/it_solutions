<template>
  <div v-resize="onResize" class="home">
      <v-card :color="$vuetify.theme.dark ? '' :'#ebedf785'" tile flat>
         <v-parallax :height="windowSize.y-windowSize.y/3" src="https://az592774.vo.msecnd.net/pgl-release/Images/ArticleImages/18/18089.jpg">
          <v-row>
            <v-col align-self="center" offset-md="2">
              <v-card max-width="530px" elevation="12">
                <v-card-text>
                      <v-row align="center">
                        <v-col cols="auto">
                          <v-avatar size="50">
                          <img
                            src="https://i.pinimg.com/736x/bf/f2/34/bff234b0de46de95fb6d540934c1703b.jpg"
                            alt="John"
                          >
                      </v-avatar>
                        </v-col>
                        <v-col class="px-1" md="7">
                            <span class="nunito">Jose Marian</span><br>
                            <span class="nunito-sans-default">2nd Sep, 2020</span>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <h4 style="line-height: 40px;" class="nunito fs_28_bold">Life in Germany is totally awesome. Don't you mind so?</h4>
                        </v-col>
                        <v-col cols="12">
                           <v-btn color="yellow darken-2" class=" text-capitalize px-7" dark>Read more</v-btn>
                        </v-col>
                      </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
       </v-parallax>
        <popular-cards />
      </v-card>
      <v-container class="">
      <v-row no-gutters>
        <v-col
          cols="6"
          md="7"
        >
          <v-card
            color="transparent"
            class="pa-2"
            outlined
            tile
          >
            <v-row>
              <v-col  cols="auto">
                <v-img max-width="100%" max-height="420" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F12%2Fbusiness-3605367_1920-1200x741.jpg"></v-img>
              </v-col>
              <v-col align-self="center" class="mx-1 py-0" cols="auto">
                <v-row justify="center" align="center">
                  <v-col class="py-0 px-1" cols="auto" align-self="center">
                     <v-icon size="18" color="grey darken-4" dark>mdi-calendar-text-outline</v-icon>
                  </v-col>
                  <v-col cols="auto" class="px-0" align-self="center">
                    <span class="nunito-sans-default"> 2/21/2020</span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="py-0" cols="12">
                <h3 class="nunito item-select">Top-5 тенденций digital-маркетинга, на которые следует обратить внимание в 2020 году</h3>
                <p class="nunito-sans text--secondary">Digital-маркетинг меняется каждый год. Тенденции меняются как раз тогда, когда ты думаешь, что делаешь всё верно. Ваша единственная лучшая защита от конкуренции — это уникальный подход. Помните...</p>
              </v-col>
              <v-col>
                <v-row justify="start" align="center">
                    <v-col>
                      <v-icon></v-icon>
                    </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="5"
        >
          <v-card
            class="pa-2"
            tile
            flat
          >
            <recent-posts />
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
    // this.onResize()
  },
  created () {
    this.onResize()
    console.log('about')
    this.$store.commit('aboutPage', false)
  }
}
</script>
<style lang="scss" scoped>
.asd{
color: #ebedf785;
}

</style>
