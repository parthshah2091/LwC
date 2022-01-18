import { LightningElement , track, wire} from 'lwc';
import getAllLeads from '@salesforce/apex/LeadsController.getAllLeads';
import getOpenNotContactedLeads from '@salesforce/apex/LeadsController.getOpenNotContactedLeads';
import getWorkingContactedLeads from '@salesforce/apex/LeadsController.getWorkingContactedLeads';
import getClosedConvertedLeads from '@salesforce/apex/LeadsController.getClosedConvertedLeads';
import getClosedNotConvertedLeads from '@salesforce/apex/LeadsController.getClosedNotConvertedLeads';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Company', fieldName: 'Company' },
    { label: 'Email', fieldName: 'Email' },
    { label: 'Phone', fieldName: 'Phone'},
    { label: 'Status', fieldName: 'Status'},
];


export default class LeadsFilter extends LightningElement {
    // @track columns = [
    //     { label: 'Name', fieldName: 'Name' },
    //     { label: 'Company', fieldName: 'Company' },
    //     { label: 'Email', fieldName: 'Email' },
    //     { label: 'Phone', fieldName: 'Phone'},
    //     { label: 'Status', fieldName: 'Status'},
    // ];

    error;
    columns = columns;
    @track leads;

    @wire(getAllLeads) wiredLeads({data,error}){
        if(data){
            this.leads = data;
            console.log(data);
        }else if(error){
            console.log(error);
        }
    }
}
    // getAllLeads(event){
    //     event.preventDefault();
    //     const eventnew = new CustomEvent(
    //         "all",
    //         {
    //             detail: this.leads.Name, 
    //             detail: this.leads.Company,
    //             detail: this.leads.Email,
    //             detail: this.leads.Phone,
    //             detail: this.leads.Status,

    //         }
    //     ); this.dispatchEvent(eventnew);
 
    // getAllLeads(){
    //     const eventnew = new CustomEvent("All");
    //     this.dispatchEvent(eventnew);
    //     // this.leads = event.target.value;
    // }

    // getOpenNotContactedLeads(event){
    //     this.leads = event.target.value;
    // }

    // getWorkingContactedLeads(event){
    //     this.leads = event.target.value;
    // }

    // getClosedConvertedLeads(event){
    //     this.leads = event.target.value;
    // }
    // getClosedNotConvertedLeads(event){
    //     this.leads = event.target.value;
    // }