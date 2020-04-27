<template>
  <div>
    <v-container class="">
      <h3 class="display-1 my-3">Recent Posts</h3>
      <v-row class="my-3" v-for="(item, i) in popularPosts" :key="i" no-gutters>
        <v-card flat max-width="100%">
          <v-row>
            <v-col cols="12" md="3">
              <v-img
                class="elevation-0 white--text align-end"
                :height="140"
                :src="item.topicImg"
              >
              </v-img>
            </v-col>
            <v-col class="px-1" cols="12" md="9">
              <v-row align="center">
               <v-col align-self="center" class="mx-1 py-0" cols="auto">
                  <v-icon size="18" color="grey darken-4" dark>mdi-calendar-text-outline</v-icon>
                <span class="nunito-sans-default px-1" v-text="item.date"></span>
              </v-col>
              </v-row>
             <div  @click="$router.push(item.path)"
                class="nunito item-select px-2"> {{ item.title.length >82 ? item.title.substring(0,79)+'...': item.title }}</div>
              <v-card-text class="text--primary py-0">
                      <v-row>
                           <v-col class="px-1" cols="auto" v-for="(cr,i) in item.chips" :key="i"><v-chip>{{cr}}</v-chip></v-col>
                      </v-row>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row justify="start">
          <v-col cols="auto">
            <v-pagination circle :length="5" :total-visible="5"></v-pagination>
          </v-col>
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
          title: 'Не пренебрегайте продвижением в профильных сообществах',
          topicImg:
            'https://santabarbaraca.com/content/uploads/2015/12/santa-barbara-courhouse-update.jpg',
          image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
          date: '18:34 / 26.04.2020',
          chips: ['Tapge', 'selon', 'programming', 'C#', 'Cisco'],
          path: 'article/2'
        },
        {
          username: 'Maxmillian Swaitherz',
          title: 'Как продвигать сайт, если поисковики забирают весь трафик себе',
          topicImg:
            'https://www.investopedia.com/thmb/xmG9FV9J_3hd_p8TMktrBG34Rvs=/1620x1080/filters:fill(auto,1)/achievement-agreement-arms-business-agreement-business-deal-cheerful-1448611-pxhere.com-afa4d8399a684cfbb5467402c7639663.jpg',
          image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
          date: '18:34 / 26.04.2020',
          chips: ['Tapge', 'selon', 'programming'],
          path: 'article/2'
        },
        {
          username: 'Abdul Bari',
          title: 'Masalalarning o’ziga kelsak, boshlanishida oson bo’lmaydi. Lekin vaqt o’tib 100-300 ta masala ishlay olganizdan keyin, jarayon avtomatlashib ketadi.',
          topicImg:
            'https://www.startupshk.com/wp-content/uploads/2014/06/060714_Google_DSC4350.jpg',
          image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
          date: '18:34 / 26.04.2020',
          chips: ['C++', 'Computer Networks', 'Cisco'],
          path: 'article/2'
        },
        {
          username: 'Abdul Bari',
          title: 'Google is important while using Dropbox',
          topicImg:
            'https://www.thesun.co.uk/wp-content/uploads/2020/03/NINTCHDBPICT000569046725.jpg',
          image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
          date: '18:34 / 26.04.2020',
          chips: ['C++', 'Computer Networks', 'Cisco'],
          path: 'article/2'
        }
      ]
    }
  }
}
</script>

<style></style>
