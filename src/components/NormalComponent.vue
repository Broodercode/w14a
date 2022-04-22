!
<template>
  <div>
    <v-btn color="primary" elevation="2" @click="getNormal">Normal</v-btn>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/main";
import { mapState } from "pinia";
export default {
  name: "NormalComponent",
  computed: {
    //actions
    ...mapState(useMainStore, ["getNormal"]),
    //getters
  },
};
</script>

<style lang="scss" scoped></style>
