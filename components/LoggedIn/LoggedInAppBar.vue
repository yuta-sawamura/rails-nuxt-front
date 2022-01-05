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

    <app-title :class="{ 'hihidden-mobile-and-downdden': isNotHomePath }" />

    <LoggedInAppBarBreadcrumbs v-if="isNotHomePath" />
    <v-spacer />

    <LoggedInAppBarAccountMenu />
  </v-app-bar>
</template>

<script>
import LoggedInAppBarAccountMenu from '~/components/LoggedIn/LoggedInAppBarAccountMenu.vue'
import LoggedInAppBarBreadcrumbs from '~/components/LoggedIn/LoggedInAppBarBreadcrumbs.vue'
export default {
  components: { LoggedInAppBarAccountMenu, LoggedInAppBarBreadcrumbs },
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
  },
  computed: {
    isNotHomePath () {
      return this.$route.name !== this.homePath.name
    }
  }
}
</script>
