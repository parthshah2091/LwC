import { LightningElement, wire } from "lwc";
// import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FirstName_FIELD from "@salesforce/schema/Contact.FirstName";
import LastName_FIELD from "@salesforce/schema/Contact.LastName";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import getContacts from "@salesforce/apex/ContactController.getContacts";
import { reduceErrors } from "c/ldsUtils";

// objectApiName = CONTACT_OBJECT;
const COLUMNS = [
  {
    label: "First Name",
    fieldName: FirstName_FIELD.fieldApiName,
    type: "text"
  },
  { label: "Last Name", fieldName: LastName_FIELD.fieldApiName, type: "text" },
  { label: "Email", fieldName: EMAIL_FIELD.fieldApiName, type: "email" }
];
export default class ContactList extends LightningElement {
  columns = COLUMNS;
  errors;
  @wire(getContacts)
  contacts;
  get errors() {
    console.log("this.contacts.error: ", this.contacts.error);
    return this.contacts.error ? reduceErrors(this.contacts.error) : [];
  }
}
