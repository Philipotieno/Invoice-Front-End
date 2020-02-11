import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueRouter from 'vue-router';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueChartkick from 'vue-chartkick';
import HighCharts from 'highcharts';
import BootstrapVue from 'bootstrap-vue';


//routes
import Routes from './routes';


import Lodash from 'lodash';
const { CustomFilters: CustomFilters } = require('./lib');


Vue.use(VueRouter);
Vue.use(VueChartkick, { adapter: HighCharts });
Vue.use(Lodash);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

//filters
// Vue.filter('numberWithCommas', CustomFilters.numberWithCommas);
Vue.filter('getMonth', CustomFilters.getMonth);


const router = new VueRouter({
  routes: Routes
})


new Vue({
  render: h => h(App),
  store,
  router: router
}).$mount('#app')
