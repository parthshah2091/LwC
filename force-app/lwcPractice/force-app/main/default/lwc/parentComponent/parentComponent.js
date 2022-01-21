import { LightningElement, track, api } from "lwc";

export default class ParentComponent extends LightningElement {
  @api input;
  @track list = [];
  selected = false;

  addInputToList() {
    this.list.push(this.template.querySelector("lightning-input").value);
    // const input = this.template.querySelector("lightning-input-field".value);
  }
  handleSelect(e) {
    this.selected = true;
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.input = e.detail.value;
    // const inputitemselect = this.template.querySelector("lightning-input-field");
  }
}
