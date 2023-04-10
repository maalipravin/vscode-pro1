public with sharing class currencyconverter {
    @AuraEnabled
    public static string getDetails (string ct,string cf){
    Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.exchangerate.host/convert?from='+ct+'&to='+cf);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        string acc = response.getBody();  
        return acc;                
             
        }           
    
}