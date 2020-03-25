<template>
  <div class=" overflow-hidden">
      <intro-toolbar />
  <div class="section-1">
        <video-bg :sources="['https://static.videezy.com/system/resources/previews/000/042/970/original/bg0002-5.mp4']" img="sa">
    <v-card  id="scroll-target" color="transparent" width="100%" height="100%">
          <v-row  style="height:100%" justify="center" align="center">
        <v-col cols="12" align="center">
            <v-img max-width="200" :src="require('../assets/images/favicon.png')"></v-img>
            <h3 class="display-4 py-2 orange--text border-yellow">IT SOLUTIONS</h3>
            <vue-typer class="fs_header_2 nunito white" text='Support for innovative ideas and technologies'></vue-typer>
             <v-col class="my-auto">
            <v-btn class="mx-auto" @click="getAboutUs" color="orange lighten-2 text-center" outlined x-large>Who we are</v-btn>
        </v-col>
        </v-col>
    </v-row>
    </v-card>
</video-bg>
  </div>
    <div class="section-2">
            <video-bg :sources="[]" >
    <v-card color="transparent"  width="100%" height="100%">
          <v-row style="height:100%" justify="center" align="start">
        <v-col cols="12" align="center">
           <v-container>
               <v-row jus>
                   <v-col cols="6" class="mx-auto">
                        <h3 class="display-2 pt-3 orange--text border-yellow">About Us</h3>
             <span class="fs_header_2 nunito text--black mx-auto">Future starts from today !</span>
                   </v-col>
               </v-row>
               <v-row>
                   <v-col class="mx-auto" cols="10">  <span class="text--black opensans">{{company_des}}</span></v-col>
               </v-row>
                  <v-row class="my-4" no-gutters justify="center" align="center">
                <v-col  class="mx-3" v-for="i in 4" :key="i">
                    <v-card  height="300"  elevation="12">
                        <v-card-title>
                              elevation="12"
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
           </v-container>
        </v-col>
    </v-row>
    </v-card>
</video-bg>
    </div>
    <div class="section-3">
        <video-bg :sources="[]">
    <v-card dark color="grey darken-4"  width="100%" height="100%">
          <v-row style="height:70%" justify="center" align="start">
        <v-col cols="12" align="center">
            <h3 class="display-2 pt-10 orange--text border-yellow">Services</h3>
            <span class="white--text fs_header_2 nunito">Get modern technology with us</span>
        </v-col>
        <v-col cols="8">
            <v-row no-gutters>
                <v-col cols="4" v-for="i in 6" :key="i">
                    <v-card color="red" class="my-3"  max-width="344">
                        <v-img max-width="500" height="300" src="https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg">

                        </v-img>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <v-row justify="center">
        <v-col cols="12" class="mx-auto">
           <!-- <v-sheet
    class="mx-auto"
    max-width="100%"
    color="transparent"
  >
    <v-slide-group multiple show-arrows>
      <v-slide-item
        v-for="n in 5"
        :key="n"
      >
        <v-card class="ma-4" height="150" width="150" color="white"></v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet> -->
        </v-col>
    </v-row>
    </v-card>
</video-bg>
    </div>
  </div>
</template>

<script>
import IntroToolbar from '../components/VToolbar/IntroToolbar'
//  import * as easings from 'vuetify/es5/services/goto/easing-patterns'
export default {
  components: {
    IntroToolbar
  },
  data () {
    return {
      pages: ['.section-1', '.section-2', '.section-3'],
      company_des: 'The INNOVATIVE TECHNOLOGIES SOLUTIONS (IT Solutions) company was established in the structure of Inha University in Tashkent. A team of professional and creative specialists is ready to fulfill your wishes for the development of unique websites, mobile applications, information systems and resources, as well as IT consulting. We think globally and work with each client, taking into account the characteristics of your company and field of activity.',
      projects: [],
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
          icon: 'mdi-mobile',
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
          description: 'Development of ACT and Technical Tasks with most valueale efficienty'
        },
        {
          name: 'UI & UX Studio',
          icon: 'mdi-mobile',
          description: 'Wonderful UserInterface with elegant experience'
        }
      ]
    }
  },
  watch: {
  },
  methods: {
    getAboutUs () {
      this.$vuetify.goTo('.section-2', 'linear')
      window.scrollTo(0, 0)
    }

  },
  created () {
    this.$store.commit('aboutPage', true)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=cyrillic,cyrillic-ext,greek-ext');
.opensans {
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    line-height: 60px;;
}
/* SCSS */
.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
color: rgb(34, 12, 158);
  .custom.char {
    /* Styles for each character
       e.g. color, background-color */

    &.typed {
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
    }
    &.selected {
      /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
    }
    &.erased {
      /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
    }
  }

  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */

    &.pre-type {
      /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
    }
    &.pre-erase {
      /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
    }
    &.idle {
      /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
    }
    &.typing {
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
    }
    &.selecting {
      /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
    }
    &.erasing {
      /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
    }
    &.complete {
      /* Styles for the idle caret when VueTyper has finished all typing/erasing */
    }
  }
}
</style>
