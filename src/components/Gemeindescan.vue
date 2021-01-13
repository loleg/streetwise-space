<template>
  <div class="gemeindescan" :class="{'browser--open' : this.browserOpen}">
    <a class="title" href="https://gemeindescan.ch" target="_blank">Gemeindescan</a>
    <div class="container">
      <nav class="sidebar">
        <ul class="snapshotlist">
          <li class="section" v-for="node in sections" :key="node.title">
            <a :href="node.url" @click="navigateTo(node, $event)">{{node.title}}</a>
          </li>
        </ul>
      </nav>
      <div class="main">
        <iframe :title="frameTitle" :src="frameSrc"></iframe>
        <a class="fullscreen button" :href="frameSrc" target="_blank">Vollbild</a>
      </div>
    </div>
  </div>
</template>


<script>
const campaigns = require('/data/campaigns.json');

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
      frameSrc: ""
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

.snapshotlist .section {
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 20px 15px;
  margin: 1px;
  overflow: hidden;

  &:hover {
    background-color: #d0d0d0;
    a {
      color: #000;
    }
  }

  a {
    color: #555;
    text-decoration: none;
  }
}

/*
.sidebar {
  transition: background .15s ease-in-out, transform .15s ease-in-out, border-color .15s linear;
  padding: 100px 30px 30px;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  will-change: transform;
  transform: translateX(-300px);
  border-right: 1px solid transparent;
  overflow: auto;

  @include respond-above(sm) {
    transform: translateX(0);
  }

  &--open {
    transform: translateX(0);
  }

  .bright & {
    background: $sidebarBright;
    border-color: shade($sidebarBright, 10%);
  }

  .dark & {
    background: $sidebarDark;
    border-color: shade($sidebarDark, 40%);
  }
}

nav {
  position: relative;
  min-height: 100%;
  border: 1px solid transparent;
  padding-bottom: 40px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    color: inherit;
    padding: 5px 0;
    display: block;

    &.active {
      color: $brandPrimary;
    }
  }
}

.section {
  margin-bottom: 30px;
}

.section-title {
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
  opacity: .3;
  letter-spacing: .15em;
  font-weight: 700;
}

.topic {
  font-weight: 700;
}

.sub-topic {
  font-size: .875rem;
  position: relative;
  opacity: .8;

  &::after {
    content: '';
    transition: opacity .15s ease-in-out;
    width: 6px;
    height: 6px;
    background: $brandPrimary;
    border-radius: 100%;
    display: block;
    opacity: 0;
    position: absolute;
    top: 13px;
    left: -15px;
  }

  &.current {
    &::after {
      opacity: 1;
    }
  }
}

.git {
  position: absolute;
  bottom: 0;
  left: 0;
}
*/
</style>
