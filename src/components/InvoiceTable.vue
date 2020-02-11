<template>
  <div class="invoice-table">
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
        { key: "totalamountdue", label: "Totals" }
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