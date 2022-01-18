public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account>  getAccountList(){
        return [SELECT Id, Name,Phone,Industry FROM Account order by createddate desc LIMIT 5];
    }

}
