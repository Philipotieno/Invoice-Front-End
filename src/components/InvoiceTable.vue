<template>
  <div class="invoice-table">
    <div class="drop_dwn">
      <b-dropdown id="dropdown-1" text="More Options" class="m-md-2">
        <b-dropdown-item to="/last-transactions">Last 30 Transactions Chart</b-dropdown-item>
        <b-dropdown-item to="/top-customers">Top Customers</b-dropdown-item>
        <b-dropdown-item to="/">File Upload</b-dropdown-item>
      </b-dropdown>
    </div>
      <h3>Summary Of All transactions</h3>
    <div v-if="invoiceSummary.length">
      <b-table fixed responsive striped hover :items="invoiceSummary" :fields="fields">
        <template slot="year" slot-scope="data">{{ data.item.year  }}</template>
        <template
          slot="month"
          slot-scope="data"
        >{{ data.item.month | getMonth }}</template>
        <template
          slot="totalamountdue"
          slot-scope="data"
        >{{ data.item.totalamountdue }}</template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceTable.vue",
  computed: {
    invoiceSummary() {
      return this.$store.getters.invoiceSummary;
    }
  },
  data() {
    return {
      fields: [
        { key: "year", label: "Year" },
        { key: "month", label: "Month" },
        { key: "totalamountdue", label: "Totals (KES)" }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("loadInvoiceSummary");
  }
};
</script>

<style scoped>
h3 {
  color: blue;
}

.drop_dwn {
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
  margin-bottom: 10%
}
</style>