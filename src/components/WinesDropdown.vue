<template>
  <transition name="slide">
    <div class="wines-dropdown">
      <v-container grid-list-md text-xs-left fluid>
        <v-layout row wrap>
          <v-flex col xs6>
            <v-card flat>
              <v-card-text class="px-0">
                <!--
                <ul class="list">
                  <li><v-btn block text>Wines</v-btn></li>
                  <li><v-btn block text>All wines</v-btn></li>
                  <li><v-btn block text>Red wine</v-btn></li>
                  <li><v-btn block text>Rosé wine</v-btn></li>
                  <li><v-btn block text>Champagne & fizz</v-btn></li>
                </ul>
                -->
                <v-list class="wine-list">
                  <v-list-item exact>
                    <v-list-item-content>
                      <v-list-item-title v-text="'Wines'" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item exact>
                    <v-list-item-content>
                      <v-list-item-title v-text="'All Wines'" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item exact>
                    <v-list-item-content>
                      <v-list-item-title v-text="'Red Wines'" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item exact>
                    <v-list-item-content>
                      <v-list-item-title v-text="'Rosé wine'" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item exact>
                    <v-list-item-content>
                      <v-list-item-title v-text="'Champagne & fizz'" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex col xs6>
            <v-card flat>
              <v-card-text class="px-0">6</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </transition>
</template>

<script>
export default {
  name: "WinesDropdown",
  data() {
    return {
      items: [
        {
          title: 'Wines',
          to: '/wines'
        },
        {
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.wines-dropdown {
  display: grid;
  position: absolute;
  top: 84px;
  left: 0;
  width: 100vw;
  height: 120px;
  margin: 0;
  padding: 0;
  background: red;

  .wine-list {
    margin-left: 168px;
    list-style: none;
    padding-left: 0;
    list-style-position: outside;
    text-align: left;

    .v-list-item {
      .v-list-item__title {
        font-size: 1.2rem !important;
      }      
    }
  }
}
</style>