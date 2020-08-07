<template>
  <div class="">
      <v-row justify="center">
        <v-col md="10">
              <v-card class="" width="100%" flat>
                <v-row style="height:100%" justify="center" align="center">
                  <v-col cols="12" align="center">
                    <v-container class="py-0">
                      <v-row justify-md="center" align="center">
                        <v-col cols="12" md="7" order-md="2" order="2">
                          <v-row justify="center">
                            <span class=" px-4 text--black ms text-left"><span class="ms">К</span>{{ company_des}}</span>
                          </v-row>
                        </v-col>
                        <v-col cols="12" md="5" order-md="2" order="1">
                         <v-card height="400">
                            <v-img height="400" src="https://www.at-visions.com/wp-content/uploads/2017/06/it-service.png"></v-img>
                         </v-card>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      company_des: 'омпания INNOVATIVE TECHNOLOGIES SOLUTIONS (IT Solutions) создана в структуре Университета Инха в г. Ташкенте. Команда профессиональных и креативных специалистов готова реализовать ваши пожелания по разработке уникальных веб-сайтов, мобильных приложений, информационных систем и ресурсов, а также ИТ-консалтинга. Мы мыслим глобально и работаем с каждым клиентом, учитывая особенности Вашей компании и сферы деятельности',
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
  font-size: 21px;
  line-height: 60px;
  font-weight: 400;
}
@media screen and (max-width: 600px) {
 .ms  {
    font-size: 18px;
      line-height: 30px;
      font-weight: 400;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
