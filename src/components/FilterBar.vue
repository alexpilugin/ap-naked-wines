<template>
  <div app class="filter-bar hidden-sm-and-down">
    <div class="filters">
      <v-container fluid class="mt-2 mb-0 pb-0">
        <v-row align="center">
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Country" :items="countries" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Style" :items="styles" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Alcohol" :items="alcohol" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Grape" :items="items" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Volume" :items="items" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Year" :items="items" />
          </v-col>
          
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Wishes" :items="items" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Price" :items="price" />
          </v-col>
          <v-col class="d-flex pa-0 ma-0" :width="ssW">
            <FilterSelector label="Rating" :items="rating" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import FilterSelector from "@/components/FilterSelector.vue";

export default {
  name: "FilterBar",
  components: {
    FilterSelector,
  },
  data: () => ({
    countries: ["argentina", "australia", "austria", "chile", "france", "germany", "greece", "hungary", "italy", "lebanon", "newzealand", "northmacedonia", "portugal", "southafrica", "spain", "UK", "USA"],
    styles: [
      "Big Red",
      "Crisp White",
      "Dessert & Fortified",
      "Fruity Red",
      "Fruity White",
      "Rich White",
      "Rose",
      "Smooth Red",
      "Sparkling"
    ],
    alcohol: [
      "12% To 14%",
      "Over 14%",
      "Below 12%"
    ],
    dietary: [
      "Vegetarian",
      "Vegan",      
      "Organic",      
      "Biodynamic"
    ],
    price: [
      "Under £7",
      "£7 To £10",
      "£10 To £15",
      "Over £15"
    ],
    rating: [
      "Over 70%",
      "Over 80%",
      "Over 85%",
      "Over 90%"
    ],
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    ssW: "11.1vw"
  }),
};
</script>

<style scoped>
.filter-bar {
  position: fixed;
  z-index: 10;
  top: 114px;
  left: 0;
  background: white;
  padding-bottom: 2px;
  width: 100%;
}
.-filters {
  width: 100vw;
  /* height: 23px; */
  padding: 2px 0;
}
</style>

