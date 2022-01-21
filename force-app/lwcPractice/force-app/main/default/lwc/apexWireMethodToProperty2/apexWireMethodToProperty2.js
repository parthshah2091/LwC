import { LightningElement, wire } from "lwc";
import getContactList from "@salesforce/apex/ContactController.getContactList";

export default class ApexWireMethodToProperty extends LightningElement {
  @wire(getContactList) contacts;

  renderedCallback() {
    if (this.contacts && this.contacts.data) {
      console.log(JSON.stringify(this.contacts.data));
    }
  }
}
