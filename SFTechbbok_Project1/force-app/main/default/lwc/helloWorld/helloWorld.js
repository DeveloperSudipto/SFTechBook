import { LightningElement,api  } from 'lwc';

export default class HelloWorld extends LightningElement {
   
    handleButtonClick(event){
        this.dispatchEvent(new CustomEvent('buttonclick',{detail:'Sudipto Dutta',bubbles : true}));
    }
}