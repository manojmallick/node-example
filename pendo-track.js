var https = require('https');

var PENDO_INTEGRATION_KEY = '2f95bec3-e092-40ab-aaf0-f6aaa8456901';
var PENDO_DATA_HOST = 'data.pendo.io';

function track(event, visitorId, accountId, properties) {
  var payload = JSON.stringify({
    type: 'track',
    event: event,
    visitorId: visitorId || 'system',
    accountId: accountId || 'system',
    timestamp: Date.now(),
    properties: properties || {}
  });

  var options = {
    hostname: PENDO_DATA_HOST,
    path: '/data/track',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-pendo-integration-key': PENDO_INTEGRATION_KEY,
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  try {
    var req = https.request(options, function (res) {
      // Consume response to free up memory
      res.resume();
    });
    req.on('error', function (err) {
      console.error('Pendo track error:', err.message);
    });
    req.write(payload);
    req.end();
  } catch (err) {
    console.error('Pendo track error:', err.message);
  }
}

module.exports = { track: track };
