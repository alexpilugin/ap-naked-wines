import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0f70e8',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#df171e',
        info: '#2196F3',
        success: '#54ce34',
        warning: '#FFC107',
        brand: '#0f70e8',
      },
    },
    options: {
      customProperties: true
    }
  }
});
