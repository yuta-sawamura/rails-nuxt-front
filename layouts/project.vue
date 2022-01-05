<template>
  <v-app>
    <LoggedInAppBar />
    <v-main>
      project.vue
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '~/components/LoggedIn/LoggedInAppBar.vue'
export default {
  components: { LoggedInAppBar }
}
</script>
