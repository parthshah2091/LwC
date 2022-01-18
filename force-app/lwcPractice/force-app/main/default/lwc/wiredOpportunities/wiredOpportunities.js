import { LightningElement,wire } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import getAllStages from '@salesforce/apex/OpportunityController.getAllStages';
import getProspecting from '@salesforce/apex/OpportunityController.getProspecting'; 
import getQualification from '@salesforce/apex/OpportunityController.getQualification';
import getNeedsAnalysis from '@salesforce/apex/OpportunityController.getNeedsAnalysis';
import getValueProposition from '@salesforce/apex/OpportunityController.getValueProposition';
import getIdDecisionMakers from '@salesforce/apex/OpportunityController.getIdDecisionMakers';
import getPerceptionAnalysis from '@salesforce/apex/OpportunityController.getPerceptionAnalysis';
import getProposalPriceQuote from '@salesforce/apex/OpportunityController.getProposalPriceQuote';
import getNegotiation from '@salesforce/apex/OpportunityController.getNegotiation';
import getClosedLost from '@salesforce/apex/OpportunityController.getClosedLost';
import getClosedWon from '@salesforce/apex/OpportunityController.getClosedWon';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';

const columns = [
    {label: 'Name', fieldName: NAME_FIELD.fieldApiName},
    {label: 'Stage', fieldName: STAGE_FIELD.fieldApiName}
];

export default class WiredOpportunities extends LightningElement {
    error;
    recordId;
    columns = columns;
    opportunities;
    value ='';

    allOpps;
    prospectingOpps; 
    qualificationOpps; 
    needsAnalysisOpps;
    valuePropositionOpps; 
    idDecisionMakersOpps; 
    perceptionAnalysisOpps; 
    proposalPriceQuoteOpps; 
    negotiationOpps; 
    closedWonOpps;
    closedLostOpps;
    // handleChange(event) {
    //     this.value = event.detail.value;
    // }

    @wire(getAllStages) wiredOpp1({data,error}){
        if(data){
            this.allOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.allOpps = undefined;
        }
    }   

    @wire(getProspecting) wiredOpp2({data,error}){
        if(data){
            this.prospectingOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.prospectingOpps = undefined;
        }
    }   

    @wire(getQualification) wiredOpp3({data,error}){
        if(data){
            this.qualificationOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.qualificationOpps = undefined;
        }
    }   

    @wire(getNeedsAnalysis) wiredOpp4({data,error}){
        if(data){
            this.needsAnalysisOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.needsAnalysisOpps = undefined;
        }
    }   

    @wire(getValueProposition) wiredOpp5({data,error}){
        if(data){
            this.valuePropositionOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.valuePropositionOpps = undefined;
        }
    }   

    @wire(getIdDecisionMakers) wiredOpp6({data,error}){
        if(data){
            this.idDecisionMakersOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.idDecisionMakersOpps = undefined;
        }
    }   

    @wire(getPerceptionAnalysis) wiredOpp7({data,error}){
        if(data){
            this.perceptionAnalysisOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.perceptionAnalysisOpps = undefined;
        }
    }   
    @wire(getProposalPriceQuote) wiredOpp8({data,error}){
        if(data){
            this.proposalPriceQuoteOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.proposalPriceQuoteOpps = undefined;
        }
    }  
    @wire(getNegotiation) wiredOpp9({data,error}){
        if(data){
            this.negotiationOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.negotiationOpps = undefined;
        }
    }  
    @wire(getClosedWon) wiredOpp10({data,error}){
        if(data){
            this.closedWonOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.closedWonOpps = undefined;
        }
    }  

    @wire(getClosedLost) wiredOpp11({data,error}){
        if(data){
            this.closedLostOpps = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.closedLostOpps = undefined;
        }
    }  
    getAllStageHandle(){
        this.opportunities=this.allOpps;
    }
    getProspectingHandle(){
        this.opportunities=this.prospectingOpps;
    }
    getQualificationHandle(){
        this.opportunities=this.qualificationOpps;
    }
    getNeedsAnalysisHandle(){
        this.opportunities=this.needsAnalysisOpps;
    }
    getValuePropositionHandle(){
        this.opportunities=this.valuePropositionOpps;
    }
    getIdDecisionMakersHandle(){
        this.opportunities=this.idDecisionMakersOpps;
    }
    getPerceptionAnalysisHandle(){
        this.opportunities=this.perceptionAnalysisOpps;
    }
    getProposalPriceQuotesHandle(){
        this.opportunities=this.proposalPriceQuoteOpps;
    }
    getNegotiationHandle(){
        this.opportunities=this.negotiationOpps;
    }
    getClosedWonHandle(){
        this.opportunities=this.closedWonOpps;
    }
    getClosedLostHandle(){
        this.opportunities=this.closedLostOpps;
    }
}

    // connectedCallback(){
    //     this.getAllStages();
    //     this.getProspecting();
    //     this.getQualification();
    //     this.getNeedsAnalysis();
    //     this.getValueProposition();
    //     this.getIdDecisionMakers();
    //     this.getPerception();
    //     this.getProposalPriceQuote();
    //     this.getNegotiation();
    //     this.getClosedWon();
    //     this.getClosedLost();
    // }

    // @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    // opportunityMetadata;
    // @wire(getPicklistValues,
    //     {
    //         recordTypeId: '$opportunityMetadata.data.defaultRecordTypeId', 
    //         fieldApiName: STAGENAME_FIELD

    //     }
    // )
    // stageNamePicklist;

    // @wire(getAllStages,{recordId:'$recordId',fields})
    // wiredstages({
    //     error,
    //     data
    // }){
    //     if(error){
    //         this.dispatchToast(error);
    //     }else if(data){
    //         fields.forEach(
    //             (item) => (this[item.fieldApiName] = getFieldValue(data, item))
    //         );
    //     }
    // }

    // dispatchToast(error) {
    //     this.dispatchEvent(
    //         new ShowToastEvent({
    //             title: 'Error loading contact',
    //             message: reduceErrors(error).join(', '),
    //             variant: 'error'
    //         })
    //     );
    // }



// columns = COLUMNS;
    // oppresult;
    // errorMsg;
    // allStages(){
    //     getAllStages()
    //     .then(result =>{
    //         this.oppresult = result;
    //     })
    //     .catch(error =>{
    //         this.errorMsg = error;
    //     })
    // }
    // error;
    // columns = columns;
    // opportunities;
    // @wire(getPicklistValues,{recordTypeId:'0066D0000058Y15QAE',fieldApiName:STAGENAME_FIELD})
    // opportunities;
    //  @wire(getAllStages) wiredLeads({data,error}){
    //     if(data){
    //         this.opportunities = data;
    //         console.log(data);
    //     }else if(error){
    //         console.log(error);
    //     }
    // }