<template>
  <div class="my-12 py-10">
    <v-container fluid>
        <v-row>
            <v-col>
                <h4 class="text-center nunito-sans fs_28">Hi again, Would you like to know about us?</h4>
            </v-col>
        </v-row>
        <v-row  justify="center">
            <v-col cols="12" md="8" class="px-0">
                <v-card class="px-0 py-0" tile elevation="12">
                    <v-row justify="center">
                        <v-col cols="12" md="8" class="pr-0  py-0">
                           <v-card tile flat color="#F9FBFA">
                              <v-card-title>
                                  <span>Send us a message</span>
                                  <v-spacer></v-spacer>
                                  <v-icon size="40" color="yellow darken-3">mdi-mailbox-open-up-outline</v-icon>
                              </v-card-title>
                              <v-card-text>
                                  <v-form v-model="valid">
                                    <v-container>
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        md="10"
                                        >
                                        <v-text-field
                                            color="yellow darken-2"
                                            v-model="firstname"
                                            label="First name"
                                            required
                                        ></v-text-field>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="10"
                                        >
                                        <v-text-field
                                            color="yellow darken-2"
                                            v-model="lastname"
                                            label="Last name"
                                            required
                                        ></v-text-field>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="10"
                                        >
                                        <v-text-field
                                            color="yellow darken-2"
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="end">
                                        <v-col cols="auto">
                                            <v-btn x-large rounded color="yellow darken-2" dark right>Send <v-icon right>mdi-send</v-icon></v-btn>
                                        </v-col>
                                    </v-row>
                                    </v-container>
                                </v-form>
                              </v-card-text>
                           </v-card>
                        </v-col>
                        <v-col cols="12" md="4" class="pl-0 py-0">
                           <v-card height="100%" class="py-0" tile flat color="yellow darken-3" dark>
                              <v-card-title>
                                  <span>Contact Information</span>
                              </v-card-title>
                              <v-card-text>
                                   <v-list two-line subheader color="transparent" tile flat>
                                        <v-list-item v-for="(contact,i) in contacts" :key="i">
                                            <v-list-item-avatar>
                                            <v-icon v-text="contact.icon"></v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title v-text="contact.title"></v-list-item-title>
                                                <v-list-item-subtitle v-text="contact.text"></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                   </v-list>
                              </v-card-text>
                              <v-card-actions class="px-0 py-0">
                                  <v-row justify="center" justify-md="end">
                                      <v-col cols="auto">
                                          <v-icon right color="amber darken-1" size="140">mdi-map</v-icon>
                                      </v-col>
                                  </v-row>
                              </v-card-actions>
                           </v-card>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [
        {
          icon: 'mdi-map-marker-radius',
          title: 'Location',
          text: 'Mirzo ulugbek Tumani, 202-maktab zonasi'
        },
        {
          icon: 'mdi-cellphone-sound',
          title: 'Contact Number',
          text: 'Mirzo ulugbek Tumani, 202-maktab zonasi'
        },
        {
          icon: 'mdi-email-mark-as-unread',
          title: 'Email',
          text: 'asdfasfasdfds@gmail.com'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
