List<AggregateResult> results  = [SELECT Industry, count(Id) total
    FROM Account GROUP BY Industry];
for (AggregateResult ar : results) {
    System.debug('Industry: ' + ar.get('Industry'));
    System.debug('Total Accounts: ' + ar.get('total'));
}