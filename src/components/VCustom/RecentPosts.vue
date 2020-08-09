<template>
  <div>
    <v-container class="py-0">
      <v-row v-for="(item, i) in posts" :key="i" no-gutters>
        <v-card flat max-width="100%" color="transparent">
          <v-row>
            <v-col cols="12" md="4" sm="4">
                 <v-img
                 :height="140"
                :width="200"
                class="elevation-0 white--text"
                :src="item.mainImage.mainImageUrl"
              >
              </v-img>
            </v-col>
            <v-col class="px-1" cols="12" md="8" sm="8">
              <v-row align="center">
               <v-col align-self="center" class="mx-1 py-0" cols="auto">
                  <v-icon size="18" color="grey darken-4" dark>mdi-calendar-text-outline</v-icon>
                <span class="nunito-sans-default px-1"> {{item.createdAt | moment('HH:mm / DD.MM.YYYY')}} </span>
              </v-col>
              </v-row>
             <div  @click="$router.push(`/article/${item.id}`)"
                class="nunito item-select px-2 text-md-body-1"> {{ item.title.length >82 ? item.title.substring(0,79)+'...': item.title }}</div>
              <v-card-text class="text--primary py-0">
                      <v-row class="py-0">
                           <v-col class="px-1" cols="auto" v-for="(cr,i) in item.tags" :key="i"><v-chip>{{cr.name}}</v-chip></v-col>
                      </v-row>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row justify="start">
          <v-col cols="auto">
            <v-pagination color="yellow darken-2" circle v-model="page" :length="5" :total-visible="5"></v-pagination>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Blogs from '../../services/Blogs'
export default {
  data () {
    return {
      page: 1,
      posts: []
    }
  },
  created () {
    console.log(this.$vuetify.breakpoint)
    this.getBlogs(1, 10)
  },
  methods: {
    getBlogs (page, size) {
      Blogs.getAllPosts(page, size).then(res => {
        console.log(res)
        this.posts = res
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style></style>
