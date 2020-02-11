<template>
  <div class="invoice-table">
    <div class="drop_dwn">
      <b-dropdown id="dropdown-offset" offset="25" text="More" class="m-2">
        <b-dropdown-item to="/">Invoice Chart</b-dropdown-item>
        <b-dropdown-item to="/top-customers">Top Customers</b-dropdown-item>
        <b-dropdown-item to="/file-upload">File Upload</b-dropdown-item>
      </b-dropdown>
    </div>
      <h3>Totals</h3>
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

<style lang="scss" scoped>
</style>