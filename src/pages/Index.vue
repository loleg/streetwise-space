<template>
  <Layout :sidebar="false">
    <div class="content">

      <h1>{{ $page.content.edges[0].node.title }}</h1>

      <p>
        {{ $page.content.edges[0].node.headline }}
      </p>

      <!-- <center>
        <g-link to="https://streetwise-app.ch/" class="button">
          {{ $page.content.edges[0].node.button }}
        </g-link>
      </center> -->

      <center>
        <div class="markdown" v-html="$page.content.edges[0].node.content" />
      </center>

      <!--<video width="100%" autoplay muted>
        <source src="/media/take1.mp4" type="video/mpeg">
        <source src="/media/take1.webm" type="video/webm">
      </video>-->
      <!-- <img src="/media/vid_20200624_094348.jpg" width="100%" height="auto"> -->

      <nav class="campaigns">
        <a @click="showCampaign('atmosphere')" class="atmosphere" href="#atmosphere">
          <div>
            <b>Atmosphäre</b>
          </div>
        </a>
        <a @click="showCampaign('safety')" class="safety" href="#safety">
          <div>
            <b>Sicherheit</b>
          </div>
        </a>
      </nav>
      <modal name="atmosphere" disable-backdrop>
        <div class="basic-modal">
          <button class="corner" type="button" @click="closeCampaign">&#10006;</button>
          <h1 class="title">Streetwise Score Atmosphäre</h1>
          <Gemeindescan campaign="atmosphere" />
          <p>weiterführende Info zu den Ergebnissen
            <a href="/results" @click="closeCampaign">findest du hier</a>
          </p>
          <center>
            <button class="button" type="button" @click="closeCampaign">Zurück</button>
          </center>
        </div>
      </modal>
      <modal name="safety" disable-backdrop>
        <div class="basic-modal">
          <button class="corner" type="button" @click="closeCampaign">&#10006;</button>
          <h1 class="title">Streetwise Score Sicherheit</h1>
          <Gemeindescan campaign="safety" />
          <p>weiterführende Info zu den Ergebnissen
            <a href="/results" @click="closeCampaign">findest du hier</a>
          </p>
          <center>
            <button class="button" type="button" @click="closeCampaign">Zurück</button>
          </center>
        </div>
      </modal>

      <nav class="shortcuts">
        <!-- <Shortcut link="https://streetwise-app.ch/" text="Zur Umfrage" icon="play-icon" /> -->
        <Shortcut link="/results" text="Ergebnisse" icon="pie-chart-icon" />
        <Shortcut link="/about" text="Hintergrund" icon="help-circle-icon" />
        <Shortcut link="/contact" text="Kontakt" icon="mail-icon" />
      </nav>

      <div class="logos">
        <h5>Partner und Sponsoren</h5>
        <a href="https://metropolitanraum-zuerich.ch/"><img src="/media/logo-mrz.png"></a>
        <a href="https://irl.ethz.ch/research/stl.html"><img src="/media/logo-STL.png" style="height:100px; padding:20px 0"></a>
        <a href="https://luucy.ch/"><img src="/media/logo-luucy.png"></a>
        <a href="https://cividi.ch/"><img src="/media/logo-cividi.png" style="height:100px; padding:20px 0"></a>
        <a href="https://swisscom.ch/"><img src="/media/logo-swisscom.jpg" style="height:100px; padding:20px 0"></a>
        <h5>Projektentwicklung</h5>
        <a href="https://ivoag.ch/"><img src="/media/logo-ivo.jpg" style="height:100px; padding:20px"></a>
        <a href="https://datalets.ch/"><img src="/media/logo-dataletsch.png" style="height:80px;"></a>
        <a href="https://human-ist.unifr.ch/en/"><img src="/media/logo-human-ist.png"></a>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query content {
  content: allContent(filter: {slug: {eq: "index"}}) {
    edges {
      node {
        title
        headline
        button
        content
        keywords
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Shortcut from '~/components/Shortcut.vue'
import Gemeindescan from '~/components/Gemeindescan.vue'
import 'vue-thin-modal/dist/vue-thin-modal.css'

export default {
  components: {
    Shortcut,
    Gemeindescan
  },
  data() {
    return {
    }
  },
  methods: {
    showCampaign(name) {
      this.$modal.push(name)
    },
    closeCampaign() {
      this.$modal.pop()
    }
  },
  metaInfo() {
    let content = this.$page.content.edges[0].node
    let title = 'Streetwise' // TODO: page setting
    let canonical = 'https://streetwise.space' // TODO: global settings
    let image = '/media/streetwise-ytcount-3-16x9-900px.jpg' // TODO: page setting

    return {
      title: title,
      meta: [
        { key: 'description', name: 'description', content: content.headline },
        { key: 'keywords', name: 'keywords', content: content.keywords },

        // OpenGraph data (Most widely used)
        { property: 'og:title', content: title },
        { property: 'og:site_name', content: title },
        // The list of types is available here: http://ogp.me/#types
        { property: 'og:type', content: 'website' },
        // Should the the same as your canonical link, see below.
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: image },
        // Often the same as your meta description, but not always.
        { property: 'og:description', content: content.headline }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

.content .g-image {
  width: 100%;
}

.button {
  display: inline-block;
  text-align: center;
  margin: 1em 0 4em;
  vertical-align: middle;
}

.markdown, nav {
  margin-bottom: 3em;
}

blockquote {
  border: 1px solid #999;
  background: #f0f0f0;
  padding: 5px;
}

.logos {
  text-align: center;
  img {
    height: 110px;
    margin: 10px 20px;
  }
}

h1 {

  @include respond-above(md) {
    max-width: 1000px;
  }

  transform: scale(0.7);
  text-align: left;
  margin: 0px;

  @include respond-above(sm) {
    width: auto;
    text-align: center;
    max-width: 600px;
    margin: 1.5em auto 1.5em;
    transform: none;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

nav.campaigns {
  a {
    width: 100%;
    min-height: 512px;
    border: 10px solid white;
    background-size: cover;
    background-repeat: no-repeat;
  }
  a:hover {
    border: 10px solid blue;
  }
  .safety {
    background-image: url('/media/streetwise-ytcount-3-square-512.jpg');
  }
  .atmosphere {
    background-image: url('/media/img3938-square-512.jpg');
  }
  div {
    display: inline-block;
    margin: 10px; padding: 10px 16px;
    background-color: white;
  }
}

button.corner {
  border: none; background: none;
  position: absolute;
  top: 0px; right: 0px;
  padding: 20px;
  margin: 0 10px;
  font-size: 30px;
  color: #999;

  &:hover {
    color: #000;
  }
}

.modal-content {
  width: 95%;

  h1 {
    margin: 0px;
    position: absolute;
    margin-left: 355px;
    font-size: 30px;

    @include respond-above(md) {
      font-size: 40px;
    }
  }
  p {
    text-align: center;
  }
  button {
    cursor: pointer;
    margin: 0px;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>
