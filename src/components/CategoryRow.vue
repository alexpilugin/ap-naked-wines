<template>
  <v-container fluid>
    <v-layout>
      <v-row class="row">
        <v-col sm12>
          <h2 col class="header">{{ header }}</h2>
        </v-col>
      </v-row>
    </v-layout>
    <v-layout>      
      <v-flex 
        sm6 
        md4 
        lg3 
        class="pa-2" 
        v-for="(card, i) in cards"
        :key="i"
      >
        <v-card flat>
          <v-container fluid height="250" class="hide ma-0 pa-0">
            <v-img height="250" :src="card.url" class="img-box" rel="preload" />
          </v-container>
          <v-card-title>
            <span>{{ card.title }} </span><span class="quantity"> ({{ card.quantity }}) </span>
          </v-card-title>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: "CategoryRow",
  props: {
    cards: {
      type: Array,
      default: null
    },
    header: {
      type: String,
      default: ""
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
.hide {
  overflow: hidden;
}
.img-box {
  overflow: hidden;
    transition: all .25s ease-in-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    cursor: pointer;
    &:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform:scale(1.1)
    }
}
.quantity {
  color: #999;
  padding-left: 5px;
}
.header {
  color: black;
  font-size: 1.2rem !important;
  white-space: normal;
  word-break: keep-all;
  text-align: left;
  span {
    font-size: 1rem !important; 
    color: #333;
  }
}
</style>