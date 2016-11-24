var bbt = require('beebotte');
var bclient = new bbt.Connector({
    apiKey: '8e17ef8794a4326c23756af9bec2b9aa',
    secretKey: '622ae26b60ebfa86da61530707d1704f8ee7870497e95633cb5fa45abd5fd928'
});

bclient.read({
  channel: 'ifttt',
  resource: 'action',
  limit: 5/* Retrieves last 5 records . default is 1 */
}, function(err, res) {
  // Do something here
});
