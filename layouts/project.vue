<template>
  <v-app>
    <LoggedInAppBar clipped-left>
      <template #navigation-toggle-button>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
        />
      </template>
    </LoggedInAppBar>
    <ProjectNavigationDrawer :drawer.sync="drawer" />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LoggedInAppBar from '~/components/LoggedIn/LoggedInAppBar.vue'
import ProjectNavigationDrawer from '~/components/Project/ProjectNavigationDrawer.vue'
export default {
  middleware: 'get-project-current',
  components: { LoggedInAppBar, ProjectNavigationDrawer },
  data () {
    return {
      drawer: null
    }
  }
}
</script>
