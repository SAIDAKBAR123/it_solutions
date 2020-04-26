<template>
  <div>
    <video-bg
      :sources="[
        'https://static.videezy.com/system/resources/previews/000/012/744/original/Particles_8_-_49s_-_4k_res.mp4'
      ]"
      img="sa"
    >
      <v-card id="scroll-target" color="transparent" width="100%" height="100%">
        <v-row style="height:100%" justify="center" align="center">
          <v-col cols="12" align="center">
            <v-img
              max-width="10%"
              :src="require('../../assets/images/favicon.png')"
            ></v-img>
            <h3 :class="$vuetify.breakpoint.xs ? 'display-1 py-2 orange--text border-yellow': 'display-4 py-2 orange--text border-yellow'">
              IT SOLUTIONS
            </h3>
            <!-- <vue-typer
                v-if="!$vuetify.breakpoint.xs"
              class="px-2 fs_header_2 nunito white"
              text="Support for innovative ideas and technologies...!"
            ></vue-typer> -->
            <v-col class="my-auto">
              <v-btn
                class="mx-auto"
                @click="getAboutUs"
                color="orange lighten-2 text-center"
                outlined
                rounded
                x-large
                >Who we are ?</v-btn
              >
            </v-col>
          </v-col>
        </v-row>
      </v-card>
    </video-bg>
  </div>
</template>

<script>
export default {
  methods: {
    getAboutUs () {
      console.log(this.$vuetify.breakpoint.xs)
      this.$vuetify.goTo('.section-2', 'linear')
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style></style>
