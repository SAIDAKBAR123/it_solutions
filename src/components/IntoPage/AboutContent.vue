<template>
  <div class="">
    <v-card class="my-10" width="100%" flat>
      <v-row style="height:100%" justify="center" align="center">
        <v-col cols="12" align="center">
          <v-container>
            <v-row justify-md="center" align="center">
              <v-col cols="12" md="7">
                <v-row>
                   <span class="text--black ms text-left">{{ company_des}}</span>
                </v-row>
              </v-col>
              <v-col cols="5">
                <v-img src="https://www.pngmart.com/files/9/Marvel-Thanos-PNG-Free-Download.png"></v-img>
              </v-col>

                 <!-- <v-col class="" cols="12" md="8" order="2" order-md="1">
                      <h3 class="display-2 orange--text border-yellow">About Us</h3>
                      <p class="fs_header_2 nunito text--black">Future starts from today !</p>
                      <span class="text--black ms text-left">{{ company_des}}</span>
                </v-col> -->
            </v-row>
            <v-row>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      company_des: 'Компания INNOVATIVE TECHNOLOGIES SOLUTIONS (IT Solutions) была основана в структуре Университета Инха в Ташкенте. Команда профессиональных и креативных специалистов готова выполнить ваши пожелания по разработке уникальных сайтов, мобильных приложений, информационных систем и ресурсов, а также по ИТ-консалтингу. Мы мыслим глобально и работаем с каждым клиентом, учитывая особенности вашей компании и сферы деятельности.',
      services: [
        {
          name: 'Mobile development',
          icon: 'mdi-mobile',
          description: 'Creating innovative Mobile Applications'
        },
        {
          name: 'Web Development',
          icon: 'mdi-mobile',
          description: 'Creating Increadible website within services'
        },
        {
          name: 'Desktop Application',
          icon: 'mdi-desktop-mac-dashboard',
          description: 'Creating Desktop application for company'
        },
        {
          name: 'SEO & SMM',
          icon: 'mdi-mobile',
          description: 'Creating System Management within SEO technology'
        },
        {
          name: 'IT Consulting',
          icon: 'mdi-mobile',
          description:
            'Development of ACT and Technical Tasks with most valueale efficienty'
        },
        {
          name: 'UI & UX Studio',
          icon: 'mdi-mobile',
          description: 'Wonderful UserInterface with elegant experience'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,500i,600,600i&display=swap');

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=cyrillic,cyrillic-ext,greek-ext");
.ms {
 font-family: 'Montserrat', sans-serif;
  font-size: 27px;
  line-height: 60px;
  font-weight: 500;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
