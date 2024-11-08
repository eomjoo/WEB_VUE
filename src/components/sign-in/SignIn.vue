<template>
  <div class="sign-in-page">
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from "./SignInForm.vue";

export default {
  name: "SignIn",
  components: { SignInForm },
};
</script>

<style scoped>
.sign-in-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
