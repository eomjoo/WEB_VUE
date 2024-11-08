<template>
  <div class="sign-in-form">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "../../services/AuthService";

export default {
  name: "SignInForm",
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const router = useRouter();
    const authService = new AuthService();

    const login = async () => {
      error.value = "";
      try {
        await authService.tryLogin(email.value, password.value);
        router.push("/"); // 로그인 성공 시 메인 페이지로 이동
      } catch (err) {
        error.value = err;
      }
    };

    return { email, password, login, error };
  },
};
</script>

<style scoped>
.sign-in-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
