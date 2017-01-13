# "Beyond the Browser: PWAs, WebVR & Physical Web" - London JavaScript

My slides for [London JavaScript, Jan 2017](https://www.meetup.com/London-JavaScript-Community/events/235924973/). 
Generated using [cleaver](https://github.com/jdan/cleaver).

## To view the slides

Check them out at: [poshaughnessy.github.io/london-js-beyond-browser-2017/](https://poshaughnessy.github.io/london-js-beyond-browser-2017/)

Use arrow keys or the arrow buttons to move left/right.


## To run locally

```
npm install
npm start
```


## To use the Bluetooth remote control

Load up the Remote page on a Web Bluetooth supporting browser, e.g. Chrome for Android, on the device you want to use 
as a presentation remote: http://localhost:9000/remote.html

Press Connect and (as long as you have the Node server running and Bluetooth enabled on both devices) you should see
a device option called 'Remote Receiver'. Select that, (and just for now: wait until you see it's connected from the 
console), then you can use the buttons to send commands!


## To deploy (for Peter's reference)

```
./deploy.sh
```
