import InvoiceChart from './components/InvoiceChart';
import InvoiceTable from './components/InvoiceTable';
import TopCustomers from './components/TopCustomers';
import FileUpload from './components/FileUpload';

export default [
    { path: '/', component: InvoiceChart },
    { path: '/invoice-table', component: InvoiceTable },
    { path: '/top-customers', component: TopCustomers },
    { path: '/file-upload', component: FileUpload }
]