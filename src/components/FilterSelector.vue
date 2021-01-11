<template>
  <v-container fluid class="pa-0 ma-1">
    <v-row align="center">
      <v-col class="d-flex" cols="12">
        <v-select :items="items" :label="label" outlined></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FilterSelector",
  props: ['label', 'items']
};
</script>