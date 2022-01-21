/* eslint-disable vars-on-top */
/* eslint-disable dot-notation */
import { LightningElement, track } from "lwc";
import getCalloutResponseContents from "@salesforce/apex/fetchDetailOfExchangeRate.getCalloutResponseContents";
const DELAY = 350;

export default class ExchangeRate extends LightningElement {
  @track ExgRate;
  apiKey = "25bd3be7e49f641c5f9acd01a07d53f0";
  apiUrl =
    "http://data.fixer.io/api/latest?access_key=25bd3be7e49f641c5f9acd01a07d53f0";
  // outputObject=[];
  @track error;
  @track search;

  searchKeyword(event) {
    this.search = event.target.value;
  }

  // searchKeyword(event) {
  //     if(event.target.name==="ExgRate"){
  //         this.ExgRate = event.target.value;
  //     }
  //     else if(event.target.name==="apiKey"){
  //         this.apiKey = event.target.value;
  //     }
  // }

  handleBtnClick() {
    // this.apiUrl="https://data.fixer.io/api/latest?access_key=${this.apiKey}";
    // const calloutURI = 'http://data.fixer.io/api/latest?access_key=25bd3be7e49f641c5f9acd01a07d53f0';
    const mainUrl = this.apiUrl;
    console.log(mainUrl);
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      getCalloutResponseContents({ mainUrl: this.apiUrl })
        .then((result) => {
          console.log("method executed");
          var rates = result["rates"];
          var values = [];
          console.log("search" + this.search);
          for (var key in rates) {
            if (key === this.search) values.push(key + "=" + rates[key]);
          }
          this.ExgRate = values;

          // console.log(result);
          // this.outputObject = result;
          // this.error=undefined;
        })
        .catch((error) => {
          console.log(error);
          console.log("error");
          this.error = error;
          this.ExgRate = undefined;
        });
    }, DELAY);

    // fetch(calloutURI,{
    //     method:"GET"
    // }).then ((response)=>response.json())
    //     .then(repos=>{
    //         console.log(repos)
    //         this.ExgRate = repos.ExgRate;
    //         console.log(this.ExgRate);
    // });
  }
  // @track contactsRecord;
  // searchValue = '';

  // update searchValue var when input field value change
}
