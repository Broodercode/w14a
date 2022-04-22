<template>
  <v-app>
 

    <v-main>
      <v-container>
    <axios-component></axios-component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AxiosComponent from './components/AxiosComponent.vue';


export default {
  name: 'App',

  components: {

    AxiosComponent,
  },

  data: () => ({
    //
  }),
};
</script>
