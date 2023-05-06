import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      isLoggedIn: false,
      token: null,
      email: ''
    }
  },
  actions: {
    authenticate(email: string) {
      this.isLoggedIn = true;
      this.email = email
    },
    logout() {
      this.isLoggedIn = false;
      this.token = null
      this.email = ''
    }
  }
})