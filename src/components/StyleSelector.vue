<template>
  <v-card flat :class="stlName" :width="width">
    <v-card-text class="px-0">
      <span class="mr-2">{{ text }}</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "StyleSelector",
  props: ["text", "styleName", "width"],
  data() {
    return {
      checked: false,
      stlName: "all",
    };
  },
  created() {
    if (this.styleName) {
      this.stlName = "style-selector " + this.styleName;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/ui.scss";

.style-selector {  
  font-size: 0.95rem !important;
  float: left;
  position: relative;  
  min-width: 93px;
  margin: 0px 2px;
  .v-card__text {
    padding: 0px !important;
    color: white;
    text-align: right;
  }
  &.all {    
    background-color: white;
    border-radius: 1px solid $color-brand;
    .v-card__text {
      color: $color-brand;
    }
  }
  &.sparkling {
    background-color: $color-style-sparkling;
  }
  &.fruity-white {
    background-color: $color-style-fruity-white;
  }
  &.rich-white {
    background-color: $color-style-rich-white;
  }
  &.crisp-white {
    background-color: $color-style-crisp-white;
  }
  &.rose {
    background-color: $color-style-rose;
  }
  &.smooth-red {
    background-color: $color-style-smooth-red;
  }
  &.fruity-red {
    background-color: $color-style-fruity-red;
  }
  &.big-red {
    background-color: $color-style-big-red;
  }
  &.fortified {
    background-color: $color-style-dessert-fortified;
  }
}
</style>