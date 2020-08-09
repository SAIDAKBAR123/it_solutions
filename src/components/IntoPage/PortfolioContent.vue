<template>
  <div>
      <v-container class=" my-11">
          <v-row justify-md="start" class="py-3">
              <v-col class="px-0" cols="auto" v-for="item in categories" :key="item.name">
                  <v-btn x-large text  tile active-class>{{item.name}}</v-btn>
              </v-col>
          </v-row>
          <v-row justify="center" justify-lg="center">
              <v-col cols="12" md="6" lg="6" align-self="center" v-for="(item,i) in portfolio" :key="i">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                        class="item-select"
                        tile
                        :to="`/portfolio/${item.id}`"
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
                        <v-card-subtitle v-html="item.content">
                        </v-card-subtitle>
                    </v-card>
                  </v-hover>
              </v-col>
          </v-row>
          <v-row class="my-5">
              <v-col class="mx-auto">
                  <v-btn tile block color="#FBC02D" dark x-large to="/portfolio">Смотреть портфолио</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import Categories from '../../services/Categories'
import Portfolio from '../../services/Portfolio'
export default {
  data () {
    return {
      portfolio: [],
      categories: []
    }
  },
  methods: {
    getCategories () {
      Categories.getCategories().then(res => {
        console.log(res)
        this.categories = res
      })
    },
    getProjects (page, size) {
      Portfolio.getAll(page, size).then(res => {
        console.log(res)
        this.portfolio = res
      })
    }
  },
  created () {
    this.getCategories()
    this.getProjects(1, 4)
  }

}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  background: linear-gradient( 180deg, rgba(248, 248, 248, 0.007), rgba(26, 26, 26, 0.884));
  transition: 0.3s;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(4.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
