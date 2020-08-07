<template>
  <v-container class="my-5" :fluid="$vuetify.breakpoint.lg">
    <v-row justify="center" justify-md="center">
      <h2 class=" pt-12 text-center nunito fs_header">Самый популярный</h2>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-col v-for="(item, n) in popularPosts" :key="n" cols="12" sm="3" md="3">
        <v-card flat  class="mx-2 my-12" max-width="374">
          <v-img
            class="elevation-4"
            :height="270"
            :src="item.topicImg"
          ></v-img>

          <v-card-title class="nunito py-1 item-select">{{ item.title }}</v-card-title>
          <!-- <v-card-title>Tonight's availability</v-card-title> -->
          <v-list v-if="false" class="my-0 py-0">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.username"></v-list-item-title>
                <span class="grey--text">{{ item.date }}</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-chip-group
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip v-for="dum in item.chips" :key="dum">{{ dum }}</v-chip>
            </v-chip-group>
          </v-card-actions>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      popularPosts: [
        {
          username: 'Jonhas Anotoli',
          title: 'Google is important while using Dropbox',
          topicImg: 'https://gbsghana.com/wp-content/uploads/2019/09/It-Solutions-1.jpg',
          image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
          date: '2nd December, 2019',
          chips: ['Tapge', 'selon', 'programming', 'C#', 'Cisco']
        },
        {
          username: 'Maxmillian Swaitherz',
          title: 'Google is important while using Dropbox',
          image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
          topicImg: 'https://miro.medium.com/max/934/1*UfosUyZgOE97ntxNVuBFEg.png',
          date: '2th April, 2020',
          chips: ['Tapge', 'selon', 'programming']
        },
        {
          username: 'Abdul Bari',
          title: 'Google is important while using Dropbox',
          topicImg: 'https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg',
          image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
          date: '24th March, 2019',
          chips: ['C++', 'Computer Networks', 'Cisco']
        },
        {
          username: 'Abdul Bari',
          title: 'Google is important while using Dropbox',
          topicImg: 'https://mews.agency/wp-content/uploads/2019/05/web-design-1.jpg',
          image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
          date: '5th January, 2019',
          chips: ['C++', 'Computer Networks', 'Cisco']
        }
      ]
    }
  }
}
</script>

<style></style>
