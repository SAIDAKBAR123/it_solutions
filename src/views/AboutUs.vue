<template>
  <div class=" overflow-hidden">
    <intro-toolbar />
    <div class="section-1">
      <first-section />
    </div>
    <div class="section-3">
       <porfolio-section />
    </div>
    <div class="section-2">
        <second-section />
    </div>
     <div class="section-5">
        <service-section />
    </div>
    <div class="section-4">
        <third-section />
    </div>
  </div>
</template>

<script>
import IntroToolbar from '../components/VToolbar/IntroToolbar'
import FirstSection from '../components/IntoPage/FirstPage'
import SecondSection from '../components/IntoPage/AboutContent'
import PorfolioSection from '../components/IntoPage/PortfolioContent'
import ThirdSection from '../components/IntoPage/Technologies'
import ServiceSection from '../components/IntoPage/ServiceContent'
//  import * as easings from 'vuetify/es5/services/goto/easing-patterns'
export default {
  components: {
    IntroToolbar,
    FirstSection,
    SecondSection,
    ThirdSection,
    PorfolioSection,
    ServiceSection
  },
  data () {
    return {
      pages: ['.section-1', '.section-2', '.section-3'],
      projects: []
    }
  },
  watch: {},
  methods: {
  },
  created () {
    this.$store.commit('aboutPage', true)
  }
}
</script>
<style scoped>
</style>
