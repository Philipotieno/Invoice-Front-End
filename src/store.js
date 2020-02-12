/* eslint-disable no-console */
import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';


Vue.use(vuex, axios);


export default new vuex.Store({
    state: {
        topCustomerList: [],
        invoiceSummary: [],
        postInvoices: [],
        uploadInvoice: undefined
    },
    getters: {
        topCustomerList: state => {
            return state.topCustomerList;
        },
        invoiceSummary: state => {
            return state.invoiceSummary;
        },
        postInvoices: state => {
            return state.postInvoices;
        },
        uploadInvoice: state => {
            return state.uploadInvoice;
        }
    },
    mutations: {
        ADD_CUSTOMERS(state, customers) {
            state.topCustomerList = customers
        },
        ADD_INVOICE_SUMMARY(state, invoice) {
            state.invoiceSummary = invoice
        },
        POST_INVOICES(state, invoices) {
            state.postInvoices = invoices
        },
        UPLOAD_INVOICE(state, invoice) {
            state.uploadInvoice = invoice
        }

    },
    actions: {
        loadTopCustomers({ commit }) {
            axios
                .get('https://philip-invoice.herokuapp.com/invoices/topcustomers')
                .then(data => {
                    console.log(data.data.invoices);
                    let topCustomers = data.data.invoices;
                    commit('ADD_CUSTOMERS', topCustomers);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        loadInvoiceSummary({ commit }) {
            axios
                .get('https://philip-invoice.herokuapp.com/invoices/summary')
                .then(data => {
                    console.log(data.data.Invoice);
                    let invoiceSummary = data.data.Invoice;
                    commit('ADD_INVOICE_SUMMARY', invoiceSummary);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        postInvoiceDate({ commit }, params) {
            console.log('params', params);
            axios
                .post('https://philip-invoice.herokuapp.com/invoices/transactions', params)
                .then(data => {
                    console.log("post", data.data.invoices);
                    let invoices = data.data.invoices;
                    commit('POST_INVOICES', invoices);
                })
                .catch(error => {
                    switch (error.response.status) {
                        case 404:
                            alert('No transaction before that period')
                      }
                })
        },
        uploadInvoice({ commit }, params) {
            console.log('params', params);
            axios
                .post('https://philip-invoice.herokuapp.com/invoices', params)
                .then(data => {
                    console.log("uploades", data);
                    if(data.data.invoice && data.data.success){
                        let invoice = data.data;
                        commit('UPLOAD_INVOICE', invoice);
                    } else {
                        console.log('error')
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }
})