<template>
  <v-app-bar
    app
    dense
    elevation="1"
    :clipped-left="clippedLeft"
    color="white"
  >
    <slot name="navigation-toggle-button" />

    <nuxt-link
      :to="homePath"
      class="text-decoration"
    >
      <app-logo />
    </nuxt-link>

    <app-title />

    <v-spacer />

    <LoggedInAppBarAccountMenu />
  </v-app-bar>
</template>

<script>
import LoggedInAppBarAccountMenu from '~/components/LoggedIn/LoggedInAppBarAccountMenu.vue'
export default {
  components: { LoggedInAppBarAccountMenu },
  props: {
    clippedLeft: {
      type: Boolean,
      default: false
    }
  },
  data ({ $store }) {
    return {
      homePath: $store.state.loggedIn.homePath
    }
  }
}
</script>
