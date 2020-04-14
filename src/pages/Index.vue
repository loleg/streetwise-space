<template>
  <Layout :sidebar="false">
    <div class="content">

      <h1>{{ $page.content.edges[0].node.title }}</h1>

      <p>
        {{ $page.content.edges[0].node.headline }}

        <g-link to="/getting-started">
          {{ $page.content.edges[0].node.button }}
        </g-link>
      </p>

      <center>
        <g-image src="~/assets/img/ui-1.jpg" />
      </center>

      <div class="markdown" v-html="$page.content.edges[0].node.content" />

      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut link="/getting-started" text="Starten" icon="play-icon" />
        <Shortcut link="/theme-configuration" text="Hilfe" icon="help-circle-icon" />
        <Shortcut link="/editing-in-forestry" text="Kontakt" icon="mail-icon" />
      </nav>
      <GitLink class="git" size="large" />
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
        image
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
import GitLink from '~/components/GitLink.vue'
import Shortcut from '~/components/Shortcut.vue'

export default {
  components: {
    GitLink,
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
