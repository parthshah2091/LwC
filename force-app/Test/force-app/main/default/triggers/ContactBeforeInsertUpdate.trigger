trigger ContactBeforeInsertUpdate on Contact (before Insert, before Update) {
    for(Contact c: Trigger.new)
       { 
        if(trigger.isInsert)    
        {
            c.description = 'contact created by ' + userinfo.getUsername();
        }
        else if(trigger.isUpdate)
        {
            c.description = 'contact updated by ' + userinfo.getUsername(); 
        }
       } 
}