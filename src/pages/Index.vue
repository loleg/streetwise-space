<template>
  <Layout :sidebar="false">
    <div class="content">

      <h1>{{ $page.content.edges[0].node.title }}</h1>

      <p>
        {{ $page.content.edges[0].node.headline }}

        <g-link to="/start">
          {{ $page.content.edges[0].node.button }}
        </g-link>
      </p>

      <div class="markdown" v-html="$page.content.edges[0].node.content" />

      <nav>
        <Shortcut link="/start" text="Starten" icon="play-icon" />
        <Shortcut link="/about" text="Information" icon="help-circle-icon" />
        <Shortcut link="/contact" text="Kontakt" icon="mail-icon" />
      </nav>

      <div class="logos">
        <a href="https://ivoag.ch/"><img src="/media/logo-ivo.jpg" style="height:100px; padding:20px"></a>
        <a href="https://cividi.ch/"><img src="/media/logo-cividi.png" style="height:80px;"></a>
        <a href="https://human-ist.unifr.ch/en/"><img src="/media/logo-human-ist.png"></a>
        <a href="https://ethz.ch/"><img src="/media/logo-eth.png"></a>
        <a href="https://luucy.ch/"><img src="/media/logo-luucy.png"></a>
        <a href="https://metropolitanraum-zuerich.ch/"><img src="/media/logo-mrz.png"></a>
        <a href="https://swisscom.ch/"><img src="/media/logo-swisscom.jpg"></a>
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
  width: 1px;

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
