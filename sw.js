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
    "url": "webpack-runtime-b1839fb168449786dd41.js"
  },
  {
    "url": "styles.455f441885e496018bc5.css"
  },
  {
    "url": "styles-8636a280cbc61d53ad10.js"
  },
  {
    "url": "framework-37df0b5633b2d42f8bc2.js"
  },
  {
    "url": "app-55e06a72731649180d28.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "21e5f6fe2ab41916c573b1aa0a4bd10b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-cc2751a409622c7dca7b.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7b9a85c95d133d4db3d8b7647d9bde82"
  },
  {
    "url": "a9a7754c-8dc4b8ed258b76827098.js"
  },
  {
    "url": "14bfd844193e4fb3cbfc42acca541fc203ab5bad-c6da8bb5b0322cc53c93.js"
  },
  {
    "url": "component---src-pages-index-js-971a1ac9684b909f39b5.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2ef603829ce453bce88fe752212bba48"
  },
  {
    "url": "adcc81df8d56bf2f1094a9dbc997e3b938396275-41714e51d5c32d2126f8.js"
  },
  {
    "url": "component---src-pages-accommodation-js-dc00fbc068d132c20e41.js"
  },
  {
    "url": "page-data/accommodation/page-data.json",
    "revision": "f3282ef4c7c6673c956de2c0eef2e90a"
  },
  {
    "url": "cb1608f2-f42423fd144c25316a22.js"
  },
  {
    "url": "component---src-pages-contact-js-a4ab896404fe818dac9f.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "5838766d7350e27047e33ad75f86d0c7"
  },
  {
    "url": "component---src-pages-location-js-8e86f82b995582b4d5fc.js"
  },
  {
    "url": "page-data/location/page-data.json",
    "revision": "1c5c688f6ffeae37f858988d4ea7d700"
  },
  {
    "url": "component---src-pages-past-conferences-js-5084265e4e6ab9419e18.js"
  },
  {
    "url": "page-data/pastConferences/page-data.json",
    "revision": "9374bcdd443dcf77f3c97036370ccd6a"
  },
  {
    "url": "component---src-pages-registration-js-79c519574aade77b8eac.js"
  },
  {
    "url": "page-data/registration/page-data.json",
    "revision": "1b56bf425ea61fd6e12c419c052d296c"
  },
  {
    "url": "component---src-pages-tourist-guide-js-481c7364ac242b951674.js"
  },
  {
    "url": "page-data/touristGuide/page-data.json",
    "revision": "fa74aa98edbf284b64cdb3f9eed1b89a"
  },
  {
    "url": "component---src-pages-travel-info-belgrade-js-931f3791629bd8ec08a3.js"
  },
  {
    "url": "page-data/travelInfoBelgrade/page-data.json",
    "revision": "0102d20321bdd6a1e95e9713394d49fc"
  },
  {
    "url": "component---src-pages-travel-info-faculty-js-21f5edf17596d3ad0621.js"
  },
  {
    "url": "page-data/travelInfoFaculty/page-data.json",
    "revision": "646e73c64952669355466a102a22a435"
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
  if (!resources || !(await caches.match(`/icgl15-test/app-55e06a72731649180d28.js`))) {
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
