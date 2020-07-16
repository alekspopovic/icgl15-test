/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2697753cb43c9ed8b292.js"
  },
  {
    "url": "styles.e6a2a61309bc41918e19.css"
  },
  {
    "url": "styles-8636a280cbc61d53ad10.js"
  },
  {
    "url": "framework-81988deefeb7ee5336d1.js"
  },
  {
    "url": "app-498a845c3eb1ff694ec6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7dadfdc333e4567ad04e2ee04802afbb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-84df01cf41babe440d0c.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5d91d24a63ef1c8fe7376c15bdb12663"
  },
  {
    "url": "a9a7754c-8dc4b8ed258b76827098.js"
  },
  {
    "url": "8f8121832e054591c08b877abffc7185a909beed-d1321975dde2603f067f.js"
  },
  {
    "url": "component---src-pages-index-js-34b05686180f9b5712de.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2ef603829ce453bce88fe752212bba48"
  },
  {
    "url": "bbad206c5fd9b245cc343989af99bf6e9a70bc28-6c41476ca0324b3ef941.js"
  },
  {
    "url": "component---src-pages-accommodation-js-aa75ee9e8558a7f50f88.js"
  },
  {
    "url": "page-data/accommodation/page-data.json",
    "revision": "f3282ef4c7c6673c956de2c0eef2e90a"
  },
  {
    "url": "component---src-pages-contact-js-bacf901b0770bd2747ae.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "5838766d7350e27047e33ad75f86d0c7"
  },
  {
    "url": "component---src-pages-location-js-d529b72d72f462a83767.js"
  },
  {
    "url": "page-data/location/page-data.json",
    "revision": "1c5c688f6ffeae37f858988d4ea7d700"
  },
  {
    "url": "component---src-pages-past-conferences-js-06e3dab947575b709fff.js"
  },
  {
    "url": "page-data/pastConferences/page-data.json",
    "revision": "9374bcdd443dcf77f3c97036370ccd6a"
  },
  {
    "url": "component---src-pages-registration-js-814397b900d9554870a3.js"
  },
  {
    "url": "page-data/registration/page-data.json",
    "revision": "1b56bf425ea61fd6e12c419c052d296c"
  },
  {
    "url": "component---src-pages-tourist-guide-js-492f3ae4fb72ac97542a.js"
  },
  {
    "url": "page-data/touristGuide/page-data.json",
    "revision": "fa74aa98edbf284b64cdb3f9eed1b89a"
  },
  {
    "url": "component---src-pages-travel-info-js-669122714976efd48ca0.js"
  },
  {
    "url": "page-data/travelInfo/page-data.json",
    "revision": "4a3e0641daaab2184e94d9217ae71f9b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6c011814c0f2c8602e5b8dc676e41912"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/icgl15-test`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/icgl15-test/app-498a845c3eb1ff694ec6.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/icgl15-test/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
