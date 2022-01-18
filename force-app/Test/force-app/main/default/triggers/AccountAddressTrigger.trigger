Trigger AccountAddressTrigger on Account (before insert, before update) {
        List<Account> Accountlist = new List<Account>();
        {
          for(account a : Trigger.new)
            {
                if(a.Match_Billing_Address__c == true && a.BillingPostalCode != null)
                    {
                        a.ShippingPostalCode = a.BillingPostalCode;
                    }
            }
        }
}