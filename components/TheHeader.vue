<script setup>
import { useAuthStore } from '~/stores/AuthStore';

const auth = useAuthStore();

</script>
<template>
  <nav
    class="sticky top-0 z-30 lg:relative transition-all duration-[0.4s] ease border-b bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-700">
    <div class="max-w-5xl mx-auto">

      <div class="flex justify-between items-center h-16 px-5">
        <NuxtLink to="/">
          <div class="w-10 h-5 rounded-md bg-slate-200" />
        </NuxtLink>

        <ul class="justify-center hidden lg:col-span-4 lg:gap-x-2 xl:gap-x-4 lg:flex">
          <template v-if="auth.isLoggedIn">
            <li>
              <a href="#"
                class="text-sm lg:text-base focus-visible:ring hover:bg-slate-100 rounded-md p-3 transition text-slate-900"
                @click="auth.logout()">
                Logout
              </a>
            </li>
          </template>
          <template v-else>
            <li>
              <NuxtLink to="/"
                class="text-sm lg:text-base focus-visible:ring hover:bg-slate-100 rounded-md p-3 transition text-slate-900">
                Create account
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/login"
                class="text-sm lg:text-base focus-visible:ring hover:bg-slate-100 rounded-md p-3 transition text-slate-900">
                Log in</NuxtLink>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>