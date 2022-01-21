public with sharing class OpportunityController {
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getAllStages() {
    return [
      SELECT Name, Account.Name, StageName
      FROM Opportunity
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getProspecting() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Prospecting'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getQualification() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Qualification'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getNeedsAnalysis() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Needs Analysis'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getValueProposition() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Value Proposition'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getIdDecisionMakers() {
    return [
      SELECT Id, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Id. Decision Makers'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getPerceptionAnalysis() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Perception Analysis'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getProposalPriceQuote() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Proposal/Price Quote'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getNegotiation() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Negotiation/Review'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getClosedWon() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Closed Won'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
  @AuraEnabled(Cacheable=true)
  public static List<Opportunity> getClosedLost() {
    return [
      SELECT AccountId, Name, StageName
      FROM Opportunity
      WHERE StageName = 'Closed Lost'
      WITH SECURITY_ENFORCED
      ORDER BY Name
    ];
  }
}
