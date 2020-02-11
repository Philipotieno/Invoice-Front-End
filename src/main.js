import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueChartkick from 'vue-chartkick';
import highCharts from 'highcharts';
import BootstrapVue from 'bootstrap-vue';
// import { Datetime } from 'vue-datetime';


import lodash from 'lodash';
const { CustomFilters: CustomFilters } = require('./lib');



Vue.use(VueChartkick, { adapter: highCharts });
Vue.use(lodash);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

//filters
// Vue.filter('numberWithCommas', CustomFilters.numberWithCommas);
Vue.filter('getMonth', CustomFilters.getMonth);

//components
// Vue.component('datetime', Datetime);




new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
