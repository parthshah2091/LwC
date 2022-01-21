import { createElement } from "lwc";
import WiredOpportunities from "c/wiredOpportunities";

describe("my-wire-component testing", () => {
  beforeEach(() => {
    const element = createElement("c-wired-opportunities", {
      is: WiredOpportunities
    });
    document.body.appendChild(element);
  });
});
