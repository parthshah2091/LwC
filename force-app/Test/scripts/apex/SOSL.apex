// Add Account and related Contact
Account acct = new Account(
    Name='Test Account',
    Phone='(225)555-8989',
    NumberOfEmployees=10,
    BillingCity='Baton Rouge');
insert acct;
// Get the Id of the Inserted Account
ID acctID = acct.ID;
// Add a contact to the Account.
Contact con = new Contact(
    FirstName='Joseph',
    LastName='Smith',
    Phone='(225)555-8787',
    Email='jsmith@testaccount.com',
    AccountId=acctID);
insert con;