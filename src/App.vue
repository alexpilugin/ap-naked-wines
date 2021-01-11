<template>
  <v-app>
    <TopNavbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue'
import SubBar from "@/components/SubBar.vue";
import FilterBar from "@/components/FilterBar.vue";

export default {
  name: 'App',
  components: {
    TopNavbar,
    SubBar,
    FilterBar
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "@/sass/ui.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-brand;
  position: relative;
}
</style>