import { LightningElement } from 'lwc';
import getDetails from '@salesforce/apex/DogApi.getDetails' 
export default class NewDogApi extends LightningElement {

    imageReady=false
    loadingSpinner=false
    pictureUrl;
    handleChange(){
        this.loadingSpinner=true;
        this.imageReady=false;
        getDetails({k:'breeds'}).then(result =>{
            this.pictureUrl= JSON.parse(result).message;
            this.loadingSpinner=false
            this.imageReady=true
        });
    }
}