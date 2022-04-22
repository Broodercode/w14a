!
<template>
  <div>
    <v-row class="">
      <v-col>
        <button-component></button-component>
      </v-col>
    </v-row>
    <div class="">
      <v-row>
        <v-col>
          <loud-component></loud-component>
        </v-col>
        <v-col>
          <normal-component></normal-component>
        </v-col>
        <v-col>
          <snake-component></snake-component>
        </v-col>
      </v-row>
    </div>
    <h2>{{ jokeData }}</h2>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/main";
import { mapState } from "pinia";
import LoudComponent from "@/components/LoudComponent.vue";
import NormalComponent from "@/components/NormalComponent.vue";
import SnakeComponent from "@/components/SnakeComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
// import cookies from 'vue-cookies'

export default {
  components: {
    LoudComponent,
    NormalComponent,
    SnakeComponent,
    ButtonComponent,
  },
  name: "AxiosComponent",
  computed: {
    //state
    ...mapState(useMainStore, ["jokeResponse", "jokeData"]),
    //actions

    //getters
    ...mapState(useMainStore, ["jokeText"]),
  },
  data() {
    return {
      store: undefined,
    };
  },
  mounted() {
    this.store = useMainStore();
  },
};
</script>

<style lang="scss" scoped></style>
