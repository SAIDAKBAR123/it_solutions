<template>
  <div>
    <v-container>
      <v-row >
        <v-col cols="auto">
            <h4 class="nunito text-uppercase">Comments</h4>
            <v-divider></v-divider>
        </v-col>
          <v-col cols="auto" class="justify-flex-end" >
           <div class="d-flex align-self-center">
               <v-icon>mdi-eye</v-icon><span class="px-2"> 2 493</span>
           </div>
        </v-col>
           <v-col cols="12">
            <v-btn color="primary" class="" dark small><v-icon> mdi-facebook</v-icon> facebook</v-btn>
             <v-btn color="pink" class="mx-2" dark small><v-icon> mdi-instagram</v-icon> Instagram</v-btn>
        </v-col>
      </v-row>
      <!--Comments list-->
      <v-row>
            <v-col cols="12">
                <!-- <v-sheet  v-for="(item,i) in comments" :key="i" color="yellow lighten-4 px-5 my-1">
                    <span class="nunito fs_18">{{item.content}}</span>
                </v-sheet> -->
                <v-card shaped tile flat v-for="(item,i) in comments" :key="i" color="orange lighten-5 px-5 my-2">
                    <v-card-title class="nunito-sm text--secondary">{{item.name}}</v-card-title>
                    <v-card-subtitle class="nunito-ph">{{item.content}}</v-card-subtitle>
                </v-card>
            </v-col>
      </v-row>
       <v-row>
          <v-col  cols="12" align-self="center" >
        <div class="d-flex">
                <v-avatar size="60"><v-img src="https://pbs.twimg.com/profile_images/1176256865304334336/6hOQS3Ef_400x400.jpg"></v-img></v-avatar>
                <v-text-field
                 v-on:keyup.enter="send(sendMsg)"
                v-model="sendMsg"
                class="my-2 mx-2"
                dense
            label="Join the discussion"
            single-line
            outlined
          ></v-text-field>
        </div>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>
<script>
export default {
  data () {
    return {
      sendMsg: '',
      comments: [
        {
          name: 'Sarafroz Roziyev',
          content: 'The most valuable and important skills for an entrepreneur are simple: must have adequate sightseeing and very good hearing. Nothing more (from experience).'
        },
        {
          name: 'Ki Lio Hwoong',
          content: 'I respect that she included a healthy mix of physical labor ideas and online grind ideas.'
        }
      ]
    }
  },
  methods: {
    ipName (url, val, arr) {
      fetch(url)
        .then(
          function (response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
          response.status)
              return
            }
            response.json().then(function (data) {
              return data.ip
            })
              .catch(function (err) {
                console.log('Fetch Error :-S', err)
              }).then(ip => {
                arr.push({
                  name: ip,
                  content: val
                })
              })
          })
    },
    send (val) {
      if (val.length > 0) {
        this.ipName('https://api.ipify.org?format=json', val, this.comments)
      } else {
        alert('Please , enter something into field')
      }
    }
  }
}

</script>

<style></style>
