import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    input;
    selected = false;
    @track list = [];

    addInputToList(e){
        this.list.push(this.template.querySelector("lightning-input".value));
        // const input = this.template.querySelector("lightning-input-field".value);
    }
    handleSelect(e){
        this.selected = true;
        this.input = e.detail.value;
        // const inputitemselect = this.template.querySelector("lightning-input-field");
    }
}