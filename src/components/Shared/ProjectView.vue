<template>
    <v-container class="mt-12">
      <v-row justify-md="center">
        <v-col class="mt-3" md="6" cols="12">
          <h3 class="nunito fs_header_2 text-center">
            Интернет-магазин по продаже готовых проектов домов
          </h3>
        </v-col>
      </v-row>
      <v-row class="" justify-md="center">
        <v-col md="4" cols="12">
          <v-card tile flat color="transparent" class=" text-center"> </v-card>
        </v-col>
        <v-col md="4" cols="12">
          <v-card tile flat color="transparent" class=" text-center">
            <h2 class="nunito fs_18">Josie</h2>
            <span class="grey--text">24th October, 2020</span>
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
          </v-card> -->
        </v-col>
      </v-row>
      <v-row justify="center"  justify-md="center">
        <v-col cols="12" md="12">
          <v-card color="transparent" tile flat>
            <v-card
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
            <v-card-title class=" justify-center">
              <div class="circular--portrait hidden-sm-and-down">
                <img
                  class="rd"
                  src="https://cxl.com/wp-content/uploads/2016/03/nate_munger.png"
                />
              </div>
            </v-card-title>
            <v-img
              aspect-ratio="2.6"
              style="position: relative;"
              src="https://cdn.dribbble.com/users/127188/screenshots/6380602/01.jpg"
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
      <v-row class="">
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
                 You can visit the website at: <a class="hpLink" href="http://itsolutions.uz/" target="_blank">itsolutions.uz</a>
    </v-alert>
        </v-col>
        <v-col offset-md="2" cols="12" md="8">
          <v-card tile flat>
            <v-card-text class="nunito-sans" v-text="essay"> </v-card-text>
            <v-card-text class="nunito-sans" v-text="essay"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
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
    essay: `Проектному бюро «Арпланс» из Ярославля нужен интернет-магазин для продажи готовых проектов коттеджей. «Арпланс» сотрудничает со строительными компаниями по всей России, по проектам «Арпланс» построено несколько тысяч частных домов и коттеджей. Проекты «Арпланс» проверены практикой, по отдельным проектам построили десятки домов.

У «Арпланс» под тысячу проектов. В интернет-магазине нужен фильтр проектов. Чтобы по параметрам сузить вариантов до разумного. На сайте нужны отдельные разделы — Клуб строителей и Клуб коттеджных посёлков.
Главная фишка интернет-магазина «Арпланс» — выгрузка интернет-магазина по API на любой сторонний сайт. Чтобы партнёрам «Арпланс» не нужно было делать свой интернет-магазин и наполнять его контентом. Выгрузка по API позволяет встроить каталог «Арпланс» на любой сайт и продавать проекты как будто это происходит на сайте партнёра. Хотя на самом деле фильтрация, выбор товара и его покупка проходит на сайте «Арпланс», а покупатель видит в окне браузера «мультик». У каждого партнёра «Арпланс» есть личный кабинет на головном сайте, где отображается статистика продаж с сайта партнёра и начисляется агентское вознаграждение.`
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
  color: #4d4d4d;
}
.hpLink{
  text-decoration: none;
  font-family: sans-serif;
  font-size: 19px;
  color: rgb(219, 161, 0) !important;
}
</style>
