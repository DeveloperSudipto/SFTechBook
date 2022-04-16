import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
export default class BoatSearch extends NavigationMixin(LightningElement) {

    isLoading = false;
    boats=[];
    error=undefined;
   
    // Connectedcallback
    connectedCallback(){
      let boatIdVal=null;
     getBoats({boatTypeId:boatIdVal}).then(result=>{
       this.error=undefined;
       this.boats=result;
     }).catch(error=>this.error=error);
    }

  // Handles loading event
  handleLoading() { }
  
  // Handles done loading event
  handleDoneLoading() { }
  
  // Handles search boat event
  // This custom event comes from the form
  searchBoats(event) {
   
    let boatId=event.detail;
   

     getBoats({boatTypeId:boatId}).then(result=>{
       this.error=undefined;
       this.boats=result;
     }).catch(error=>this.error=error);

      
   }
  
  createNewBoat() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
          objectApiName: 'Boat__c',
          actionName: 'new'
      },
  });
   }
}