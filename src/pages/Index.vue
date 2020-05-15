<template>
  <Layout :sidebar="false">
    <div class="content">

      <h1>{{ $page.content.edges[0].node.title }}</h1>

      <p>
        {{ $page.content.edges[0].node.headline }}
      </p>

      <center>
        <g-link to="https://streetwise-app.ch/" class="button">
          {{ $page.content.edges[0].node.button }}
        </g-link>
      </center>

      <center>
        <div class="markdown" v-html="$page.content.edges[0].node.content" />
      </center>

      <nav>
        <Shortcut link="https://streetwise-app.ch/" text="Starten" icon="play-icon" />
        <Shortcut link="/about" text="Information" icon="help-circle-icon" />
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

export default {
  components: {
    Shortcut
  },
  data() {
    return {}
  },
  metaInfo() {
    let content = this.$page.content.edges[0].node
    return {
      title: content.title,
      meta: [
        { key: 'description', name: 'description', content: content.headline }
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
  width: 12em;
  margin: 1em 0 4em;

   border-top: 1px solid #96d1f8;
   background: #a1d665;
   background: -webkit-gradient(linear, left top, left bottom, from(#3e9c5c), to(#a1d665));
   background: -webkit-linear-gradient(top, #3e9c5c, #a1d665);
   background: -moz-linear-gradient(top, #3e9c5c, #a1d665);
   background: -ms-linear-gradient(top, #3e9c5c, #a1d665);
   background: -o-linear-gradient(top, #3e9c5c, #a1d665);
   padding: 5px 10px;
   -webkit-border-radius: 8px;
   -moz-border-radius: 8px;
   border-radius: 8px;
   -webkit-box-shadow: rgba(0,0,0,1) 0 1px 0;
   -moz-box-shadow: rgba(0,0,0,1) 0 1px 0;
   box-shadow: rgba(0,0,0,1) 0 1px 0;
   text-shadow: rgba(0,0,0,.4) 0 1px 0;
   color: white;
   font-size: 24px;
   font-family: Helvetica, Arial, Sans-Serif;
   text-decoration: none;
   vertical-align: middle;
   }
.button:hover {
   border-top-color: #1f7857;
   background: #1f7857;
   color: #ccc;
   }
.button:active {
   border-top-color: #1b5c27;
   background: #1b5c27;
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

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>
