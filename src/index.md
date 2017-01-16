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

[![isserviceworkerready](images/isserviceworkerready.png)](https://jakearchibald.github.io/isserviceworkerready/)

<div class="caption">[jakearchibald.github.io/isserviceworkerready/](https://jakearchibald.github.io/isserviceworkerready/)</div>

-- bg-safari bg-fade

# What about Safari?

-- bg-offline bg-fade

# Think of the network as 
# an *enhancement*

--

![Chrome service worker internals](images/chrome-service-worker-internals.png)

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

--

<video controls width="80%">
  <source src="videos/snapwat-offline-demo.webm"/>
  <source src="videos/snapwat-offline-demo.mp4"/>
</video>

<div class="caption">[https://snapw.at](snapw.at)</div>

-- bg-buzz2 bg-fade beyond

## Beyond the browser tab
#### with
# Service Workers

<div class="credit">[Robert Mitchem](https://www.flickr.com/photos/29290711@N04/) via [Flickr](https://www.flickr.com/photos/29290711@N04/4299610660/in/photolist-7xWCsh-4p7WUc-c9SA1-4p7WUk-eekmjY-5wYXcL-eekpus-eTmXrz-qqcft4-eeeE7k-94caDx-FrAo5-c9RX3-c9Snm-nbYsTe-e3un1X-8fAVES-8fATZy-8fAVeE-8F2Rhe-8fAX5m-8fAUPU-bu5ZkE-8fxGyK-8fxGLk-8fxEvV-8fAVQN-8fAV2f-8fAUCJ-6JP7C2-c9Tti-c9T3i-c9TkX-PePL8-c9T9A-c9TfB-c9Stj-6LpjA7-c9THy-c9S9V-c9RAT-8vgbRB-8hBKqd-8uLTaQ-c9S3P-6LpjEb-72bsgt-c9SG9-c9TAV-c9SNK)</div>

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

<!--<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png) ![Firefox](images/firefox.png) ![Opera](images/opera.png)</div>-->

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

-- bg-buzz4 bg-fade beyond

## Beyond the digital world
#### with
# Physical Web

<div class="credit">[Rafael Romero](https://www.flickr.com/photos/35663018@N03/) via [Flickr](https://www.flickr.com/photos/35663018@N03/3952278050/)</div>

<!-- <div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet beta](images/sbrowser5.2-beta.png) ![Firefox](images/firefox.png)</div> -->

-- bg-buzz5 bg-fade beyond

## Beyond reality
#### with
# WebVR

<div class="credit">[Kevin Harber](https://www.flickr.com/photos/kevharb/) via [Flickr](https://www.flickr.com/photos/kevharb/3065077415/)</div>

-- bg-fade beyond

## Beyond today
#### with
# What's next 🆕

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
