<template>
    <!-- <v-app-bar
    v-if="false"
    clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar> -->
   <v-app-bar color="grey lighten-5" flat>
      <v-app-bar-nav-icon v-if="false"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
       <v-btn text class="text-capitalize title font-weight-regular mx-2" tile v-for="item in toolbar" :key="item.name">{{item.name}}</v-btn>
      <v-spacer></v-spacer>
   </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      toolbar: [
        { name: 'Blog', path: '' },
        { name: 'About Us', path: '' },
        { name: 'Portfolio', path: '' },
        { name: 'Contacts', path: '' },
        { name: 'Objectives', path: '' }
      ]
    }
  }
}
</script>

<style>

</style>
