public class PropertyUtility {
    
    
    public static void newListedProperties(){
        String propEmail=null;
        List<Property__c> newPropList =[SELECT Id, Broker__r.Email__c, Name, Days_On_Market__c FROM Property__c where Days_On_Market__c<=30];
        
        for(Property__c prop:newPropList){
           propEmail+=prop.Name+':'+prop.Broker__r.Email__c;
        }
        system.debug('propEmail'+propEmail);
    }

}