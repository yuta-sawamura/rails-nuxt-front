<template>
  <v-app-bar
    app
    dense
    elevation="1"
    color="white"
  >
    <nuxt-link
      :to="redirectPath"
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
  data ({ $store }) {
    return {
      redirectPath: $store.state.loggedIn.redirectPath
    }
  }
}
</script>
