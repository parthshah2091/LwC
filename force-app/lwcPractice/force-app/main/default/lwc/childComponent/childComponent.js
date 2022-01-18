import { LightningElement ,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api inputItem;
    fireSelectEvent(e){
        // const inputItem = new CustomEvent("inputitemselect",{detail:{value:this.inputItem}});
        // this.dispatchEvent(inputItem);
        this.dispatchEvent(new CustomEvent('inputitemselect',
        {detail:{value:this.inputItem}}
        ));
    }
}