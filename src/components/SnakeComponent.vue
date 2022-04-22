<template>
  <div>
    <v-btn color="primary" elevation="2" @click="getSnake">SNAKE</v-btn>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useMainStore } from "@/stores/main";
export default {
  name: "SnakeComponent",
  computed: {
    //actions
    ...mapState(useMainStore, ["getSnake"]),
  },
};
</script>

<style lang="scss" scoped></style>
