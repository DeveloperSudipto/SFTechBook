public with sharing class ContainerController {
    public ContainerController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchKey){
        String key='%'+searchKey+'%';
        return [Select id,name from Account where name like :key ];
    }


    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String searchKey){
            String key='%'+searchKey+'%';       
            return [Select id,name,title,phone,email from contact where name like :key];
       
    }
}