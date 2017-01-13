var bleno = require('bleno');
var RemoteService = require('./remoteReceiverService');

var RemoteReceiver = function(externalListeners) {

  var listeners = {
    onWrite: function(value) {
      console.log('onWrite', value);
      if (externalListeners && typeof externalListeners.onWrite === 'function') {
        externalListeners.onWrite(value);
      }
    }
  }

  var primaryService = new RemoteService(listeners);

  bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {
      bleno.startAdvertising('Remote', [primaryService.uuid]);
    } else {
      bleno.stopAdvertising();
    }
  });

  bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
      bleno.setServices([primaryService], function(error){
        console.log('setServices: '  + (error ? 'error ' + error : 'success'));
      });
    }
  });

};

module.exports = RemoteReceiver;