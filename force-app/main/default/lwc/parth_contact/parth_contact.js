import { LightningElement, track, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class Parth_contact extends LightningElement {
    @track contacts;
    @track error;
    @wire(getContactList) contact;
    

}
