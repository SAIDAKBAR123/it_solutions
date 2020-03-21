<template>
  <v-footer color="rgba(235, 237, 247, 0.22)" padless>
    <!-- <v-card
      text
      tile
      color="#ebedf785"
      class=" dark text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 px-5">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>IT SOLUTIONS</strong>
      </v-card-text>
    </v-card> -->
    <v-container class="pa-10">
      <v-row no-gutters justify="center" justify-md="space-between">
        <v-col xs="12" sm="12" cols="12" md="5">
          <v-card color="transparent" flat class="" outlined tile>
            <v-row justify-md="center">
              <v-col>
                <v-img
                  max-width="300"
                  :src="require('@/assets/images/logo1.png')"
                ></v-img>
              </v-col>
            </v-row>
            <v-row v-if="false" class="my-2" justify-md="center">
              <!-- <v-btn
                text
                fab
                color="red"
                class="ma-2"
                v-for="i in icons"
                :key="i"
                ><v-icon dark> {{ i }}</v-icon></v-btn
              > -->
              <v-avatar
                class="mx-3"
                text
                v-for="i in icons"
                :key="i"
                color="#dae2e4"
              >
                <v-icon dark color="black">{{ i }}</v-icon>
              </v-avatar>
            </v-row>
          </v-card>
        </v-col>
        <v-col xs="12" sm="12" md="5" cols="12">
          <v-card class="pa-2" flat tile color="transparent">
            <v-row justify="center" justify-md="start">
              <v-col cols="12" md="12">
                <div class="d-flex align-baseline">
                  <v-icon>mdi-bell-ring-outline</v-icon>
                  <span class="px-2 nunito fs_18"
                    >Stay turned with fresh news.</span
                  >
                </div>
                <v-text-field
                  color="orange lighten-3"
                  class="mt-3 text-box"
                  clearable
                  dense
                  label="mail address"
                  single-line
                  outlined
                ></v-text-field>
                <v-btn large outlined text color="orange lighten-3"
                  >Send Mail</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" justify-md="center" no-gutters>
        <span class="fs_20 text--secondary text-center">
          {{ new Date().getFullYear() }} —
          <span style="color: #FFCC80">IT Solutions</span>. All rights are
          reserved</span
        >
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      icons: ['mdi-instagram', 'mdi-telegram', 'mdi-linkedin']
    }
  }
}
</script>

<style>
.sda {
  color: #dae2e4;
}
.v-text-field--outlined::before {
  border: 1px solid red !important;
  color: blue;
}
</style>
