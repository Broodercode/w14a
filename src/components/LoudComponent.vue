!
<template>
  <div>
    <v-btn color="primary" elevation="2" @click="getCaps">CAPS</v-btn>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/main";
import { mapState } from "pinia";
export default {
  name: "LoudComponent",
  computed: {
    //actions
    ...mapState(useMainStore, ["getCaps"]),
    //getters
  },
};
</script>

<style lang="scss" scoped></style>
