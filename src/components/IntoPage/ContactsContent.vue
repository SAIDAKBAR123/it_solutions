<template>
  <div class="my-12 py-10">
    <v-container fluid>
        <v-row>
            <v-col>
                <h2 class="text-center nunito fs_28 display-1 orange--text">Есть вопрос? Свяжитесь с нами</h2>
            </v-col>
        </v-row>
        <v-row  justify="center">
            <v-col cols="12" md="8" class="px-0">
                <v-card class="px-0 py-0" tile elevation="12">
                    <v-row justify="center">
                        <v-col cols="12" md="8" class="pr-0  py-0">
                           <v-card tile flat>
                              <v-card-title>
                                  <span>Отправьте нам сообщение</span>
                                  <v-spacer></v-spacer>
                                  <v-icon size="40" color="yellow darken-3">mdi-mailbox-open-up-outline</v-icon>
                              </v-card-title>
                              <v-card-text>
                                  <v-form v-model="valid">
                                    <v-container>
                                    <v-row>
                                        <v-col
                                        cols="12"
                                        md="6"
                                        >
                                        <v-text-field
                                            color="yellow darken-2"
                                            v-model="firstname"
                                            label="Имя"
                                            required
                                        ></v-text-field>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="6"
                                        >
                                        <v-text-field
                                            color="yellow darken-2"
                                            v-model="lastname"
                                            label="Фамилия"
                                            required
                                        ></v-text-field>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="12"
                                        >
                                        <v-text-field
                                            color="yellow darken-2"
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                        ></v-text-field>
                                        </v-col>
                                        <v-col
                                        cols="12"
                                        md="12"
                                        >
                                          <v-textarea
                                            name="input-7-1"
                                            label="текст"
                                            value=""
                                            ></v-textarea>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="end">
                                        <v-col cols="auto">
                                            <v-btn x-large rounded color="yellow darken-2" dark right>Отправить <v-icon right>mdi-send</v-icon></v-btn>
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
                                  <span class=" text-capitalize">местоположение</span>
                              </v-card-title>
                              <v-card-text>
                                   <v-list two-line subheader color="transparent" tile flat>
                                        <v-list-item v-for="(contact,i) in contacts" :key="i">
                                            <v-list-item-avatar>
                                            <v-icon v-text="contact.icon"></v-icon>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-capitalize" v-text="contact.title"></v-list-item-title>
                                                <v-list-item-subtitle  v-text="contact.text"></v-list-item-subtitle>
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
          title: 'местоположение',
          text: 'Ziyolilar str 9, Mirzo Ulugbek district, Тошкент, Uzbekistan'
        },
        {
          icon: 'mdi-cellphone-sound',
          title: 'Контактный номер',
          text: '+998909647853'
        },
        {
          icon: 'mdi-email-mark-as-unread',
          title: 'E-mail',
          text: 'z.davlatov@itsolutions.uz'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
