# chromecast-videoplayer-web-wrapper
A web wrapper for the Chromecast video player for testing assets

## What is this project for?

* Are you a Chromecast developer frustrated by your content server not providing the CORS headers during development phase?
* Are you stuck with this CORS header requirement in your Chromecast receiver app?


With this web wrapper you can test case your streams using the Chrome browser on your desktop without the CORS issues.

#### Run:

`npm install express`

`node server.js`

### How to open Chrome without CORS Security?

By disabling same origin policy:

#### On MacOSX:

from command line:

`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security`

#### On Windows:

Just clone the shortcut for Chrome you have on your desktop, and then in the shortcut properties add the parameter "--disable-web-security" at the end of chrome executable path.

e.g
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security

Or just download the shortcut file [here](https://github.com/fab1o/chromecast-videoplayer-web-wrapper/blob/master/chrome-shortcut/Chrome-No-Security.lnk)


#### On Ubuntu:

from command-line:

`chromium-browser --disable-web-security`


