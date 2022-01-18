import { LightningElement,track,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
// import Name_FIELD from '@salesforce/schema/Contact.Name';
import FirstName_FIELD from '@salesforce/schema/Contact.FirstName';
import LastName_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class ContactCreator extends LightningElement {
    @track objectApiName = CONTACT_OBJECT;
    @track fields = [FirstName_FIELD, LastName_FIELD, EMAIL_FIELD];
    handleSuccess(event) {
         const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent); 
    }
}