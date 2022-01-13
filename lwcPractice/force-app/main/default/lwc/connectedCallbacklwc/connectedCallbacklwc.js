import { LightningElement, wire, track } from 'lwc';
import getLatestAccounts from '@salesforce/apex/AccountController.getAccountList';
const COLS = [
    { label: 'Name', fieldName: 'Name', type: 'text' },
    { label: 'Stage', fieldName: 'Phone', type: 'text' },
    { label: 'Amount', fieldName: 'Industry', type: 'text' }
];
export default class ConnectedCallbackLwc extends LightningElement {
    cols = COLS;
    @track isSpinner = false;
    @track accountList = [];

    connectedCallback() {
        this.isSpinner = true;
    }

    @wire(getLatestAccounts) fetchAccList(result) {
        this.isSpinner = false;
        if (result.data) {
            this.accountList = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.accountList = [];
        }
    }
}