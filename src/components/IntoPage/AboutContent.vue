<template>
  <div class="">
    <v-card color="transparent" width="100%" >
      <v-row style="height:100%" justify="center" align="center">
        <v-col cols="12" align="center">
          <v-container>
            <v-row justify="center" align="center">
                 <v-col class="mx-auto" cols="12" md="6" order="2" order-md="1">
                       <h3 class="display-2 orange--text border-yellow">About Us</h3>
                      <p class="fs_header_2 nunito text--black text-center">Future starts from today !</p>
                <span class="text--black ms">{{
                  company_des
                }}</span>
                </v-col>
              <v-col cols="12" md="6" order="1" order-md="2" class="mx-auto">
                  <v-row justify="center">
                      <v-col cols="12">
                            <div data-aos="zoom-out-down"   data-aos-delay="10"  data-aos-duration="1000">
                        <v-img  src="https://mapemond.com/wp-content/uploads/2019/12/team.png"></v-img>
                            </div>
                      </v-col>
                  </v-row>
              </v-col>
            </v-row>
            <v-row>
            </v-row>
            <!-- <v-row class="my-4" no-gutters justify="center" align="center">
              <v-col class="mx-3" v-for="i in 20" :key="i">
                <v-card  elevation="12">
                    <v-avatar color="orange" size="62">
                        <v-icon>{{ }}</v-icon>
                </v-avatar>
                </v-card>
              </v-col>
            </v-row> -->
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
      company_des:
        'The INNOVATIVE TECHNOLOGIES SOLUTIONS (IT Solutions) company was established in the structure of Inha University in Tashkent. A team of professional and creative specialists is ready to fulfill your wishes for the development of unique websites, mobile applications, information systems and resources, as well as IT consulting. We think globally and work with each client, taking into account the characteristics of your company and field of activity.',
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
  font-size: 25px;
  line-height: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
