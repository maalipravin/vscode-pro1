import { LightningElement,wire } from 'lwc';
import getDetails from '@salesforce/apex/currency.getDetails'
export default class CalculatorSample extends LightningElement {

    visibleRecords
    @wire(getDetails)
    wired({error,data}){
        if(data){
            this.visibleRecords = data
            console.log(this.visibleRecords)
        }
        if(error){
            console.log(error)
        }
    }
}



    

