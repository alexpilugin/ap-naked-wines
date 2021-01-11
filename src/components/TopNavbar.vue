<template>
<div>
  <v-app-bar app class="app-bar elevation-0" color="white" height="88px">

    <v-container class="top-bar-content d-flex align-center ma-0 pa-0">
        <router-link to="/" class="nw-brand-logo ma-0 pa-0">
          <NakedWinesLogo hexcolor="#0f70e8" />
        </router-link>
    </v-container>

    <v-toolbar-items class="ml-2">
      <v-btn 
        text 
        class="top-btn" 
        @mouseover="wineOver" 
        @mouseout="wineOut" 
        @click="navigate('/wine')"
      >
        <span>Wine</span>
      </v-btn>
      <v-btn text class="top-btn" @click="navigate('/angels')">Angels</v-btn>
      <v-btn text class="top-btn" @click="navigate('/help')">Help</v-btn>
      <v-btn text class="top-btn" @click="navigate('/voucher')">Got a Voucher?</v-btn>
      
    </v-toolbar-items>

    <v-spacer></v-spacer>



<!--
    <v-spacer />
    
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Meeting Log</router-link>
    </div>
-->
      <!--
        <div v-show="$vuetify.breakpoint.mdAndUp" class="pr-3">
        </div>
      -->
    <WinesDropdown v-if="isDropped" />   
  </v-app-bar>
</div>
</template>

<script>
import NakedWinesLogo from "@/components/icons/NakedWinesLogo.vue";
import WinesDropdown from "@/components/WinesDropdown.vue";

export default {
  name: "NavBar",
  components: {
    NakedWinesLogo,
    WinesDropdown
  },
  data() {
    return {
      isDropped: false,
      ssW: "9.5vw"
    }
  },
  methods: {
    clickBasket() {
      //
    },
    navigate(route) {
      if (this.$route.path !== route) {
        this.$router.push({ path: route });
      }      
    },
    wineOver() {
      this.isDropped = false
    },
    wineOut() {
      this.isDropped = false
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/sass/ui.scss"; 

.app-bar {
  height: 88px;
  display: flex;
  align-items: center;
  padding-top: -10px;

  .v-toolbar__content {
    height: 64px;
    margin-left: auto;
    margin-right: auto;
    padding-right: .75rem;
    padding-left: .75rem;
    max-width: 1140px;

    .top-bar-content {
      color: $color-brand;

      .nw-brand-logo {
        width: 120px;
        height: 100%; 
      }
    }
  }
  
  .top-btn {
    text-transform: capitalize;
    color: black;
    font-size: 1.1rem !important;
  }
}
</style>