<template>
  <div class="hello">
    <div class="drop_dwn">
      <b-dropdown id="dropdown-offset" offset="255" text="More" class="m-2">
        <b-dropdown-item to="/">View Top 5 Customers</b-dropdown-item>
        <b-dropdown-item to="/invoice-table">Summary of transactions</b-dropdown-item>
        <b-dropdown-item to="/file-upload">Upload a csv file</b-dropdown-item>
      </b-dropdown>
    </div>
    <h3>Top Customers</h3>
      <bar-chart
        :library="{
          yAxis: {
            labels: {
              enabled: true
            },
            className: 'highcharts-color-0',
            min: 0,
            tickInterval: 2000
          },
          plotOptions: {
            column: {
              borderRadius: '100px'
            }
          },
          styledMode: true,
          colors: ['#f87979']
        }"
        :data="newArray"
        xtitle="Name"
        ytitle="Amount"
      ></bar-chart>
  </div>
</template>

<script>
// import {mapState} from 'vuex';
export default {
  name: 'TopCustomers',
  props: {
  },
  computed:{
    topCustomerList(){
        return this.$store.getters.topCustomerList;
    },
    newArray(){
         return this.topCustomerList.map(obj => Object.values(obj))
         
     }
  },
 mounted(){
    this.$store.dispatch('loadTopCustomers')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color: blue
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
