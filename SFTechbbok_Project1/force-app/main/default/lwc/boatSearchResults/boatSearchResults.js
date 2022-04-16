import { LightningElement,api, wire,track } from 'lwc';
import getBoatsData from '@salesforce/apex/BoatDataService.getBoatsData';
import updateBoatList from '@salesforce/apex/BoatDataService.updateBoatList';
import { refreshApex } from '@salesforce/apex';
import {showToastEvent} from 'lightning/platformShowToastEvent';

const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Length', fieldName: 'Length__c', editable: true },
    { label: 'Price', fieldName: 'Price__c', type: 'currency', editable: true },
    { label: 'Description', fieldName: 'Description__c', editable: true },
];
const SUCCESS_VARIANT='success';
const SUCCESS_TITLE='Success';
const MESSAGE_SHIP_IT='Ship It!';
export default class BoatSearchResults extends LightningElement {
    @api boats;
    @track error;
    boatRecords=[];
    columns = columns;
    draftValues=[];
    @wire(getBoatsData,{boats:'$boats'})boatRecords;
    ;
    
    handleSave(event){
        this.draftValues = event.detail.draftValues;
        console.log('The draftValues are *** '+this.draftValues.length);
        console.log('The Id of the first data is '+this.draftValues[0].Id);
        updateBoatList({data:this.draftValues}).then(result=>{
           
            refreshApex(this.boatRecords);
        }).catch(error=>{
            alert('ERROR'+error[0].getMessage());
            
        });
    }

    showNotification(){
        const event = new ShowToastEvent({
            title:SUCCESS_TITLE,
            message: MESSAGE_SHIP_IT,
            variant:SUCCESS_VARIANT
        });
        this.dispatchEvent(event);
    }
}