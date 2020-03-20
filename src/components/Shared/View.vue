<template>
  <section class="mx-5">
    <v-container class="my-11">
      <v-row justify-md="center">
        <v-col cols="6">
          <v-row justify-md="center"
            ><v-sheet
              class="px-3 py-1 mx-2 orange--text nunito-sm text-uppercase"
              max-width="200"
              color="orange lighten-4"
              v-for="i in tags"
              :key="i"
              >{{ i }}</v-sheet
            ></v-row
          >
          <h3 class="nunito fs_header_2 text-center md:px-10">
            Nana Prince Hotel - The New Jewel in the Crown of Charismatic Crete
          </h3>
        </v-col>
      </v-row>
      <v-row class="my-6" justify-md="center">
        <v-col cols="3">
          <v-card tile flat color="transparent" class=" text-center">
            <h2 class="nunito fs_24">Josie</h2>
            <span class="grey--text">24th October, 2020</span>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify-md="center" class="mx-10">
        <v-col cols="12">
          <v-card color="transparent" tile flat>
            <v-card-title class=" justify-center">
              <div class="circular--portrait">
                <img
                  class="rd"
                  src="https://pbs.twimg.com/profile_images/1232704400491151363/C5IpS4WF_400x400.jpg"
                />
              </div>
            </v-card-title>
            <v-img
              style="position: relative;"
              max-height="500"
              src="https://pbs.twimg.com/media/DlxmXnfW4AAic08.jpg"
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
      <v-row justify-md="center">
        <v-col offset="1" cols="8">
         <v-card class="pa-2" tile flat>
           <v-card-text class="nunito-sans" v-text="essay">
           </v-card-text>
            <v-card-text class="nunito-sans" v-text="essay1">
           </v-card-text>
           <v-card-text class="nunito-sans" v-text="essay1">
           </v-card-text>
         </v-card>
        </v-col>
        <v-col cols="3">

        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    tags: ['C++', 'Computer Industry', 'Cisco', 'AI'],
    essay: '“We are a highly experienced team of hospitality real estate executives and this is not our first crisis. We have purposefully and thoroughly implemented cost-cutting and liquidity measures needed to face the COVID-19 threat,” said Thomas J. Baltimore, Jr., chairman and CEO of Park. “While equity markets have shown unprecedented volatility recently, Park remains the owner of iconic core assets like Hilton Hawaiian Village, the Hilton/Waldorf Bonnet Creek Resort, the JW Marriott San Francisco Union Square and the Hyatt Regency Boston. These assets—and many others like them owned by Park— hold strong market leadership positions and are managed by world-class hotel management companies. Recognizing the resiliency and value of these assets, I have recently made a significant purchase of additional shares of Park common stock as a demonstration of my confidence in this company.',
    essay1: '“We are a highly experienced team of hospitality real estate executives and this is not our first crisis. We have purposefully and thoroughly implemented cost-cutting and liquidity measures needed to face the COVID-19 threat,” said Thomas J. Baltimore, Jr., chairman and CEO of Park. “While equity markets have shown unprecedented volatility recently, Park remains the owner of iconic core assets like Hilton Hawaiian Village, the Hilton/Waldorf Bonnet Creek Resort, the JW Marriott San Francisco Union Square and the Hyatt Regency Boston. These assets—and many others like them owned by Park— hold strong market leadership positions and are managed by world-class hotel management companies. Recognizing the resiliency and value of these assets, I have recently made a significant purchase of additional shares of Park common stock as a demonstration of my confidence in this company.'
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
}
</style>
