<template>
  <v-app>
    <LoggedInAppBar />
    <v-main>
      <nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import LoggedInAppBar from '~/components/LoggedIn/LoggedInAppBar.vue'
export default {
  components: { LoggedInAppBar }
}
</script>
