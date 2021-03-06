// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/globals.scss'
import Vuex from 'vuex'
import VueThinModal from 'vue-thin-modal'
require('typeface-source-sans-pro')

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  Vue.use(VueThinModal)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'en' }

  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#10c186'
  })

  head.meta.push({
    name: 'apple-mobile-web-app-status-bar-style',
    content: 'default'
  })

  // Google Site Verification code
  if (typeof process.env.GSV_META !== 'undefined') {
    head.meta.push({
      name: 'google-site-verification',
      content: process.env.GSV_META
    })
  }

  // Fathom - beautiful, simple website analytics
  if (typeof process.env.FATHOM_SITE !== 'undefined') {
    head.script.push({
      src: "https://cdn.usefathom.com/script.js",
      site: process.env.FATHOM_SITE,
      defer: true
    })
  }

  // State
  appOptions.store = new Vuex.Store({
    state: {
      sidebarOpen: false
    },
    mutations: {
      toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
      },
      closeSidebar(state) {
        state.sidebarOpen = false
      },
      openSidebar(state) {
        state.sidebarOpen = true
      }
    }
  })
}
