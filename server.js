/**
 * Server used for local development with Bluetooth remote control.
 */
'use strict';

const express = require('express');
const faye = require('faye');

const bayeux = new faye.NodeAdapter({mount: '/ws'});
const RemoteReceiver = require('./bluetooth-remote-receiver/remoteReceiver');

const app = express();
const PORT = process.env.PORT || 9000;


const remoteListeners = {
  onWrite: function(value) {
    console.log('Value written. Publish value via web sockets');
    bayeux.getClient().publish('/remote', value);
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

const server = app.listen(PORT);

// Initialise web sockets
bayeux.attach(server);

console.log('Server started', PORT);
