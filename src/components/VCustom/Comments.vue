<template>
  <div>
      <v-row >
        <v-col offset-md="1" cols="auto">
            <h4 class="nunito text-uppercase">Комментарии</h4>
            <v-divider></v-divider>
        </v-col>
          <v-col cols="auto" >
           <div class="d-flex align-self-center">
               <v-icon>mdi-eye</v-icon><span class="px-2"> 2 493</span>
           </div>
        </v-col>
      </v-row>
        <v-row  justify-md="start">
           <v-col offset-md="1" cols="5"  md="auto">
            <v-btn color="primary" class="m-2" dark text small><v-icon> mdi-facebook</v-icon> facebook</v-btn>
        </v-col>
        <v-col cols="5" md="auto" >
          <v-btn color="pink" class="" dark text small><v-icon> mdi-instagram</v-icon> Instagram</v-btn>
        </v-col>
      </v-row>
      <!--Comments list-->
      <v-row justify="center" justify-md="start">
            <v-col offset-md="1" cols="12" md="8">
                <transition-group name="list" tag="p">
                <v-card shaped outlined tile flat v-for="item in comments" :key="item.content" color="orange lighten-5 px-5 mb-2 list-item">
                    <v-card-title class="nunito-sm black--text">{{item.name}}</v-card-title>
                    <v-card-subtitle class="nunito-ph black--text">{{item.content}}</v-card-subtitle>
                </v-card>
                </transition-group>
            </v-col>
      </v-row>
       <v-row>
          <v-col offset-md="1" cols="12" md="8" align-self="center" >
        <div class="d-flex">
                <v-avatar size="60"><v-img src="https://pbs.twimg.com/profile_images/1176256865304334336/6hOQS3Ef_400x400.jpg"></v-img></v-avatar>
                <v-text-field
                color="orange lighten-2"
                 v-on:keyup.enter="send(sendMsg)"
                v-model="sendMsg"
                class="my-2 mx-2"
                dense
            label="присоединиться к обсуждению"
            single-line

          ></v-text-field>
        </div>
        </v-col>
      </v-row>
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
                val = ''
              })
          })
    },
    send (val) {
      if (val.length > 0) {
        this.ipName('https://api.ipify.org?format=json', this.sendMsg, this.comments)
        this.sendMsg = ''
      } else {
        alert('Please , enter something into field')
      }
    }
  }
}

</script>

<style scoped>
.list-item {

}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
