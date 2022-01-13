// import BOATMC from the message channel
import { LightningElement,wire,api,track } from 'lwc';
import { APPLICATION_SCOPE,subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c';
import { getRecord } from 'lightning/uiRecordApi';
const LONGITUDE_FIELD = 'Boat__c.Geolocation__Longitude__s';
const LATITUDE_FIELD = 'Boat__c.Geolocation__Latitude__s';
const BOAT_FIELDS = [LONGITUDE_FIELD, LATITUDE_FIELD];

export default class BoatMap extends LightningElement {
  // private
  subscription = null;
  @api boatId;
  @api
  get recordId() {
    return this.boatId;
  }
  set recordId(value) {
    this.setAttribute('boatId', value);
    this.boatId = value;
  }
  @api error = undefined;
  @api mapMarkers = [];
  
  @wire(getRecord,{
    recordId:'$boatId', fields: BOAT_FIELDS
  }) 
  wiredRecord({ error, data }) {
      // Error handling
      if (data) {
        this.error = undefined;
        const longitude = data.fields.Geolocation__Longitude__s.value;
        const latitude = data.fields.Geolocation__Latitude__s.value;
        this.updateMap(longitude, latitude);
      } else if (error) {
        this.error = error;
        this.boatId = undefined;
        this.mapMarkers = [];
      }
    }
    @wire(MessageContext)
    messageContext;

  
    
  connectedCallback() {
    if (this.subscription || this.recordId) {
      return;
    }
  } 
    // Subscribe to the message channel to retrieve the recordID and assign it to boatId.
    subscribeMC(){
      if (!this.subscription) {
        this.subscription = subscribe(
          this.messageContext, 
          BOATMC, 
          (message) => {
            this.boatId = message.recordId;
          }, 
          { scope: APPLICATION_SCOPE });
        }
      } 
      unsubscribeToMC() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

  handleMessage(message) {
    this.boatId = message.recordId;
  }
  // Creates the map markers array with the current boat's location for the map.
  updateMap(Longitude, Latitude) {
    this.mapMarkers = [Longitude,Latitude];
  }

  // Getter method for displaying the map component, or a helper method.
  get showMap() {
    return this.mapMarkers.length > 0;
  }
}