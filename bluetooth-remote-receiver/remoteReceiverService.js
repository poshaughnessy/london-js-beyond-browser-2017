var util = require('util');

var bleno = require('bleno');

var BlenoPrimaryService = bleno.PrimaryService;

var RemoteCharacteristic = require('./remoteReceiverCharacteristic');

function RemoteService(listeners) {
  RemoteService.super_.call(this, {
    uuid: 'B1BF',
    characteristics: [
      new RemoteCharacteristic(listeners)
    ]
  });
}

util.inherits(RemoteService, BlenoPrimaryService);

module.exports = RemoteService;
