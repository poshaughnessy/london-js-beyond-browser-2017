'use strict';

importScripts('/lib/sw-toolbox.js');

toolbox.precache(['/remote.html']);

toolbox.router.get('/remote.html', toolbox.cacheFirst);
