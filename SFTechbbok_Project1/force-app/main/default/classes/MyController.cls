public with sharing class MyController {
    
    
     @AuraEnabled(cacheable=true)
     public static list<Contact> getContactList(){
         return [select Id,Name,Phone from Contact LIMIT 10];
     }


     @AuraEnabled(cacheable=true)
     public static list<account> getAccountList(string searchKey){
         string key='%'+searchKey+'%';
         return [select id,name ,industry from account where name like :key limit 10];
     }

}