<template>
  <v-breadcrumbs
    :items="items"
    class="d-text-truncate"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item>
        {{ item.text }}
      </v-breadcrumbs-item>
    </template>
    <template v-slot:divider>
      <v-icon>
        mdi-chevron-right
      </v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  computed: {
    items () {
      const currentRouteName = this.$route.name
      const items = [
        { text: this.$my.pageTitle(this.$route.name) }
      ]
      if (currentRouteName.match(/project/) && !this.$vuetify.breakpoint.xs) {
        const currentProject = this.$store.state.project.current
        items.unshift({ text: currentProject.name })
      }
      return items
    }
  }
}
</script>
