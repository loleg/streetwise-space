<template>
  <div class="gemeindescan" :class="{'browser--open' : this.browserOpen}">
    <a class="title" @click="sidebarOpen = true">Gemeindescan</a>
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
        return this.sidebarOpen = true
      }
      // Navigate to selected scan
      this.frameSrc = node.url
      this.frameTitle = node.title
      // Close the sidebar again if on mobile
      if (!this.isWideScreen()) {
        this.sidebarOpen = false
        console.log('Closing sidebar')
      }
    },
    isWideScreen() {
      this.wideScreen = !(window.getComputedStyle(document.body, ':before').content == '"small"')
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
  }
}
</script>

<style lang="scss" scoped>

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
  margin: 0px; padding: 0px;
  list-style: none;
}

.snapshotlist {
  max-height: 600px;
  overflow-y: auto;

  a {
    color: #555;
    text-decoration: none;
  }
}

.snapshotlist li {
  background-color: #f8f8f8;
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

</style>
