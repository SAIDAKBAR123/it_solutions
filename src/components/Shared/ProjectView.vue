<template>
  <v-container v-if="dessert.id">
    <v-row justify-md="center">
      <v-col class="mt-3" md="6" cols="12">
        <h3
          class="nunito fs_header_2 text-center"
        >{{dessert.title}}</h3>
      </v-col>
    </v-row>
    <v-row class justify-md="center">
      <v-col md="4" cols="12">
        <v-card tile flat color="transparent" class="text-center"></v-card>
      </v-col>
      <v-col md="4" cols="12">
        <v-card tile flat color="transparent" class="text-center">
          <h2 class="nunito fs_18">ITsolutions</h2>
          <span class="grey--text">{{dessert.createdAt | moment('Do MMM YYYY')}}</span>
        </v-card>
      </v-col>
      <v-col cols="4">
        <!-- <v-card tile flat color="transparent" class=" d-inline-flex text-center">
            <div class="d-flex flex-baseline">  <v-badge
            v-for="i in icons"
                :key="i"
        bordered
        color="orange"
         content="44"
        overlap
      >
        <v-avatar size="35" class="mx-3" text   color="#dae2e4">
      <v-icon dark size="25" color="black">{{i.icon}}</v-icon>
    </v-avatar>
      </v-badge>
      </div>
        </v-card>-->
      </v-col>
    </v-row>
    <v-row justify="center" justify-md="center">
      <v-col cols="12" md="12">
        <v-card color="transparent" tile flat>
          <v-card v-if="false" tile flat color="transparent" class="flex-end d-inline-flex text-center">
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
          <v-card-title class="justify-center mt-10">
            <div class="circular--portrait hidden-sm-and-down">
              <img class="rd" src="https://cxl.com/wp-content/uploads/2016/03/nate_munger.png" />
            </div>
          </v-card-title>
          <v-img
            aspect-ratio="2.6"
            style="position: relative;"
            :src="dessert.images[0].url"
          ></v-img>
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
          </v-card-text>-->
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" justify-md="start">
      <v-col class="py-1" offset-md="2" md="8" cols="12">
        <v-alert
          v-model="alert"
          dismissible
          color="yellow darken-2"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-link-variant"
        >
          Вы можете посетить веб-сайт по адресу:
          <a class="hpLink" :href="dessert.url" target="_blank">{{dessert.url}}</a>
        </v-alert>
      </v-col>
      <v-col offset-md="2" cols="12" md="8">
        <v-card tile flat >
          <v-card-text class="px-0" :class="$vuetify.breakpoint.xs ? 'nunito-ph': 'nunito-sans'" v-html="dessert.content"></v-card-text>
        </v-card>
      </v-col>
      <v-col offset-md="2" cols="12" md="8">
        <viewer :images="dessert.images">
          <img
            width="200"
            class="img_view"
            height="200"
            v-for="src in dessert.images"
            :src="src.url"
            :key="src.url"
          />
        </viewer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Portfolio from '../../services/Portfolio'
export default {
  data: () => ({
    dessert: {
      category: {},
      categoryId: 1,
      content: '',
      createdAt: '',
      id: '',
      images: [],
      title: '',
      updatedAt: '',
      url: ''
    },
    alert: '',
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
    tags: ['C++', 'Computer Industry', 'Cisco', 'AI'],
    essay: ''
  }),
  methods: {
    getSinglePortfolio () {
      Portfolio.getSingle(this.$route.params.id).then(res => {
        this.dessert = res
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getSinglePortfolio()
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

.img_view {
  transition: all 0.7s ease;
  margin: 3px;
  object-fit: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.img_view:hover {
  cursor: pointer;
  opacity: 0.7;
  margin: 3px;
  border-radius: 8px;
  object-fit: cover;
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
.hpLink {
  text-decoration: none;
  font-family: sans-serif;
  font-size: 19px;
  color: rgb(219, 161, 0) !important;
}
</style>
