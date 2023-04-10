public with sharing class DogApi {
        @AuraEnabled
        public static string getDetails ( string k){             Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://dog.ceo/api/'+k+'/image/random');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        string acc = response.getBody();  
        return acc;                
             
        }            
         
    }
    