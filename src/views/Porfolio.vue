<template>
  <div>
     <v-container>
       <v-row no-gutters>
         <v-col  cols="12" md="3" sm="4" v-for="site in projects" :key="site.name" >
           <v-card class="mx-2 my-2">
             <v-skeleton-loader
             v-show="!isAvailable"
      class="mx-auto"
      max-width="100%"
      type="card-heading, image"
    >  </v-skeleton-loader>
             <v-card-title v-show="isAvailable">{{site.name}}</v-card-title>
              <iframe v-show="isAvailable" scrolling="no"  style=" width:100%; height: 400px; overflow: hidden; border: none;" :src="site.path"></iframe>
           </v-card>
         </v-col>
         <v-col cols="4">
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
        path: 'http://airtechnic.uz/'
      },
      {
        name: 'Traffic.uz',
        path: 'http://traffic.uz/'
      },
      {
        name: 'Yuridik.uz',
        path: 'https://yuridik.uz/'
      },
      {
        name: 'Lider PRom',
        path: 'http://liderprom.uz/'
      },
      {
        name: 'Agarcis',
        path: 'https://agarcis.uz/'
      },
      {
        name: 'YAIT',
        path: 'http://yait.uz/'
      },
      {
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
