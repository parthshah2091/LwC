public with sharing class LeadsController {
    public LeadsController() {

    }
    @AuraEnabled(cacheable=true)
    public static Lead[] getAllLeads() {
        return [SELECT Name, Company, Email, Phone, Status FROM Lead WITH SECURITY_ENFORCED ORDER BY Name ];
    }
    @AuraEnabled(cacheable=true)
    public static Lead[] getOpenNotContactedLeads() {
        return [SELECT Name, Company, Email, Phone, Status FROM Lead where status='Open - Not Contacted' WITH SECURITY_ENFORCED ORDER BY Name];
    }
    @AuraEnabled(cacheable=true)
    public static Lead[] getWorkingContactedLeads() {
        return [SELECT Name, Company, Email, Phone, Status FROM Lead where status='Working - Contacted' WITH SECURITY_ENFORCED ORDER BY Name];
    }
    @AuraEnabled(cacheable=true)
    public static Lead[] getClosedConvertedLeads() {
        return [SELECT Name, Company, Email, Phone, Status FROM Lead where status='Closed - Converted' WITH SECURITY_ENFORCED ORDER BY Name];
    }
    @AuraEnabled(cacheable=true)
    public static Lead[] getClosedNotConvertedLeads() {
        return [SELECT Name, Company, Email, Phone, Status FROM Lead where status='Closed - Not Converted' WITH SECURITY_ENFORCED ORDER BY Name];
    }

}