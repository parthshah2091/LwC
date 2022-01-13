import { LightningElement ,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api inputItem;
    fireSelectEvent(){
        const inputItem = new CustomEvent("inputitemselect",{detail:{value:this.inputItem}});
        this.dispatchEvent(inputItem);
    }
}