<template>
  <section class="">
    <v-container class="" :fluid="$vuetify.breakpoint.lg">
      <v-row justify-md="center">
        <v-col md="6" cols="12">
          <v-row justify="center" justify-md="center">
            <v-chip
              class="ma-2"
              label
              dark
              color="orange lighten-5"
              v-for="i in article.tags"
              :key="i.name"
            >
              <span class="orange--text nunito fs_18"> {{ i.name }}</span>
            </v-chip>
          </v-row>
          <h3 class="nunito fs_header_2 text-center">
           {{article.title}}
          </h3>
        </v-col>
      </v-row>
      <v-row class="" justify-md="center">
        <v-col md="4" cols="12">
          <v-card tile flat color="transparent" class=" text-center">
            <h2 class="nunito fs_18">ITsolutions</h2>
            <span class="grey--text">{{ article.createdAt | moment('Do MMM YYYY') }}</span>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center"  justify-md="center">
        <v-col cols="12" md="12">
          <v-card color="transparent" tile flat>
            <v-card
            v-if="false"
              tile
              flat
              color="transparent"
              class=" flex-end d-inline-flex text-center"
            >
                <v-badge
                  v-for="(i, c) in icons"
                  :key="c"
                  bordered
                  color="#4d4d4d"
                  :content="i.value"
                  class="mx-3"
                  overlap
                >
                  <v-avatar size="35" class="mx-1" text color="#dae2e4">
                    <v-icon dark size="25" color="black">{{ i.icon }}</v-icon>
                  </v-avatar>
                </v-badge>
            </v-card>
            <v-card-title class=" justify-center mt-10">
              <div class="circular--portrait hidden-sm-and-down">
                <img
                  class="rd"
                  src="https://i.pinimg.com/564x/42/15/28/421528c803bf0936a8d810256133872e.jpg"
                />
              </div>
            </v-card-title>
            <v-img
              style="position: relative;"
              max-height="500"
              :src="article.mainImage.mainImageUrl"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify-md="center" class="my-10">
        <v-col offset-md="1" cols="12" md="8">
          <v-card tile flat>
            <v-card-text :class="$vuetify.breakpoint.xs? 'nunito-ph' : 'nunito-sans'" v-html="article.body"> </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="3">
          <v-row>
            <v-col cols="9" offset-lg="1">
              <strong class=" text--secondary nunito-sans-default fs_20"
                >Похожие посты</strong
              ></v-col
            >
          </v-row>
          <v-row v-for="(item, i) in recentPosts" :key="i">
            <v-col v-if="false" cols="12" md="9" lg="9" offset-md="1">
              <v-card color="transparent" tile flat>
                <v-list class="my-0">
                  <h2 class="nunito fs_22 text-wrap px-3 item-select">
                    {{ item.title }}
                  </h2>
                  <v-list-item>
                    <v-list-item-avatar size="60">
                      <v-img :src="item.image"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.username"
                      ></v-list-item-title>
                      <span class="grey--text">{{ item.date }}</span>
                    </v-list-item-content>
                  </v-list-item>
                  <div>
                    <v-chip
                      color="orange lighten-5"
                      class="ma-1 black--text"
                      v-for="chip in item.chips"
                      :key="chip"
                      >{{ chip }}</v-chip
                    >
                  </div>
                </v-list>
              </v-card>
              <v-col cols="6"><v-divider></v-divider></v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row >
        <v-col >
          <v-comments :timesSeen="article.timesSeen" :comments="article.comments" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import VComments from '../VCustom/Comments'
import Blogs from '../../services/Blogs'
export default {
  components: {
    VComments
  },
  data: () => ({
    article: {
      body: '',
      createdAt: '',
      id: null,
      isCommentable: 1,
      mainImage: {},
      mainImageId: 3,
      status: 1,
      tags: [],
      timesSeen: 1,
      title: '',
      updatedAt: '',
      userId: null
    },
    icons: [
      {
        icon: 'mdi-instagram',
        value: '44'
      },
      {
        icon: 'mdi-telegram',
        value: '29'
      },
      {
        icon: 'mdi-linkedin',
        value: '18'
      }
    ],
    recentPosts: [
      {
        username: 'Jonhas Anotoli',
        title: 'Google is important while using Dropbox',
        topicImg:
          'https://gbsghana.com/wp-content/uploads/2019/09/It-Solutions-1.jpg',
        image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
        date: '2nd December, 2019',
        chips: ['Tapge', 'selon', 'C#', 'Cisco']
      },
      {
        username: 'Maxmillian Swaitherz',
        title: 'Rolling Hills and Natural Beauty - Vitsa - Greece',
        image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
        topicImg:
          'https://www.theitsolutions.io/sites/default/files/styles/full_width_max_width/public/2019-06/5DIV2444.jpg?itok=0itgYICh',
        date: '2th April, 2020',
        chips: ['Tapge', 'selon', 'programming']
      },
      {
        username: 'Abdul Bari',
        title: 'Japan - Improve your body and Mind While you escape christmas!',
        topicImg:
          'https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg',
        image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
        date: '24th March, 2019',
        chips: ['C++', 'Computer Networks', 'Cisco']
      }
    ],
    tags: ['C++', 'Computer Industry', 'Cisco', 'AI'],
    essay:
      '“We are a highly experienced team of hospitality real estate executives and this is not our first crisis. We have purposefully and thoroughly implemented cost-cutting and liquidity measures needed to face the COVID-19 threat,” said Thomas J. Baltimore, Jr., chairman and CEO of Park. “While equity markets have shown unprecedented volatility recently, Park remains the owner of iconic core assets like Hilton Hawaiian Village, the Hilton/Waldorf Bonnet Creek Resort, the JW Marriott San Francisco Union Square and the Hyatt Regency Boston. These assets—and many others like them owned by Park— hold strong market leadership positions and are managed by world-class hotel management companies. Recognizing the resiliency and value of these assets, I have recently made a significant purchase of additional shares of Park common stock as a demonstration of my confidence in this company.',
    essay1:
      '“We are a highly experienced team of hospitality real estate executives and this is not our first crisis. We have purposefully and thoroughly implemented cost-cutting and liquidity measures needed to face the COVID-19 threat,” said Thomas J. Baltimore, Jr., chairman and CEO of Park. “While equity markets have shown unprecedented volatility recently, Park remains the owner of iconic core assets like Hilton Hawaiian Village, the Hilton/Waldorf Bonnet Creek Resort, the JW Marriott San Francisco Union Square and the Hyatt Regency Boston. These assets—and many others like them owned by Park— hold strong market leadership positions and are managed by world-class hotel management companies. Recognizing the resiliency and value of these assets, I have recently made a significant purchase of additional shares of Park common stock as a demonstration of my confidence in this company.'
  }),
  methods: {
    getArticle () {
      Blogs.getSinglePost(this.$route.params.id).then(res => {
        console.log(res)
        this.article = res
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style>
.author {
  z-index: 200;
  display: flex;
  justify-content: center;
  position: absolute;
}
/* .rd{
  position: absolute;
  border-radius: 50%;
  border-color: rebeccapurple;
  border-width: 20px;
  max-width: 100px;
  max-height: 100px;
  top: 1;
  z-index: 10;
} */
.circular--portrait {
  position: absolute;
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  border-width: 10px;
  z-index: 2;
  top: 2;
}

.circular--portrait img {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 2;
  color: #4d4d4d;
}
</style>
