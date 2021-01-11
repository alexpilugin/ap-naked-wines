<template>
  <v-container fluid class="offer-row">
    <v-layout>
      <v-row class="row">
        <v-col sm12>
          <h2 col class="header">
            Still not sure? Try more best matches<br>
            <span>Based on all of our castomer's feedback, we think you'll love these...</span>
          </h2>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout>     
      <v-flex 
        sm6 
        md4 
        lg3 
        class="pa-2" 
        style="flex-direction:column"
        v-for="(card, i) in cards"
        :key="i"
      >
        <v-card flat class="flex-grow-1" height="100%">
          <v-container fluid height="250" class="hide ma-0 pa-0">
            <v-img height="250" :src="card.url" class="img-box" rel="preload" />
          </v-container>
          <v-card-title>
            <v-container fluid >
              <v-layout>
              <v-flex sm8 class="text-left">
                <div><span class="title">{{ card.title }} </span></div>
                <div><span class="maker">{{ card.winemaker }} </span></div>
              </v-flex>
              <v-flex sm4 class="pl-2">
                <v-btn block color="success" text>£{{ card.price }}</v-btn>
              </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: "OfferRow",
  props: {
    cards: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      ssW: "9.5vw"
    }
  }
}
</script>

<style scoped lang="scss">
.offer-row {
  /* background-color: #999; */
}
.hide {
  overflow: hidden;
}
.img-box {
  overflow: hidden;
    opacity: 1.0;
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    cursor: pointer;
    &:hover {
      opacity: .5;
    }
}
.quantity {
  color: #999;
  padding-left: 5px;
}
.header {
  color: black;
  span {
    font-size: 1rem !important; 
    color: #333;
  }
}
.header, .title {
  font-size: 1.2rem !important;
  white-space: normal;
  word-break: keep-all;
  text-align: left;
}
.maker {
  font-size: 0.9rem !important;
}
</style>