<template>
  <div>
      <v-container class=" my-11">
          <v-row justify-md="start" class="py-3">
              <v-col class="px-0" cols="auto">
                  <v-btn x-large text  tile active-class>ВСЕ РАБОТЫ</v-btn>
              </v-col>
              <v-col  class="px-0"  cols="auto">
                  <v-btn x-large  text tile>ВЕБ-САЙТЫ</v-btn>
              </v-col>
              <v-col cols="auto">
                  <v-btn x-large  text tile active-class>ВЕБ-ПРИЛОЖЕНИЯ</v-btn>
              </v-col >
               <v-col class="px-0" cols="auto">
                  <v-btn x-large  text tile>МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ</v-btn>
              </v-col>
          </v-row>
          <v-row justify="center" justify-lg="center">
              <v-col cols="12" md="6" lg="6" align-self="center" v-for="(item,i) in portfolio" :key="i">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                        class="item-select"
                        tile
                        :elevation="hover ? 10 : 0"
                        max-width="100%"
                    >
                        <v-img
                        :aspect-ratio="16/9"
                        :src="item.image"
                        height="570px"
                        >
                            <div
                                v-if="hover"
                                class="d-flex v-card--reveal display-3 white--text"
                                style="height: 100%;"
                            >
                                IT SOLUTIONS
                            </div>
                        </v-img>
                        <v-card-title>
                              <transition name="slide-fade">
                            <v-icon class="px-2" color="black" v-if="hover">mdi-arrow-right</v-icon>
                            <v-icon class="" color="black" v-else>-</v-icon>
                              </transition>
                            <span>{{ item.title}}</span>
                        </v-card-title>
                        <v-card-subtitle>
                            {{item.content}}
                        </v-card-subtitle>
                    </v-card>
                  </v-hover>
              </v-col>
          </v-row>
          <v-row class="my-5">
              <v-col class="mx-auto">
                  <v-btn tile block color="#FBC02D" dark x-large>Смотреть портфолио</v-btn>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      portfolio: [{
        title: 'Дизайн сервиса нейросемантики',
        image: 'https://reconcept.ru/uploads/images/Portfolio/190802090855/1564736935_Xi.jpg',
        content: 'Сервис для благотворительных акций'
      },
      {
        title: 'Дизайн сервиса нейросемантики',
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084515/1552293915_F7.jpg',
        content: 'Сайт для привлечения $200 млн инвестиций в итальянский стартап'
      },
      {
        title: 'Дизайн сервиса нейросемантики',
        image: 'https://reconcept.ru/uploads/images/Portfolio/190802090855/1564736935_Xi.jpg',
        content: 'Сайт для продажи элитной недвижимости в Лондоне от £680 тыс'
      },
      {
        title: 'Создание сайта и стиля для агенства недвижимости UK Property Advisors Ltd',
        image: 'https://reconcept.ru/uploads/images/Portfolio/190311084405/1552293845_qY.jpg',
        content: 'Дизайн сервиса нейросемантики'
      }
      ]
    }
  }

}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  background: linear-gradient( 180deg, rgba(248, 248, 248, 0.007), rgba(26, 26, 26, 0.884));
  transition: 0.3s;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(4.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
