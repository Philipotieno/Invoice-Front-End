<template>
  <div class="container">
    <div class="drop_dwn">
      <b-dropdown id="dropdown-offset" offset="25" text="More" class="m-2">
        <b-dropdown-item to="/invoice-table">Invoice Table</b-dropdown-item>
        <b-dropdown-item to="/top-customers">Top Customers</b-dropdown-item>
        <b-dropdown-item to="/file-upload">File Upload</b-dropdown-item>
      </b-dropdown>
    </div>

    <form class="center" id="dateForm" role="form" @submit.prevent="fetchData">
      <h3>Invoice Range</h3>
      <Datepicker v-model="startDate" />
    </form>
    <line-chart
      :library="{
          yAxis: {
            labels: {
              enabled: true
            },
            min: 0,
            tickInterval: 2
          },
          colors: ['#556573']
        }"
      :data="formattedArray"
      xtitle="Month"
      ytitle="Total Amt."
    />
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import lodash from "lodash";
export default {
  name: "InvoiceChart",
  components: {
    Datepicker
  },
  data() {
    return {
      startDate: ""
    };
  },
  props: {},
  computed: {
    postInvoices() {
      return this.$store.getters.postInvoices;
    },
    formattedArray() {
      let postInvoices = this.postInvoices;
      return lodash.reduce(
        postInvoices,
        function(obj, postInvoices) {
          obj[postInvoices.duedate] = postInvoices.totalamountdue;
          return obj;
        },
        {}
      );
    }
  },
  watch: {
    startDate(date) {
      let start = new moment(date).startOf("day");
      this.startDate = new Date(start).toISOString();
      this.fetchData();
    }
  },
  mounted() {
    //on mounted, date will be today's date
    this.startDate = moment(new Date()).format(moment.HTML5_FMT.DATE);
    //fetch data with today's date
    let startDate = moment(new Date()).format(moment.HTML5_FMT.DATE);
    let payload = {
      date: startDate
    };
    this.$store.dispatch("postInvoiceDate", payload);
  },
  methods: {
    fetchData() {
      //on input of a new date, v-model changes
      let startDate = moment(this.startDate).format(moment.HTML5_FMT.DATE);
      let payload = {
        date: startDate
      };
      if (startDate) {
        this.$store.dispatch("postInvoiceDate", payload);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.range {
  margin: 0 auto;
}
</style>
