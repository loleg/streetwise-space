<template>
  <header class="header" :class="{'header--scrolled' : pageScrolled}">
    <Logo :color="logoColor" />
    <nav class="nav">
      <g-link to="/results">Ergebnisse</g-link>
      <g-link to="/about">Hintergrund</g-link>
      <g-link to="/contact">Kontakt</g-link>
      <MenuToggle v-if="menuToggle" />
    </nav>
    <SocialIcons :color="logoColor" />
  </header>
</template>

<script>
import MenuToggle from '~/components/MenuToggle.vue'
import SocialIcons from '~/components/SocialIcons.vue'
import Logo from '~/components/Logo.vue'
import throttle from 'lodash/throttle'

export default {
  components: {
    MenuToggle,
    SocialIcons,
    Logo
  },
  props: {
    menuToggle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      pageScrolled: false,
      logoColor: 'bright'
    }
  },
  methods: {
    updateLogo: function() {
      this.logoColor = (this.logoColor == 'dark' ? 'bright' : 'dark')
    },
    headerScroll: function() {
      let fromTop = window.scrollY

      if ((fromTop > 40 && this.pageScrolled == false) || (fromTop <= 40 && this.pageScrolled == true)) {
        this.pageScrolled = !this.pageScrolled
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.headerScroll)

    if (process.isClient) {
      this.logoColor = localStorage.getItem('theme')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: -12px;
  left: 0;
  z-index: 10;
  padding: 15px 30px;
  transition: padding .15s linear, background .15s linear, border-color .15s linear;
  will-change: padding, background;
  border-bottom: 1px solid transparent;
  background: white;

  @include respond-above(sm) {
    padding: 30px;
  }

  &--scrolled {
    @include respond-below(sm) {
      padding: 15px 30px;

      .dark & {
        background: $sidebarDark;
        border-color: shade($sidebarDark, 40%);
      }

      .bright & {
        background: $sidebarBright;
        border-color: shade($sidebarBright, 10%);
      }
    }
  }
}

nav {
  display: flex;

  a {
    margin: 0 2em;
    text-decoration: none;
    color: black;
    font-weight: normal;

    &:hover {
      color: #10c186;
    }
  }
}

@media screen and (max-width: 800px) {
  nav { display: none; }
}
</style>
