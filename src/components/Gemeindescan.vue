<template>
  <div class="gemeindescan" :class="{'browser--open' : this.browserOpen}">
    <div class="title">Gemeindescan</div>
    <button class="verticaltab" title="Gemeinden"
      v-show="!this.wideScreen && !this.sidebarOpen"
      @click="this.toggleSidebar">...</button>
    <div class="container">
      <nav class="sidebar" :class="{'sidebar--open' : this.sidebarOpen}">
        <ul class="snapshotlist">
          <a :href="node.url" @click="navigateTo(node, $event)"
              v-for="node in sections" :key="node.title">
              <li :class="frameSrc==node.url ? 'active' : ''">
                {{node.title}}
              </li>
          </a>
        </ul>
      </nav>
      <div class="main" :class="{'wideScreen' : this.wideScreen}">
        <iframe :title="frameTitle" :src="frameSrc"></iframe>
        <a class="fullscreen button"
          :href="frameSrc" target="_blank">
          Vollbild</a>
        <div class="location">
          {{ frameTitle }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const campaigns = require('../../data/campaigns.json');

export default {
  props: {
    campaign: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      wideScreen: true,
      sidebarOpen: true,
      browserOpen: true,
      sections: [],
      frameTitle: "",
      frameSrc: ""
    }
  },
  methods: {
    navigateTo(node, e) {
      e.preventDefault()
      if (!this.sidebarOpen) {
        return this.toggleSidebar()
      }
      // Navigate to selected scan
      this.frameSrc = node.url
      this.frameTitle = node.title
      // Close the sidebar again if on mobile
      if (!this.isWideScreen() && this.sidebarOpen) {
        this.toggleSidebar()
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    windowSize() {
      let windowWidth = window.innerWidth
      if (windowWidth < 550) return 'xs'
      if (windowWidth > 549 && windowWidth < 1200) return 'md'
      if (windowWidth > 1199) return 'lg'
    },
    isWideScreen() {
      this.wideScreen = (this.windowSize() !== 'xs')
      return this.wideScreen
    }
  },
  beforeMount () {
    this.isWideScreen()
  },
  mounted() {
    // console.log('Loading: ' + this.campaign);
    this.sections = campaigns[this.campaign];
    // console.log(this.sections);
    if (this.wideScreen) {
      // Navigate to first scan on desktop
      this.frameTitle = this.sections[0]['title'];
      this.frameSrc = this.sections[0]['url'];
    }
    window.addEventListener('resize', this.isWideScreen)
  },
  unmounted() {
    window.removeEventListener('resize', this.isWideScreen)
  }
}
</script>

<style lang="scss" scoped>

.gemeindescan {
  // Stretch window slightly
  margin-left: -20px;
  margin-right: -20px;
}

.title {
  display: block;
  background: url(../assets/img/gemeindescan-logo.svg) no-repeat;
  background-size: cover;
  width: 200px;
  height: 50px;
  font-size: 0px;
  margin-left: 10px;
  margin-bottom: 20px;
}

.verticaltab {
  opacity: 0.7;
  display: block;
  font-size: 0px;
  background: repeating-linear-gradient(45deg, #bbb, #bbb 10px, #eee 10px, #eee 20px);
  width: 23px;
  height: 200px;
  position: absolute;
  top: 100px;
  left: 0px;
  border: 1px solid #aaa;
  border-radius: 6px;
  border-left: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
}

.sidebar {
  height: 600px;
  background: white;
  min-width: 300px;
  position: fixed;
  transition: background .15s ease-in-out, transform .15s ease-in-out, border-color .15s linear;
  z-index: 9;
  will-change: transform;
  transform: translateX(-300px);
  opacity: 0;
  border-right: 1px solid transparent;
  overflow: auto;

  @include respond-above(sm) {
    transform: translateX(0);
    opacity: 1;
  }

  &--open {
    transform: translateX(0);
    opacity: 1;
  }
}

iframe {
  width: 100%;
  height: 600px;
}

.fullscreen {
  float: left;
}

.location {
  float: right;
  font-size: 125%;
  font-weight: bold;
}

.container {
  display: flex;
  flex-direction: row;
  width: 100%;

  .main {
    width: 100%;

    &.wideScreen {
      margin-left: 300px;
      overflow: hidden;
    }
  }
}

ul.snapshotlist, .snapshotlist li {
  margin: 0px; padding: 0px; list-style: none;
}

.snapshotlist {
  max-height: 600px;
  overflow-y: auto;

  a {
    color: #555;
    text-decoration: none;

    &:nth-child(even) li { background-color: #e4e4e4; }
    &:nth-child(odd)  li { background-color: #f0f0f0; }
  }

  li {
    border-radius: 4px;
    padding: 20px 15px;
    margin: 1px;
    overflow: hidden;

    &:hover {
      background-color: #10c186;
    }

    &.active {
      background-color: #d0d0d0;
      font-weight: bold;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
}
</style>
