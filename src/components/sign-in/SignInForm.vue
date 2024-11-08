<template>
  <div>
    <div class="bg-image"></div>
    <div class="container">
      <div id="phone">
        <div id="content-wrapper">
          <!-- 로그인 카드 -->
          <div :class="{ card: true, hidden: !isLoginVisible }" id="login">
            <form @submit.prevent="handleLogin">
              <h1>Sign in</h1>
              <div class="input" :class="{ active: isEmailFocused || email }">
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  @focus="focusInput('email')"
                  @blur="blurInput('email')"
                />
                <label for="email">Username or Email</label>
              </div>
              <div
                class="input"
                :class="{ active: isPasswordFocused || password }"
              >
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  @focus="focusInput('password')"
                  @blur="blurInput('password')"
                />
                <label for="password">Password</label>
              </div>
              <span class="checkbox remember">
                <input type="checkbox" id="remember" v-model="rememberMe" />
                <label for="remember" class="read-text">Remember me</label>
              </span>
              <button :disabled="!isLoginFormValid">Login</button>
            </form>
            <a
              href="javascript:void(0)"
              class="account-check"
              @click="toggleCard"
            >
              Don't have an account? <b>Sign up</b>
            </a>
          </div>

          <!-- 회원가입 카드 -->
          <div :class="{ card: true, hidden: isLoginVisible }" id="register">
            <form @submit.prevent="handleRegister">
              <h1>Sign up</h1>
              <div
                class="input"
                :class="{ active: isRegisterEmailFocused || registerEmail }"
              >
                <input
                  id="register-email"
                  type="email"
                  v-model="registerEmail"
                  @focus="focusInput('registerEmail')"
                  @blur="blurInput('registerEmail')"
                />
                <label for="register-email">Email</label>
              </div>
              <div
                class="input"
                :class="{
                  active: isRegisterPasswordFocused || registerPassword,
                }"
              >
                <input
                  id="register-password"
                  type="password"
                  v-model="registerPassword"
                  @focus="focusInput('registerPassword')"
                  @blur="blurInput('registerPassword')"
                />
                <label for="register-password">Password</label>
              </div>
              <button :disabled="!isRegisterFormValid">Register</button>
            </form>
            <a
              href="javascript:void(0)"
              id="gotologin"
              class="account-check"
              @click="toggleCard"
            >
              Already have an account? <b>Sign in</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInSignUp",
  data() {
    return {
      isLoginVisible: true,
      email: "",
      password: "",
      registerEmail: "",
      registerPassword: "",
      isEmailFocused: false,
      isPasswordFocused: false,
      rememberMe: false,
    };
  },
  computed: {
    isLoginFormValid() {
      return !!this.email && !!this.password;
    },
  },
  methods: {
    toggleCard() {
      this.isLoginVisible = !this.isLoginVisible;
    },
    focusInput(inputName) {
      this[
        `is${inputName.charAt(0).toUpperCase() + inputName.slice(1)}Focused`
      ] = true;
    },
    blurInput(inputName) {
      this[
        `is${inputName.charAt(0).toUpperCase() + inputName.slice(1)}Focused`
      ] = false;
    },
    handleLogin() {
      alert("Login logic here!");
    },
    handleRegister() {
      alert("Register logic here!");
    },
  },
};
</script>

<style scoped>
/* 통합된 스타일 */

:root {
  --container-start-color: #ececec;
  --container-end-color: #100f0f;
}

.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center;
}

.container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#phone {
  width: 50%;
  border-radius: 10px;
  text-align: center;
}

.card {
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.hidden {
  display: none;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px;
  background: #2069ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
