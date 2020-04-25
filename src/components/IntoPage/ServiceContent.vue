<template>
  <div>
      <v-container>
          <v-card tile color="#F6F6F6" flat class="px-5 py-5">
              <v-row justify-md="center">
                  <v-col md="8">
                      <p class="text-center display-1">Услуги</p>
                  </v-col>
              </v-row>
          <v-row justify-md="center" align-md="center">
              <v-col  cols="12" md="3" lg="3" v-for="(item,i) in services" :key="i">
                    <v-timeline  dense right  small>
                        <v-timeline-item class="py-7" small="" fill-dot v-for="(cr,i) in item.type" :key="i" color="yellow darken-2" >
                            <span class="nunito">{{cr.text}}</span></v-timeline-item>
                    </v-timeline>
              </v-col>
          </v-row>
          </v-card>
      </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          text: 'Сайты',
          type: [
            {
              text: 'Создаём быстрые интернет-магазины'
            },
            {
              text: 'Создаём крутые корпоративные сайты'
            },
            {
              text: 'Создаём промо-сайты'
            }
          ]
        },
        {
          text: 'Креатив',
          type: [
            {
              text: 'Логотипы, знаки и леттеринги'
            },
            {
              text: 'Создаём иллюстрации и принты'
            },
            {
              text: 'Брендируем носители'
            }
          ]
        },
        {
          text: 'Продвижение',
          type: [
            {
              text: 'Обеспечиваем контент-маркетинг'
            },
            {
              text: 'Создаём иллюстрации и принты'
            },
            {
              text: 'Брендируем носители'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
