<template>
    <!-- <v-app-bar
    v-if="false"
    clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
    <div>
       <v-app-bar color="white" flat >
      <v-app-bar-nav-icon v-if="false"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
       <v-btn text class="text-uppercase flex-stretch title font-weight-regular mx-2 design-btn" tile v-for="item in toolbar" :key="item.name"><span class="fs_18">{{item.name}}</span></v-btn>
        <!-- <v-btn-toggle
        class="mx-auto hidden-sm-and-down"
          v-model="special"
          tile
          borderless
          group
          color="orange darken-2"
        >
          <v-btn  v-for="item in toolbar" :key="item.name">
            <span class="hidden-sm-and-down">{{item.name}}</span>
          </v-btn>
        </v-btn-toggle> -->
        <!-- <router-link v-for="item in toolbar" :key="item.name">{{item.name}}</router-link> -->
   </v-app-bar>
    </div>
</template>

<script>
export default {
  data () {
    return {
      special: '',
      toolbar: [
        { name: 'About Us', path: '' },
        { name: 'Blogs', path: '' },
        { name: 'Porfolio', path: '' },
        { name: 'Contacts', path: '' },
        { name: 'Privacy policy', path: '' }
      ]
    }
  }
}
</script>

<style scoped>
.design-btn{
  background-color: transparent;
  height: 100%;
}
.design-btn:hover{
  background-color: transparent;
  height: 100%;
  color: rgb(224, 185, 9);
  border-bottom: 10px solid  rgb(255, 216, 42);
  border-bottom-width: 2px;;
}
</style>
