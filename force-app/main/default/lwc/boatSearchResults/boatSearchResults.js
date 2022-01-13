import { LightningElement, wire, api, track } from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
import updateBoatList from '@salesforce/apex/BoatDataService.updateBoatList';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { publish, MessageContext } from 'lightning/messageService';
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c';

const LOADING_EVENT = 'loading';
const DONE_LOADING_EVENT = 'doneloading';
const SUCCESS_TITLE = 'Success';
const MESSAGE_SHIP_IT = 'Ship it!';
const SUCCESS_VARIANT = 'success';
const ERROR_TITLE = 'Error';
const ERROR_VARIANT = 'error';

export default class BoatSearchResults extends LightningElement {
    boatTypeId = '';
    @track boats;
    @track draftValues = [];
    selectedBoatId = '';
    isLoading = false;
    error = undefined;
    wiredBoatsResult;

    @wire(MessageContext) messageContext;
    
    columns = [
        { label: 'Name', fieldName: 'Name', type: 'text', editable: 'true'  },
        { label: 'Length', fieldName: 'Length__c', type: 'number', editable: 'true' },
        { label: 'Price', fieldName: 'Price__c', type: 'currency', editable: 'true' },
        { label: 'Description', fieldName: 'Description__c', type: 'text', editable: 'true' }
    ];
    // Handles loading event
    // handleLoading() { }
    
    // Handles done loading event
    // handleDoneLoading() { }
    
    // Handles search boat event
    // This custom event comes from the form
    @api
    searchBoats(boatTypeId) {
        this.isLoading = true;
        this.notifyLoading(this.isLoading);
        this.boatTypeId = boatTypeId;
    }
    @wire(getBoats, { boatTypeId: '$boatTypeId' })
    wiredBoats(result) {
        this.boats = result;
        if (result.error) {
            this.error = result.error;
            this.boats = undefined;
        } else if (result.data) {
            //this.boats = result.data;
        }
        this.isLoading = false;
        this.notifyLoading(this.isLoading);
    }

    updateSelectedTile(event) {
        this.selectedBoatId = event.detail.boatId;
        this.sendMessageService(this.selectedBoatId);
    }
    handleSave(event) {
        this.notifyLoading(true);
       const recordInputs = event.detail.draftValues.slice().map(draft=>{
           const fields = Object.assign({}, draft);
           return {fields};
       });

       console.log(recordInputs);
       const promises = recordInputs.map(recordInput => updateRecord(recordInput));
       Promise.all(promises).then(res => {
           this.dispatchEvent(
               new ShowToastEvent({
                   title: SUCCESS_TITLE,
                   message: MESSAGE_SHIP_IT,
                   variant: SUCCESS_VARIANT
               })
           );
           this.draftValues = [];
           return this.refresh();
       }).catch(error => {
           this.error = error;
           this.dispatchEvent(
                new ShowToastEvent({
                    title: ERROR_TITLE,
                    message: 'Contact System Admin!',
                    variant: ERROR_VARIANT
                })
            );
            this.notifyLoading(false);
       }).finally(() => {
            this.draftValues = [];
        });
    }
    // handleSave(event) {
    //     const recordInputs = event.detail.draftValues.slice().map(draft => {
    //         const fields = Object.assign({}, draft);
    //         return { fields };
    //     });
    //     const promises = recordInputs.map(recordInput => updateRecord(recordInput));
    //     Promise.all(promises)
    //         .then(() => {
    //             this.showToastEvent('Success','Ship It!','success');
    //             return this.refresh();
    //         })
    //         .catch( error => {
    //             this.error = error;
    //             this.showToastEvent('Error', error.body.message, 'error');
    //         }).finally(() => {
    //             this.draftValues = [];
    //         });
    // }
    @api
    async refresh() {
        this.isLoading = true;
        this.notifyLoading(this.isLoading);      
        await refreshApex(this.boats);
        this.isLoading = false;
        this.notifyLoading(this.isLoading);        
    }
    notifyLoading(isLoading) {
        if (isLoading) {
            this.dispatchEvent(new CustomEvent(LOADING_EVENT));
        } else {
            this.dispatchEvent(CustomEvent(DONE_LOADING_EVENT));
        }
    }

    showToastEvent(title, message, variant) {
        const toastEvent = new ShowToastEvent({
            title : title,
            message : message,
            variant : variant
        });
        this.dispatchEvent(toastEvent);
    }
    sendMessageService(boatId) { 
        publish(this.messageContext, BoatMC, { recordId : boatId });
    }
    // createNewBoat() { }

}