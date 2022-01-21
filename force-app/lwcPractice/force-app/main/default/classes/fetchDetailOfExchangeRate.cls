public with sharing class fetchDetailOfExchangeRate {
  @AuraEnabled
  public static Map<String, Object> getCalloutResponseContents(String mainUrl) {
    // Instantiate a new http object
    Http http = new Http();
    // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
    HttpRequest req = new HttpRequest();
    req.setEndpoint(mainUrl);
    req.setMethod('GET');
    // Send the request, and return a response
    HttpResponse res = http.send(req);
    System.debug('response-->: ' + res.getBody());
    // string output = res.getBody();
    Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(
      res.getBody()
    );
    // Map<String,Object> results = (Map<String,Object>)JSON.deserializeUntyped(JSON.deserializeUntyped((string)output));
    System.debug('results ' + results);
    return results;
  }
}
