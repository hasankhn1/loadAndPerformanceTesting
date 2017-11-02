var loadtest = require('loadtest');

function statusCallback(error, result, latency) {
    console.log('Total Requests : ', latency.totalRequests);
    console.log('Total Time in Seconds : ', latency.totalTimeSeconds);
    console.log('Max Latency : ', latency.maxLatencyMs);
    console.log('Min Latency : ', latency.minLatencyMs);
    console.log('----');
    console.log('Request elapsed milliseconds: ', result.requestElapsed);
    console.log('Request index: ', result.requestIndex);
    console.log('----');    
}

var options = {
    url: 'http://www.google.com', //give any url 
    maxRequests: 500, //max number of requests to test
    concurrency : 100,  //max number of concurrency for load testing
    statusCallback: statusCallback //callback which call on every sucessfull request
};

loadtest.loadTest(options, function(error) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});