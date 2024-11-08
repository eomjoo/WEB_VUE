<template>
  <div class="sign-in-form">
    <h1 v-if="isRegistering">Register</h1>
    <h1 v-else>Login</h1>
    <form @submit.prevent="isRegistering ? register() : login()">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button type="submit">{{ isRegistering ? "Register" : "Login" }}</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
    <button @click="toggleMode">
      {{
        isRegistering
          ? "Already have an account? Login"
          : "Don't have an account? Register"
      }}
    </button>
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
    const isRegistering = ref(false);
    const router = useRouter();
    const authService = new AuthService();

    const login = async () => {
      try {
        error.value = "";
        await authService.login(email.value, password.value);
        router.push("/"); // 로그인 성공 시 메인 페이지로 이동
      } catch (err) {
        error.value = err.message;
      }
    };

    const register = async () => {
      try {
        error.value = "";
        await authService.register(email.value, password.value);
        isRegistering.value = false; // 회원 가입 후 로그인 모드로 전환
      } catch (err) {
        error.value = err.message;
      }
    };

    const toggleMode = () => {
      isRegistering.value = !isRegistering.value;
    };

    return {
      email,
      password,
      error,
      isRegistering,
      login,
      register,
      toggleMode,
    };
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
button {
  margin-top: 10px;
}
</style>
