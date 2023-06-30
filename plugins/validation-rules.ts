import { email, min, required } from "@vee-validate/rules";
import { defineRule } from "vee-validate";

export default defineNuxtPlugin(() => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
})