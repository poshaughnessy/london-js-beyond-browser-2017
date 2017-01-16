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

-- bg-buzz2 bg-fade

## *Beyond the browser tab:*

# Service Workers

<div class="credit">[Robert Mitchem](https://www.flickr.com/photos/29290711@N04/) via [Flickr](https://www.flickr.com/photos/29290711@N04/4299610660/in/photolist-7xWCsh-4p7WUc-c9SA1-4p7WUk-eekmjY-5wYXcL-eekpus-eTmXrz-qqcft4-eeeE7k-94caDx-FrAo5-c9RX3-c9Snm-nbYsTe-e3un1X-8fAVES-8fATZy-8fAVeE-8F2Rhe-8fAX5m-8fAUPU-bu5ZkE-8fxGyK-8fxGLk-8fxEvV-8fAVQN-8fAV2f-8fAUCJ-6JP7C2-c9Tti-c9T3i-c9TkX-PePL8-c9T9A-c9TfB-c9Stj-6LpjA7-c9THy-c9S9V-c9RAT-8vgbRB-8hBKqd-8uLTaQ-c9S3P-6LpjEb-72bsgt-c9SG9-c9TAV-c9SNK)</div>

--

<video controls height="95vh">
  <source src="videos/snapwat-offline-demo.webm"/>
  <source src="videos/snapwat-offline-demo.mp4"/>
</video>

--

<!-- Examples of service workers -->

--

<!-- Think of the *network as an enhancement* -->

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

<!--## Rendering preferences (in order) 👇-->

<!--1. SSR app shell & initial page. CSR takes over.-->
<!--1. SSR only app shell. JS fetches rest on load.-->
<!--1. SSR full page.-->
<!--1. CSR full page.-->

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

## 3⃣️ Check Lighthouse 🔦🏠

<img src="images/lighthouse-report.png" alt="Lighthouse" width="80%"/>

--

## Something about my mistake with network fallback

--

## Easy caching strategies with sw-toolbox 🔧

* “network first”, then fallback to cache

<!-- TODO add time out -->

```javascript
toolbox.router.get('/api', toolbox.networkFirst);
```

* “cache first”, then fallback to network

```javascript
toolbox.router.get('/images', toolbox.cacheFirst);
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

## *Beyond browser engagement*

# Push notifications 🙌

--

<!-- About there actually being 2 separate APIs - push and notification -->

--

<!-- Example of push notification - -->

--

<img src="images/podle-push-notification.png" alt="Podle push notification" width="25%"/>

<!-- [bit.ly/web-fundamentals-push-notifications](http://bit.ly/web-fundamentals-push-notifications) -->

<div class="corner-logos">![Chrome](images/chrome.png) ![Samsung Internet](images/sbrowser5.0.png) ![Firefox](images/firefox.png) ![Opera](images/opera.png)</div>

--

## *Beyond the digital*

# Physical Web 

--

## *Beyond reality*

# WebVR 👓

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
