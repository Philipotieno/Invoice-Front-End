<template>
  <div id="app">
    <TopCustomers/>
    <InvoiceTable/>
    <InvoiceChart/>
    <FileUpload/>
  </div>
</template>

<script>
// import InvoiceChart from './components/InvoiceChart.vue'
import TopCustomers from './components/TopCustomers'
import InvoiceTable from './components/InvoiceTable'
import InvoiceChart from './components/InvoiceChart'
import FileUpload from './components/FileUpload'

export default {
  name: 'app',
  components: {
    InvoiceChart,
    TopCustomers,
    InvoiceTable,
    FileUpload
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
