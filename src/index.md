title: Beyond the Browser
output: public/index.html
theme: peter-theme
controls: false

-- bg-buzz1 bg-fade

# Beyond the Browser

## PWAs, WebVR & Physical Web

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>

<div class="credit">[Carlos](https://www.flickr.com/photos/armadillo444/) via [Flickr](https://www.flickr.com/photos/armadillo444/2901378790)</div>

<!-- TODO include later? -->
<!--![Samsung Internet icon on homescreen](images/samsung-internet-home.png)-->
<!--![Snapwat](images/snapwat.png)-->


-- bg-2017

<div class="credit">[pixabay](https://pixabay.com/en/new-year-s-eve-fireworks-2017-1664737/)</div>

-- bg-iphone-launch

<div class="credit">[Wikimedia](https://commons.wikimedia.org/wiki/File:Steve_Jobs_presents_iPhone.jpg)</div>

--

![StatCounter mobile vs desktop graph](images/internet_usage_2009_2016_ww.png)

--

![xkcd cartoon, Mac/PC](images/xkcd_mac_pc.png)

<div class="credit">[xkcd](http://xkcd.com/934/)</div>

--

![comScore time spent](images/comscore-time-spent.png)

--

![comScore time spent](images/comscore-app-downloads.png)

<div class="credit">[comScore](http://www.comscore.com/Insights/Presentations-and-Whitepapers/2016/The-2016-US-Mobile-App-Report) via [recode.net](http://www.recode.net/2016/9/16/12933780/average-app-downloads-per-month-comscore)</div>

--

![Address book access](images/address-book.png)

<div class="credit">[The Next Web](http://thenextweb.com/mobile/2012/02/11/following-paths-contact-fiasco-instagram-silently-adds-a-contact-list-access-prompt/)</div>

--

![comScore mobile web reach](images/comscore-mobile-web-crop.png)

-- bg-best-of-both bg-fade

<div class="left">
<h2> Best of web 🌎</h2>
<ul>
<li>Multi-platform</li>
<li>Frictionless</li>
<li>Discoverable</li>
<li>Open</li>
</ul>
</div>

<div class="right">
<h2> Best of apps  📱</h2>
<ul>
<li>Add to Home Screen</li>
<li>Offline & instant load</li>
<li>Push notifications</li>
<li>Hardware integration</li>
</ul>
</div>

<!-- > &ldquo;PWAs combine the best of web & the best of apps&rdquo; 💯-->

<div class="credit">[Morris Quality Bakers](http://www.morrisqualitybakers.co.uk/goods/hovis-best-of-both-thick/)</div>

-- bg-pwas

<!-- > &ldquo;PWAs are all about removing friction&rdquo; 🏎-->

--

![Web nearing parity with native](images/web-native-parity.png)

<div class="credit">[What Comes Next For The Web? - Paul Kinlan](https://www.youtube.com/watch?v=YJwrBbze_Ec)</div>

-- bg-white

[![Browser representation at PWA Dev Summit](images/pwa-dev-summit.png)](https://twitter.com/nicoinch/status/745216197004754944)

-- img-with-caption

[![pwa.rocks](images/pwa-rocks.png)](https://pwa.rocks)

<div class="caption">[pwa.rocks](https://pwa.rocks)</div>

-- img-with-caption

[![outweb.io](images/outweb.png)](https://outweb.io)

<div class="caption">[outweb.io](https://outweb.io)</div>

--

![Twitter service worker](images/twitter-sw.png)

-- img-with-caption

[![Inspire Hub](images/inspirehub.jpg)](https://inspirehub.ihubapp.org/stories/41314)

<div class="caption">[&ldquo;PWA Technology helped my community following a natural disaster&rdquo; - InspireHub](https://inspirehub.ihubapp.org/stories/41314)</div>

-- bg-buzz2 bg-fade beyond

## Beyond the browser tab
#### with
# Service Workers

<div class="credit">[Robert Mitchem](https://www.flickr.com/photos/29290711@N04/) via [Flickr](https://www.flickr.com/photos/29290711@N04/4299610660/in/photolist-7xWCsh-4p7WUc-c9SA1-4p7WUk-eekmjY-5wYXcL-eekpus-eTmXrz-qqcft4-eeeE7k-94caDx-FrAo5-c9RX3-c9Snm-nbYsTe-e3un1X-8fAVES-8fATZy-8fAVeE-8F2Rhe-8fAX5m-8fAUPU-bu5ZkE-8fxGyK-8fxGLk-8fxEvV-8fAVQN-8fAV2f-8fAUCJ-6JP7C2-c9Tti-c9T3i-c9TkX-PePL8-c9T9A-c9TfB-c9Stj-6LpjA7-c9THy-c9S9V-c9RAT-8vgbRB-8hBKqd-8uLTaQ-c9S3P-6LpjEb-72bsgt-c9SG9-c9TAV-c9SNK)</div>

--

<video controls width="80%">
  <source src="videos/snapwat-offline-demo.webm"/>
  <source src="videos/snapwat-offline-demo.mp4"/>
</video>

<div class="caption">[https://snapw.at](snapw.at)</div>

-- img-with-caption

[![isserviceworkerready](images/isserviceworkerready.png)](https://jakearchibald.github.io/isserviceworkerready/)

<div class="caption">[jakearchibald.github.io/isserviceworkerready/](https://jakearchibald.github.io/isserviceworkerready/)</div>

-- bg-safari bg-fade

# What about Safari?

-- bg-offline bg-fade

# Think of the network as 
# an *enhancement*

--

![Chrome service worker internals](images/chrome-service-worker-internals.png)

--

```javascript
navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    console.log('Registration successful', registration.scope);
  })
  .catch(function(error) {
    console.log('Failed - service worker not installed', error);
  });
```

--

```javascript
// service-worker.js

// NB. URLs, not filepaths!
var RESOURCES = ['/images/logo.png', ...];

self.addEventListener('install', function(event) {
  function onInstall () {
    return caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(RESOURCES);
      });
  }
);
```

--

```javascript
self.addEventListener('install', function(event) {
  // Installed. Waits for clients using old SWs to be closed 
  // and/or `event.waitUntil()`. Unless `skipWaiting()`.
});

self.addEventListener('activate', function(event) {
  // Activated. Good time to clear out old caches.
});

self.addEventListener('fetch', function(event) {
  // Intercepted a fetch!
  event.respondWith(new Response('Hello world!'));
});
```

<div class="caption">[Using Service Workers - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)</div>

--

## Don't precache too much on install

```javascript
// App shell resources
var RESOURCES = [
  '/js/app.js',
  '/css/styles.css',
  '/images/logo.png', 
  ...
];

...
cache.addAll(RESOURCES);
```

<!--## Rendering preferences (in order) 👇-->

<!--1. SSR app shell & initial page. CSR takes over.-->
<!--1. SSR only app shell. JS fetches rest on load.-->
<!--1. SSR full page.-->
<!--1. CSR full page.-->

--

## Check Lighthouse

<img src="images/lighthouse-report.png" alt="Lighthouse" width="80%"/>

--

## Be wary of waiting for fetch fail

```javascript
self.addEventListener('fetch', function(event) {

  var responsePromise = fetch(event.request)
    .then(function(response) {
      // Cache response if appropriate here...      
      return response;
    })
    .catch(function(err) {
      // Fetch failed - maybe after a while!
      return caches.match(event.request);
    });

  event.respondWith(responsePromise);
});
```

--

## sw-toolbox

* “network first”, then fallback to cache

```javascript
importScripts('/sw-toolbox/sw-toolbox.js');

toolbox.router.get('/images/*', toolbox.networkFirst, {
	networkTimeoutSeconds: 10
});
```

--

* “cache first”, then fallback to network

```javascript
toolbox.router.get('/images/*', toolbox.cacheFirst);
```

--

* “fastest” — serve whichever comes back first

```javascript
toolbox.router.get('/profile', toolbox.fastest);
```
<div></div>
* “network only”
* “cache only”

--

## &lt;a download&gt; requests bypass SW

<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=468227#c13"><img src="images/chromium-bug.png" alt="Chromium bug" width="75%"/></a>

<!--<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png)</div>-->

-- bg-buzz3 bg-fade beyond

## Beyond browser engagement
#### with
# Push Notifications

<div class="credit">[Brandon Serna](https://www.flickr.com/photos/54732806@N03/) via [Flickr](https://www.flickr.com/photos/54732806@N03/5378370232/)</div>

<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png) ![Firefox](images/firefox.png)</div>

-- img-with-caption

![Guardian live election web push notifications](images/guardian-push-notifications.jpg)

<div class="caption">[&ldquo;Building the Guardian’s Live Elections Notifications&rdquo;](https://medium.com/the-guardian-mobile-innovation-lab/building-the-guardians-live-elections-notifications-87bafbcf510)</div>

-- img-with-caption

![Podle push notification](images/podle-push-notification.png)

<div class="caption">[podle.audio](https://podle.audio)</div>

<!-- [bit.ly/web-fundamentals-push-notifications](http://bit.ly/web-fundamentals-push-notifications) -->

--

![Podle push debugging](images/podle-push-debug.png)

--

![Podle push debugging](images/podle-push-debug2.png)

-- img-with-caption

![Push notification anti-pattern](images/push-bad.jpg)

<div class="caption">*Please* keep it [timely, relevant and precise!](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)</div>

-- bg-buzz4 bg-fade beyond

## Beyond the digital world
#### with
# Physical Web
#### &
# Web Bluetooth

<div class="credit">[Rafael Romero](https://www.flickr.com/photos/35663018@N03/) via [Flickr](https://www.flickr.com/photos/35663018@N03/3952278050/)</div>

<!-- <div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet beta](images/sbrowser5.2-beta.png) ![Firefox](images/firefox.png)</div> -->

--

![Physical Web](images/physical-web-google.png)

<div class="corner-logos">![Chrome](images/chrome.png)</div>

<!-- Not to be confused with Nearby... -->

--

![Project Magnet](images/project-magnet.png)

<div class="corner-logos grey-out">![Firefox](images/firefox.png)</div>

--

![CloseBy](images/closeby.png)

<div class="corner-logos">![Samsung Internet beta](images/sbrowser5.2-beta.png)</div>

-- img-with-caption

![Beacon toy app](images/beacon-toy-app.png)

<div class="caption">[Beacon Toy (Android)](https://play.google.com/store/apps/details?id=com.uriio)</div>

--

![CloseBy](images/closeby-notification.png)

-- 

## Web Bluetooth

```javascript
navigator.bluetooth.requestDevice({
  filters: [{
    name: 'SomeAmazingRobot'
  }],
  optionalServices: ['battery_service']
})
...
```

<div class="corner-logos">![Chrome](images/chrome.png)</div>

--

![Bluetooth pairing prompt](images/bluetooth-pairing-prompt.png)

--

```javascript
  ...
  .then(device => device.gatt.connect())
  .then(server => server.getPrimaryService('battery_service'))
  .then(service => service.getCharacteristic('battery_level'))
```

--

```javascript
  ...
  .then(characteristic => {
    // Read battery level
    return characteristic.readValue();
  })
  .then(value => {
    var batteryLevel = value.getUint8(0);
    console.log('Battery level', batteryLevel);
  });
```

<div class="caption">[bit.ly/chrome-bluetooth-guide](http://bit.ly/chrome-bluetooth-guide)</div>

--

<video controls height="75%">
  <source src="videos/webdrone-v1-1.webm"/>
  <source src="videos/webdrone-v1-1.mp4"/>
</video>

<div class="caption">[bit.ly/web-bluetooth-drone](http://bit.ly/web-bluetooth-drone)</div>

--

## How I'm controlling these slides

* [Bleno](https://github.com/sandeepmistry/bleno) combined with Web Sockets *(peripheral - Mac)*
* Web Bluetooth *(central - Chrome for Android)*

-- img-with-caption

![puck.js](images/puckjs.jpg)

<div class="caption">[puck.js](http://www.puck-js.com/)</div>

<!-- TODO if time replace with my video! https://twitter.com/poshaughnessy/status/808065469001375744 -->

-- bg-buzz5 bg-fade beyond

## Beyond reality
#### with
# WebVR

<div class="credit">[Kevin Harber](https://www.flickr.com/photos/kevharb/) via [Flickr](https://www.flickr.com/photos/kevharb/3065077415/)</div>

-- iframe

<!-- TODO replace with local copy if time -->

<iframe width="90%" height="90%" style="margin-top:5vh" src="https://www.youtube.com/embed/mN9G6lQKVsI" frameborder="0" allowfullscreen></iframe>

-- img-with-caption

![A-Frame site](images/aframe-site.png)

#### [A-Frame](https://aframe.io)

<!-- Remember to say it includes the polyfill for Cardboard -->

-- bg-lights-of-city

```html
<script src="aframe.js"></script>
```

-- bg-lights-of-city

```html
<a-scene>
  <a-sphere position="0 1.25 -1" radius="1.25" 
            color="#EF2D5E"></a-sphere>
  <a-box position="-1 0.5 1" rotation="0 45 0" 
         color="#4CC3D9"></a-box>
  <a-cylinder position="1 0.75 1" radius="0.5" 
              color="#FFC65D"></a-cylinder>
  <a-plane rotation="-90 0 0" width="4" height="4" 
            color="#7BC8A4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```

-- iframe

<iframe src="demos/aframe-basic/index.html" scrolling="no" width="90%" height="90%" style="margin-top:5vh"></iframe>

--

## Browser enthusiasm (so far)

![WebVR browser interest](images/webvr-browser-enthusiasm.png)

<div class="caption">[iswebvrready.org/](https://iswebvrready.org/)</div>

-- img-with-caption

![Audience for Ada's WebVR talk](images/ada-webvr-crowd.jpg)

<div class="caption">[&ldquo;Wow that was some night in VR!&rdquo; - Ada Rose Edwards](https://medium.com/samsung-internet-dev/wow-that-was-some-night-in-vr-ba091be38794)</div>

<!-- And you can combine with WebRTC... -->

-- bg-fade beyond

## And beyond today...

--

## Background sync ⛰

```javascript
navigator.serviceWorker.ready.then(function(reg) {
    return reg.sync.register('syncTest');
  }).then(function() {
    log('Sync registered');
  });
```

<div class="corner-logos">![Chrome](images/chrome.png)</div>

--

## Foreign fetch ✈️

```
Link: </service-worker.js>; rel="serviceworker"
Origin-Trial: token_obtained_from_signup
```

[bit.ly/foreign-fetch](http://bit.ly/foreign-fetch)

<div class="corner-logos">![Chrome](images/chrome.png)</div>

-- bg-buzz6 bg-fade

# Beyond the *Browser*

<div class="credit">[payayita](https://www.flickr.com/photos/payayita/) via [Flickr](https://www.flickr.com/photos/payayita/1129150332/)</div>

-- bg-buzz-bye bg-fade

# Thanks! 🙏

## [@poshaughnessy](https://twitter.com/poshaughnessy)

## [@samsunginternet](https://twitter.com/samsunginternet)

<div class="credit">[Bridgette Wynn](https://www.flickr.com/photos/brwynn/) via [Flickr](https://www.flickr.com/photos/brwynn/4870133844/in/photolist-8qmH7U-a27zM3-7h1ntQ-FMpJ5V-8pVgfS-6fQV4k-8offGv-dLmtz1-cfnyyj-9pUG6t-7Q6mc8-dz82Ks-8AQuwa-95Zimm-8rDw4L-8AVpKL-9dhs6t-6FsRjV-8rDyvs-9qam69-8dBd7t-6FsRj6-92qxGP-4nkESf-8A1fhL-98ZQP6-bWpBQ8-95WfNF-6FwY8w-b7JpX2-ybecj-95WfRH-8efWsX-bRjj8e-9nesie-6FwY6N-oNMUh-a7CFuW-8AUEyj-qhHEZy-9cGQP9-qhGZcf-ortUC5-8C5CKb-7SynPk-8rDus3-95w2dP-8wsvSY-fFat1y-8KRKhJ)</div>
