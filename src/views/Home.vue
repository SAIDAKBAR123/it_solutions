<template>
  <div class="mt-5 home">
    <popular-cards />
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
  components: {
    PopularCards,
    RecentPosts
  }
}
</script>
