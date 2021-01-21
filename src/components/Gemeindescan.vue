<template>
  <div class="gemeindescan" :class="{'browser--open' : this.browserOpen}">
    <a class="title" href="https://gemeindescan.ch" target="_blank">Gemeindescan</a>
    <div class="container">
      <nav class="sidebar">
        <ul class="snapshotlist">
          <a :href="node.url" @click="navigateTo(node, $event)"
              v-for="node in sections" :key="node.title">
              <li :class="frameSrc==node.url ? 'active' : ''">
                {{node.title}}
              </li>
          </a>
        </ul>
      </nav>
      <div class="main">
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
      browserOpen: true,
      sections: [],
      frameTitle: "",
      frameSrc: "",
    }
  },
  methods: {
    navigateTo(node, e) {
      e.preventDefault()
      this.frameSrc = node.url
      this.frameTitle = node.title
    },
    checkAnchors(slug, item) {
      if (slug == item) {
        return true
      }
    },
    stateFromSize: function() {
      if (window.getComputedStyle(document.body, ':before').content == '"small"') {
        this.$store.commit('closeSidebar')
      } else {
        this.$store.commit('openSidebar')
      }
    },
    sidebarScroll: function() {
      let mainNavLinks = document.querySelectorAll('.topic.active + ul .sub-topic')
      let fromTop = window.scrollY

      mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash)
        let allCurrent = document.querySelectorAll('.current'), i

        if (section.offsetTop <= fromTop) {
          for (i = 0; i < allCurrent.length; ++i) {
            allCurrent[i].classList.remove('current')
          }
          link.classList.add('current')
        } else {
          link.classList.remove('current')
        }
      })
    }
  },
  beforeMount () {
  },
  mounted() {
    // console.log('Loading: ' + this.campaign);
    this.sections = campaigns[this.campaign];
    // console.log(this.sections);
    this.frameTitle = this.sections[0]['title'];
    this.frameSrc = this.sections[0]['url'];
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

  .sidebar {
    width: 20%;
    height: 100%;
    background: none;
    min-width: 300px;
  }

  .main {
    width: 80%;
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
