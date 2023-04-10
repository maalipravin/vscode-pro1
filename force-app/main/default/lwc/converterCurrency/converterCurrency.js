import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import getDetails from '@salesforce/apex/currencyconverter.getDetails'
export default class CurrencyConverterApp extends LightningElement {
    
  countryList = countryCodeList
   countryFrom = "USD"
  countryTo = "AUD"
  amount=''
  output

    handleChange(event){
        const {name, value} = event.target
        this[name] = value
    }
    submitHandler(event){
      event.preventDefault()
      this.convert()
      
    }
    
  convert(){
    console.log(this.countryFrom)
  getDetails({ct:this.countryFrom, cf:this.countryTo}).then(result =>{
    
    var obj = JSON.parse(result);
    this.output = (Number(this.amount)*obj.result).toFixed(2)
    console.log(this.output)
    console.log(obj)

    });
    }
}