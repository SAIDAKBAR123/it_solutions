<template>
  <div>
     <v-container>
       <v-row>
          <v-col class="pb-0">
              <h3 class="nunito fs_28 text-capitalize">Портфолио</h3>
          </v-col>
       </v-row>
        <v-row justify-md="start" class="py-3">
              <v-col class="px-0" cols="auto" v-for="item in categories" :key="item.id">
                  <v-btn x-large text @click="getLoad" tile active-class rounded>{{item.name}}</v-btn>
              </v-col>
        </v-row>
       <v-row>
                <v-col cols="12" md="6" lg="6" align-self="center" v-for="(item,i) in projects" :key="i">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                        :to="`/portfolio/${item.id}`"
                        target="_blank"
                        class="item-select"
                        tile
                        :elevation="hover ? 10 : 0"
                        max-width="100%"
                    >
                        <v-img
                        :aspect-ratio="16/9"
                        :src="item.images[0].url"
                        height="570px"
                        >
                            <div
                                v-if="hover"
                                class="d-flex v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                IT SOLUTIONS
                            </div>
                        </v-img>
                        <v-card-title>
                              <transition name="slide-fade">
                            <v-icon class="px-2" color="black" v-if="hover">mdi-arrow-right</v-icon>
                            <v-icon class="" color="black" v-else>-</v-icon>
                              </transition>
                            <span>{{ item.title}}</span>
                        </v-card-title>
                    </v-card>
                  </v-hover>
              </v-col>
         <v-col cols="4">
         </v-col>
       </v-row>
       <v-row justify="center">
          <v-col cols="auto">
              <v-btn dark color="yellow darken-3" elevation="0" rounded block x-large class="px-7 py-2 text-capitalize">загрузить больше</v-btn>
          </v-col>
       </v-row>
          <v-overlay :value="overlay">
             <v-progress-circular indeterminate size="64"></v-progress-circular>
          </v-overlay>
     </v-container>
  </div>
</template>

<script>
import Categories from '../services/Categories'
import Portfolio from '../services/Portfolio'
export default {
  data () {
    return {
      categories: [],
      overlay: false,
      isAvailable: false,
      projects: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.isAvailable = true
    }, 3000)
  },
  methods: {
    getLoad () {
      this.overlay = true
      setTimeout(() => {
        this.overlay = false
      }, 4000)
    },
    getCategories () {
      Categories.getCategories().then(res => {
        console.log(res)
        this.categories = res
      })
    },
    getProjects (page) {
      Portfolio.getAll(page).then(res => {
        console.log(res)
        this.projects = res
      })
    }
  },
  created () {
    this.getCategories()
    this.getProjects(1)
  }
}
</script>

<style>

</style>
