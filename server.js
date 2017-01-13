/**
 * Server used for local development with Bluetooth remote control.
 */
'use strict';

const express = require('express');
const RemoteReceiver = require('./bluetooth-remote-receiver/remoteReceiver');
const PORT = process.env.PORT || 9000;

const app = express();

const remoteListeners = {
  onWrite: function(value) {
    // TODO use websockets, change page without refresh
    console.log('onWrite!', value);
    switch (value) {
      case 1:
        console.log('left');
        break;
      case 2:
        console.log('right');
        break;
      default:
        console.log('Unrecognised remote command');
        break;
    }
  }
};

const remoteReceiver = new RemoteReceiver(remoteListeners);

app.use( '/', express.static('public') );

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT);

console.log('Server started', PORT);
