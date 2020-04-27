<template>
  <div>
     <v-container>
       <v-row>
          <v-col class="pb-0">
              <h3 class="nunito fs_28 text-capitalize">Портфолио</h3>
          </v-col>
       </v-row>
        <v-row justify-md="start" class="py-3">
              <v-col class="px-0" cols="auto">
                  <v-btn x-large text  tile active-class rounded>ВСЕ РАБОТЫ</v-btn>
              </v-col>
              <v-col  class="px-0"  cols="auto">
                  <v-btn x-large  text tile>ВЕБ-САЙТЫ</v-btn>
              </v-col>
              <v-col cols="auto">
                  <v-btn x-large  text tile active-class>ВЕБ-ПРИЛОЖЕНИЯ</v-btn>
              </v-col >
               <v-col class="px-0" cols="auto">
                  <v-btn x-large  text tile>МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ</v-btn>
              </v-col>
        </v-row>
       <v-row>
                <v-col cols="12" md="6" lg="6" align-self="center" v-for="(item,i) in projects" :key="i">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                        :href="item.path"
                        target="_blank"
                        class="item-select"
                        tile
                        :elevation="hover ? 10 : 0"
                        max-width="100%"
                    >
                        <v-img
                        :aspect-ratio="16/9"
                        :src="item.image"
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
                            <span>{{ item.name}}</span>
                        </v-card-title>
                    </v-card>
                  </v-hover>
              </v-col>
         <v-col cols="4">
         </v-col>
       </v-row>
       <v-row justify="center">
          <v-col cols="auto">
              <v-btn dark color="yellow darken-3" rounded block x-large class="px-7 py-2 text-capitalize">Load More</v-btn>
          </v-col>
       </v-row>
     </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAvailable: false,
      projects: [{
        name: 'Aritech',
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        path: 'http://airtechnic.uz/'
      },
      {
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        name: 'Traffic.uz',
        path: 'http://traffic.uz/'
      },
      {
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        name: 'Yuridik.uz',
        path: 'https://yuridik.uz/'
      },
      {
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        name: 'Lider PRom',
        path: 'http://liderprom.uz/'
      },
      {
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        name: 'Agarcis',
        path: 'https://agarcis.uz/'
      },
      {
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        name: 'YAIT',
        path: 'http://yait.uz/'
      },
      {
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        name: 'Yomi uz',
        path: 'http://yomi.uz/'
      }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.isAvailable = true
    }, 3000)
  },
  methods: {
  }
}
</script>

<style>

</style>
