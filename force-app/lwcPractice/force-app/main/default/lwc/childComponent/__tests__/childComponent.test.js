import { createElement } from "lwc";
import ChildComponent from "c/childComponent";

describe("testing of my child component", () => {
  beforeEach(() => {
    const element = createElement("c-child-component", {
      is: ChildComponent
    });
    document.body.appendChild(element);
  });
});
