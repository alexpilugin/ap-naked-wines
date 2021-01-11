<template>
  <div class="home">
    <SubBar />
    <FilterBar />

    <CategoryRow v-if="cards" header="Personal" :cards="cards.personalCards" />
    <CategoryRow v-if="cards" header="Category" :cards="cards.bestCards" />
    <CategoryRow v-if="cards" :cards="cards.recomendCards" />
    <CategoryRow v-if="cards" header="Dietary" :cards="cards.dietaryCards" />
    <NotSureOfferRow v-if="cards" :cards="cards.offerItems" />

    <!-- <NakedWinesLogo hexcolor="#0F70E8"/> -->
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import SubBar from "@/components/SubBar.vue";
import FilterBar from "@/components/FilterBar.vue";

import NakedWinesLogo from "@/components/icons/NakedWinesLogo.vue";
import CategoryRow from "@/components/CategoryRow.vue";
import NotSureOfferRow from "@/components/NotSureOfferRow.vue";

export default {
  name: "Home",
  components: {
    SubBar,
    FilterBar,
    NakedWinesLogo,
    CategoryRow,
    NotSureOfferRow,
  },
  data() {
    return {
      loading: false,
      cards: null
    };
  },
  created() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      axios
        .get("/api/wine-cards.json")
        .then((response) => {
          this.loading = false;
          this.cards = response.data;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #eee;
  padding-top: 116px;
}
</style>


