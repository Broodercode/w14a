<template>
  <div>
    <v-btn color="primary" elevation="2" @click="getJoke">NEW JOKE</v-btn>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/main";
import { mapState } from "pinia";
export default {
  name: "ButtonComponent",
  computed: {
    ...mapState(useMainStore, ["getJoke"]),
  },
};
</script>

<style lang="scss" scoped></style>
