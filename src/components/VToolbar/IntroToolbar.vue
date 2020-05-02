<template>
  <div>
   <!-- <v-card color="rgba(250, 250, 250, 0.055);" class="colsr" absolute>
       <v-row justify="end">
           <v-col cols="12" align-self="end">
               <v-btn outlined x-large rounded color="orange lighten-2">Join to Blog</v-btn>
           </v-col>
       </v-row>
   </v-card> -->
   <!-- <v-toolbar absolute color="rgba(250, 250, 250, 0.055);" class="colsr" tile flat>
 <v-btn outlined x-large rounded color="orange lighten-2">Join to Blog</v-btn>
   </v-toolbar> -->
     <v-app-bar
     tile flat
     absolute
    color="transparent"
    >
      <v-spacer></v-spacer>

     <v-btn to="/blog" text x-large rounded color="orange lighten-2">Присоединиться к блогу</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.colsr{
background-color: rgba(250, 250, 250, 0.055);
position: absolute;
}
</style>
