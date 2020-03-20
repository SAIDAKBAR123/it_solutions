<template>
  <section class="mx-5">
    <v-container class="my-11">
      <v-row justify-md="center">
        <v-col cols="6">
          <v-row justify-md="center">
            <v-chip
      class="ma-2"
      label
      dark
      color="orange lighten-5"
      v-for="i in tags"
              :key="i"
    >
    <span class="orange--text nunito fs_18"> {{i}}</span>
    </v-chip>
            </v-row
          >
          <h3 class="nunito fs_header_2 text-center md:px-10">
            Nana Prince Hotel - The New Jewel in the Crown of Charismatic Crete
          </h3>
        </v-col>
      </v-row>
      <v-row class="my-6" justify-md="center">
        <v-col cols="3">
          <v-card tile flat color="transparent" class=" text-center">
            <h2 class="nunito fs_24">Josie</h2>
            <span class="grey--text">24th October, 2020</span>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify-md="center" class="mx-10">
        <v-col cols="12">
          <v-card color="transparent" tile flat>
            <v-card-title class=" justify-center">
              <div class="circular--portrait">
                <img
                  class="rd"
                  src="https://pbs.twimg.com/profile_images/1232704400491151363/C5IpS4WF_400x400.jpg"
                />
              </div>
            </v-card-title>
            <v-img
              style="position: relative;"
              max-height="500"
              src="https://pbs.twimg.com/media/DlxmXnfW4AAic08.jpg"
            >
            </v-img>
            <!-- <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="blue"
          class="white--text"
          fab
          large

          top
        >
        <v-avatar  size="70">
           <v-img src="https://pbs.twimg.com/profile_images/1232704400491151363/C5IpS4WF_400x400.jpg"></v-img>
        </v-avatar>
        </v-btn>
      </v-card-text> -->
          </v-card>
        </v-col>
      </v-row>
      <v-row justify-md="center" class="my-10">
        <v-col offset-md="1" cols="8">
         <v-card class="pa-2" tile flat>
           <v-card-text class="nunito-sans" v-text="essay">
           </v-card-text>
            <v-card-text class="nunito-sans" v-text="essay1">
           </v-card-text>
           <v-card-text class="nunito-sans" v-text="essay1">
           </v-card-text>
         </v-card>
        </v-col>
        <v-col  cols="3">
          <v-row>
           <v-col cols="6" offset-lg="1" offset-sm="0"> <strong class=" text--secondary nunito-sans-default fs_20">Related posts</strong></v-col>
          </v-row>
          <v-row v-for="(item, i) in recentPosts" :key="i">
            <v-col cols="9" offset-md="1">
              <v-card color="transparent" tile flat>
                  <v-list class="my-0">
                      <h2 class="nunito fs_22 text-wrap px-3 item-select">{{item.title}}</h2>
            <v-list-item>
              <v-list-item-avatar size="60">
                <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.username"></v-list-item-title>
                <span class="grey--text">{{ item.date }}</span>
              </v-list-item-content>
            </v-list-item>
            <div >
               <v-chip color="orange lighten-5" class="ma-1" v-for="chip in item.chips" :key="chip">{{chip}}</v-chip>
            </div>
          </v-list>
              </v-card>
              <v-col cols="6"><v-divider></v-divider></v-col>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    recentPosts: [
      {
        username: 'Jonhas Anotoli',
        title: 'Google is important while using Dropbox',
        topicImg: 'https://gbsghana.com/wp-content/uploads/2019/09/It-Solutions-1.jpg',
        image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
        date: '2nd December, 2019',
        chips: ['Tapge', 'selon', 'C#', 'Cisco']
      },
      {
        username: 'Maxmillian Swaitherz',
        title: 'Rolling Hills and Natural Beauty - Vitsa - Greece',
        image: 'https://cxl.com/wp-content/uploads/2016/03/nate_munger.png',
        topicImg: 'https://www.theitsolutions.io/sites/default/files/styles/full_width_max_width/public/2019-06/5DIV2444.jpg?itok=0itgYICh',
        date: '2th April, 2020',
        chips: ['Tapge', 'selon', 'programming']
      },
      {
        username: 'Abdul Bari',
        title: 'Japan - Improve your body and Mind While you escape christmas!',
        topicImg: 'https://www.sapphirewebsolutions.com/wp-content/uploads/2019/09/Web-Development-Trends.jpg',
        image: 'https://i.udemycdn.com/user/200_H/27878376_ce40_3.jpg',
        date: '24th March, 2019',
        chips: ['C++', 'Computer Networks', 'Cisco']
      }
    ],
    tags: ['C++', 'Computer Industry', 'Cisco', 'AI'],
    essay: '“We are a highly experienced team of hospitality real estate executives and this is not our first crisis. We have purposefully and thoroughly implemented cost-cutting and liquidity measures needed to face the COVID-19 threat,” said Thomas J. Baltimore, Jr., chairman and CEO of Park. “While equity markets have shown unprecedented volatility recently, Park remains the owner of iconic core assets like Hilton Hawaiian Village, the Hilton/Waldorf Bonnet Creek Resort, the JW Marriott San Francisco Union Square and the Hyatt Regency Boston. These assets—and many others like them owned by Park— hold strong market leadership positions and are managed by world-class hotel management companies. Recognizing the resiliency and value of these assets, I have recently made a significant purchase of additional shares of Park common stock as a demonstration of my confidence in this company.',
    essay1: '“We are a highly experienced team of hospitality real estate executives and this is not our first crisis. We have purposefully and thoroughly implemented cost-cutting and liquidity measures needed to face the COVID-19 threat,” said Thomas J. Baltimore, Jr., chairman and CEO of Park. “While equity markets have shown unprecedented volatility recently, Park remains the owner of iconic core assets like Hilton Hawaiian Village, the Hilton/Waldorf Bonnet Creek Resort, the JW Marriott San Francisco Union Square and the Hyatt Regency Boston. These assets—and many others like them owned by Park— hold strong market leadership positions and are managed by world-class hotel management companies. Recognizing the resiliency and value of these assets, I have recently made a significant purchase of additional shares of Park common stock as a demonstration of my confidence in this company.'
  })
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
}
</style>
