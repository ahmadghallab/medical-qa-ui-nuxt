import { useAuthStore } from "~/stores/AuthStore";

export default defineNuxtRouteMiddleware(() => {

  const auth = useAuthStore();
  
  if (auth.isLoggedIn) {
    return abortNavigation()
  }

})