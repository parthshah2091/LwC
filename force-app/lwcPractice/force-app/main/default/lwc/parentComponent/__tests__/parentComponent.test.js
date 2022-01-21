/* eslint-disable jest/expect-expect */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @lwc/lwc/no-document-query */
import { createElement } from "lwc";
import ParentComponent from "c/parentComponent";
const INPUTITEMSELECT = false;

describe("c-parent-comp testing", () => {
  it("render child component", async () => {
    const element = createElement("c-parent-component", {
      is: ParentComponent
    });
    document.body.appendChild(element);
    const childcomponent =
      element.shadowRoot.querySelectorAll("c-child-component");
    expect(childcomponent.length).toBe(1);
  });

  // it('set handle select property correctly', ()=>{
  //     const element = createElement('c-parent-component', {
  //         is: ParentComponent
  //     })
  //     document.body.appendChild(element);
  //     const childcomponent = element.shadowRoot.querySelector('c-child-component')
  //     expect (childcomponent.inputitemselect.selected).toBe(INPUTITEMSELECT)
  // })
});
