<template>
  <div>
    <v-app-bar flat :dark="isDarkMode ? true : false" >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-btn
        v-if="isVisiting"
        @click="window.history.back()"
        text
        tile
        class="text-uppercase text--secondary"
        ><v-icon>mdi-chevron-left</v-icon>Вернуться в блог</v-btn
      >
      <v-toolbar-title @click="$router.push('/')" class="item-select">
          <v-img max-width="130" :src="require('../../assets/images/logo1.png')"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        class="text-uppercase flex-stretch title font-weight-regular mx-2 design-btn hidden-sm-and-down"
        tile
        v-for="item in toolbar"
        :key="item.name"
        :to="item.path"
        ><span class="nunito fs_18">{{ item.name }}</span></v-btn
      >
    </v-app-bar>
    <v-navigation-drawer :dark="isDarkMode ? true : false" v-model="drawer" app>
      <v-list-item>
          <v-img :src="require('../../assets/images/logo1.png')"></v-img>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item :to="item.path" v-for="item in toolbar" :key="item.name" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>
              <span class="nunito-sm fs_18">{{
                item.name
              }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-switch v-model="preferance"></v-switch>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  watch: {
    preferance (bool) {
      this.$vuetify.theme.dark = bool
      this.$store.commit('darkmode', bool)
    }
  },
  computed: {
    isDarkMode () {
      return this.$store.state.isDarkMode
    },
    isVisiting () {
      return this.$store.state.isVisiting
    }
  },
  data () {
    return {
      preferance: false,
      special: '',
      drawer: false,
      toolbar: [
        { name: 'О нас', path: '/' },
        { name: 'Блоги', path: '/blog' },
        { name: 'портфолио', path: '/portfolio' },
        { name: 'контакты', path: '/contacts' }
      ]
    }
  },
  mounted () {
    this.$vuetify.theme.dark = false
  }
}
</script>
<style scoped>
.design-btn {
  background-color: transparent;
  height: 100%;
}
.design-btn:hover {
  background-color: transparent;
  height: 100%;
  color: rgb(224, 185, 9);
  border-bottom: 10px solid rgb(255, 216, 42);
  border-bottom-width: 2px;
}
</style>
