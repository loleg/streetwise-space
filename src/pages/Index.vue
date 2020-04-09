<template>
  <Layout :sidebar="false">
    <div class="content">
      <h1>{{ description }}</h1>

      <p>
        Es gibt tausende Karten – keine zeigt die Raumqualität aus Sicht der Bevölkerung. Ein Projekt im Metropolitanraum Zürich will dies nun ändern. Wie nehmen wir unseren Lebensraum wahr? Wie erleben wir die Atmosphäre eines Ortes, wo fühlen wir uns sicher, wo fühlen wir uns gut? Diese Fragen werden umso wichtiger, je mehr Menschen in städtischen Gebieten leben. Geht es nach der Raumplanung, so werden es immer mehr.
      </p>
      <center>
        <g-image src="~/assets/img/ui-1.jpg" width="1280"/>
      </center>
      <p>
        Räume tun uns gut oder schaden uns – sie sind nie neutral. Das Projekt «Streetwise» im Metropolitanraum Zürich verwendet neue Ansätze. Es untersucht die alltägliche Bewertung von Orten durch die Bevölkerung und macht sie sichtbar. Streetwise misst die menschliche Wahrnehmung von räumlichen Situationen und verwendet hierfür die Methode des Crowdsourcing: Einer grossen Zahl von Personen werden Bildpaare des öffentlichen Raumes angezeigt.
      </p><p>
        Durch Anklicken eines Bildes geben diese jeweils eine Bewertung ab, womit ein Algorithmus trainiert wird. Durch eine sehr grosse Anzahl von Klicks lernt das System, Bilder selbstständig zu bewerten. So können schliesslich beliebige räumliche Situationen automatisch bewertet werden. Es entsteht die erste Karte der räumlichen Qualität in der Schweiz.
      </p><p>
        In unserem Projekt fragen wir zunächst nach der Einschätzung von räumlichen Situationen bezüglich deren Sicherheit.
      </p>
      <center>
        <h1>
          Unser Crowdsourcing startet am 11. Mai 2020. Wir brauchen dafür 50'000 Klicks – machen Sie mit?
        </h1>
        <p>
          Dank dem Sponsoring von Swisscom können Sie ein iPhone 11 gewinnen! Die Umfrage dauert nur 5 Minuten.
        </p>
      </center>

      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut link="/getting-started" text="Starten" icon="play-icon" />
        <Shortcut link="/theme-configuration" text="Hilfe" icon="sliders-icon" />
        <Shortcut link="/editing-in-forestry" text="Kontakt" icon="eye-icon" />
      </nav>
      <GitLink class="git" size="large" />
    </div>
  </Layout>
</template>

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
    return {
      description: 'Kooperationsprojekt Metropolitanraum Zürich'
    }
  },
  metaInfo() {
    return {
      title: this.description,
      meta: [
        { key: 'description', name: 'description', content: 'Streetwise misst die menschliche Wahrnehmung von räumlichen Situationen und verwendet hierfür die Methode des Crowdsourcing.' }
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

h1 {
  text-align: center;
  max-width: 600px;
  margin: 1.5em auto 1.5em;

  @include respond-above(md) {
    max-width: 1000px;
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
