<template>
  <user-form-card>
    <template #user-form-card-content>
      <v-form
        ref="form"
        v-model="isValid"
      >
        <user-form-email
          :email.sync="params.user.email"
        />
        <user-form-password
          :password.sync="params.user.password"
        />
        <v-btn
          :disabled="!isValid || loading"
          :loading="loading"
          block
          color="appblue"
          class="white--text"
          @click="lgoin"
        >
          ログインする
        </v-btn>
      </v-form>
    </template>
  </user-form-card>
</template>

<script>
export default {
  layout: 'before-login',
  data ({ $store }) {
    return {
      name: '',
      isValid: false,
      loading: false,
      params: {
        user: {
          email: '',
          password: ''
        }
      },
      redirectPath: $store.state.loggedIn.homePath
    }
  },
  methods: {
    lgoin () {
      this.loading = true
      this.$router.push(this.redirectPath)
    }
  }
}
</script>
