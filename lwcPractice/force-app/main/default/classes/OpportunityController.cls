public with sharing class OpportunityController {
    @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getAllStages(){
        return [Select Name, Account.Name, StageName from Opportunity WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getProspecting(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Prospecting' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getQualification(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Qualification' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getNeedsAnalysis(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Needs Analysis' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getValueProposition(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Value Proposition' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getIdDecisionMakers(){
        return [Select Id, Name, StageName from Opportunity where StageName='Id. Decision Makers' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getPerceptionAnalysis(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Perception Analysis' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getProposalPriceQuote(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Proposal/Price Quote' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getNegotiation(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Negotiation/Review' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getClosedWon(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Closed Won' WITH SECURITY_ENFORCED order by Name];
     }
     @AuraEnabled(Cacheable = true)
     public static List<Opportunity> getClosedLost(){
        return [Select AccountId, Name, StageName from Opportunity where StageName='Closed Lost' WITH SECURITY_ENFORCED order by Name];
     }
 }