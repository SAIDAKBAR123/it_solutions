<template>
  <div>
    <v-container class="my-5">
      <h3 class="display-1 my-5">Recent Posts</h3>
      <v-row class="my-3" v-for="(item, i) in popularPosts" :key="i" no-gutters>
        <v-card flat max-width="100%">
          <v-row no-gutters>
            <v-col cols="3">
              <v-img
                class="elevation-4 white--text align-end"
                :height="(100-20)+'%'"
                :src="item.topicImg"
              >
              </v-img>
            </v-col>
            <v-col cols="9">
              <v-card-title class="nunito fs_28_bold">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="text--primary">
                <v-list class="my-0">
                  <v-list-item>
                    <v-list-item-avatar size="50">
                      <v-img :src="item.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.username"
                      ></v-list-item-title>
                      <span class="grey--text">{{ item.date }}</span>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row>
          <div class="text-center justify-center flex">
    <v-pagination
      v-model="page"
      :length="15"
      :total-visible="7"
    ></v-pagination>
  </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      popularPosts: [
        {
          username: 'Jonhas Anotoli',
          title: 'Google is important while using Dropbox',
          topicImg:
            'https://santabarbaraca.com/content/uploads/2015/12/santa-barbara-courhouse-update.jpg',
          image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
          date: '2nd December, 2019',
          chips: ['Tapge', 'selon', 'programming', 'C#', 'Cisco']
        },
        {
          username: 'Maxmillian Swaitherz',
          title: 'Google is important while using Dropbox',
          topicImg:
            'https://www.investopedia.com/thmb/xmG9FV9J_3hd_p8TMktrBG34Rvs=/1620x1080/filters:fill(auto,1)/achievement-agreement-arms-business-agreement-business-deal-cheerful-1448611-pxhere.com-afa4d8399a684cfbb5467402c7639663.jpg',
          image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
          date: '2th April, 2020',
          chips: ['Tapge', 'selon', 'programming']
        },
        {
          username: 'Abdul Bari',
          title: 'Google is important while using Dropbox',
          topicImg:
            'https://www.startupshk.com/wp-content/uploads/2014/06/060714_Google_DSC4350.jpg',
          image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
          date: '24th March, 2019',
          chips: ['C++', 'Computer Networks', 'Cisco']
        },
        {
          username: 'Abdul Bari',
          title: 'Google is important while using Dropbox',
          topicImg:
            'https://www.thesun.co.uk/wp-content/uploads/2020/03/NINTCHDBPICT000569046725.jpg',
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
