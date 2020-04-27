<template>
<v-row justify="center">
  <v-col cols="12" md="10">
  <v-card class="my-10" tile flat>
    <v-row style="height:100%" justify="center" align="center">
      <v-col cols="12" align="center">
        <h3 class="display-2 pt-10 orange--text border-yellow text-capitalize">технологии</h3>
      </v-col>
      <v-col cols="12">
        <v-row justify="center" no-gutters>
          <v-col cols="auto" v-for="(item, i) in technologies" :key="i">
                  <div data-aos="zoom-out-down"   data-aos-duration="1000">
                    <v-card color="transparent" flat class="my-3 mx-6" max-width="260">
                      <v-row justify="center">
                        <v-col cols="auto">
                          <span class="nunito text-center">{{ item.title }}</span>
                        </v-col>
                      </v-row>
                      <v-img max-width="150" height="160" :src="item.img"> </v-img>
                    </v-card>
                  </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" class="mx-auto">
      </v-col>
    </v-row>
  </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
  data () {
    return {
      technologies: [
        {
          title: 'Nodejs',
          img: 'https://images.tutorialedge.net/images/node.png'
        },
        {
          title: 'Vuejs',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
        },
        {
          title: 'Android Studio',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png'
        },
        {
          title: 'C# (WPF)',
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/C_Sharp_logo.svg/1200px-C_Sharp_logo.svg.png'
        },
        {
          title: 'Telegram Bot',
          img:
            'https://icons-for-free.com/iconfiles/png/512/media+social+telegram+icon-1320193121598222952.png'
        },
        {
          title: 'React & ReactNative',
          img:
            'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'
        }
      ]
    }
  }
}
</script>

<style></style>
