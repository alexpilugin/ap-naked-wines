<template>
<div app class="subbar hidden-sm-and-down">
  <!-- <v-system-bar app class="subbar"> -->
    <div class="style-filters">      
      <StyleSelector text="Sparkling" styleName="sparkling" :width="ssW" />
      <StyleSelector text="Fruity White" styleName="fruity-white"  :width="ssW" />
      <StyleSelector text="Rich White" styleName="rich-white"  :width="ssW" />
      <StyleSelector text="Crisp White" styleName="crisp-white"  :width="ssW" />
      <StyleSelector text="Rose" styleName="rose"  :width="ssW" />
      <StyleSelector text="Smooth Red" styleName="smooth-red"  :width="ssW" />
      <StyleSelector text="Fruity Red" styleName="fruity-red"  :width="ssW" />
      <StyleSelector text="Big Red" styleName="big-red"  :width="ssW" />
      <StyleSelector text="D & F" styleName="fortified"  :width="ssW" />
      <StyleSelector text="All" styleName="all"  :width="ssW" />
    </div>
  <!-- </v-system-bar> -->
  </div>
</template>

<script>
import StyleSelector from "@/components/StyleSelector.vue";

export default {
  name: "Subbar",
  components: {
    StyleSelector
  },
  data() {
    return {
      ssW: "9.5vw"
    }
  }
}
</script>

<style scoped>
  .subbar {
    position: fixed;
    z-index: 10;
    top: 88px;
    left: 0;
    background: white;
    padding-bottom: 2px;
  }
  .style-filters {
    width: 100vw;
    /* height: 23px; */        
    padding: 2px 0;
  }
</style>