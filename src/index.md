title: Beyond the Browser
output: public/index.html
theme: peter-theme
controls: false

-- bg-rocket bg-fade

# Beyond the Browser

## PWAs, WebVR & Physical Web

<div class="contact">
  <p>Peter O'Shaughnessy</p>
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
</div>

<div class="credit">[flickr.com/photos/armadillo444/](https://www.flickr.com/photos/armadillo444/2901378790)</div>

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

> &ldquo;PWAs combine the best of web & the best of native&rdquo; 💯

--

## Best of web 🌎

* Multi-platform
* Frictionless
* Discoverable
* Accessible

--

## Best of native  📱

* Add to Home Screen
* Offline
* Instant load
* Push notifications

--

> &ldquo;PWAs are all about removing friction&rdquo; 🏎

--

# Service Workers 🚓

--

## 1⃣️ Don't cache too much on install! ⚖

```javascript
var RESOURCES = ['/images/emojione/1f600.svg', ...];

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

## 2⃣️ URLs, not files 🗂

```javascript
const RESOURCES = [
  '/',
  ...
];
...
cache.addAll( RESOURCES );
```

--

## 3⃣️ Remember to check Lighthouse 🔦🏠

<img src="images/lighthouse-report.png" alt="Lighthouse" width="80%"/>

--

## Rendering preferences (in order) 👇

1. SSR app shell & initial page. CSR takes over.
1. SSR only app shell. JS fetches rest on load.
1. SSR full page.
1. CSR full page.

--

## Easy caching strategies with sw-toolbox 🔧

* “cache first”, then fallback to network

```javascript
toolbox.router.get('/images', toolbox.cacheFirst);
```

--

* “network first”, then fallback to cache

```javascript
toolbox.router.get('/api', toolbox.networkFirst);
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

## 3⃣️ &lt;a download&gt; requests bypass SW 🙉

<a href="https://bugs.chromium.org/p/chromium/issues/detail?id=468227#c13"><img src="images/chromium-bug.png" alt="Chromium bug" width="75%"/></a>

<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png)</div>

--

## Push notifications 🙌

<img src="images/podle-push-notification.png" alt="Podle push notification" width="25%"/>

<!-- [bit.ly/web-fundamentals-push-notifications](http://bit.ly/web-fundamentals-push-notifications) -->

<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png) ![Firefox](images/firefox.png) ![Opera](images/opera.png)</div>

--

# What's next? 🆕

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

--

## 🔗 [snapw.at](https://snapw.at)

## 📃  [github.com/SamsungInternet/snapwat](https://github.com/SamsungInternet/snapwat)

--

# Thanks! 🙏

<div class="contact">
  <p>[@poshaughnessy](https://twitter.com/poshaughnessy)</p>
  <p>[@samsunginternet](https://twitter.com/samsunginternet)</p>
  <br/>
  <p>[github.com/samsunginternet](https://github.com/samsunginternet)</p>
  <p>[medium.com/samsung-internet-dev](https://medium.com/samsung-internet-dev)</p>
</div>
