import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

require('./assets/normalize.css');
require('./assets/skeleton.css');

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');
