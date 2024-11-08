import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "SignInForm",
  setup() {
    const isLoginVisible = ref(true);
    const email = ref("");
    const password = ref("");
    const registerEmail = ref("");
    const registerPassword = ref("");
    const confirmPassword = ref("");
    const rememberMe = ref(false);
    const acceptTerms = ref(false);

    const isEmailFocused = ref(false);
    const isPasswordFocused = ref(false);
    const isRegisterEmailFocused = ref(false);
    const isRegisterPasswordFocused = ref(false);
    const isConfirmPasswordFocused = ref(false);

    const router = useRouter();

    const isLoginFormValid = () => {
      return email.value !== "" && password.value !== "";
    };

    const isRegisterFormValid = () => {
      return (
        registerEmail.value !== "" &&
        registerPassword.value !== "" &&
        confirmPassword.value !== "" &&
        registerPassword.value === confirmPassword.value &&
        acceptTerms.value
      );
    };

    const toggleCard = () => {
      isLoginVisible.value = !isLoginVisible.value;
    };

    const focusInput = (inputName: string) => {
      switch (inputName) {
        case "email":
          isEmailFocused.value = true;
          break;
        case "password":
          isPasswordFocused.value = true;
          break;
        case "registerEmail":
          isRegisterEmailFocused.value = true;
          break;
        case "registerPassword":
          isRegisterPasswordFocused.value = true;
          break;
        case "confirmPassword":
          isConfirmPasswordFocused.value = true;
          break;
      }
    };

    const blurInput = (inputName: string) => {
      switch (inputName) {
        case "email":
          isEmailFocused.value = false;
          break;
        case "password":
          isPasswordFocused.value = false;
          break;
        case "registerEmail":
          isRegisterEmailFocused.value = false;
          break;
        case "registerPassword":
          isRegisterPasswordFocused.value = false;
          break;
        case "confirmPassword":
          isConfirmPasswordFocused.value = false;
          break;
      }
    };

    const handleLogin = () => {
      if (email.value === "test@example.com" && password.value === "password") {
        alert("Login Successful!");
        router.push("/"); // 로그인 성공 시 메인 페이지로 이동
      } else {
        alert("Login Failed!");
      }
    };

    const handleRegister = () => {
      if (isRegisterFormValid()) {
        alert("Registration Successful!");
        toggleCard();
      } else {
        alert("Registration Failed!");
      }
    };

    return {
      isLoginVisible,
      email,
      password,
      registerEmail,
      registerPassword,
      confirmPassword,
      rememberMe,
      acceptTerms,
      isEmailFocused,
      isPasswordFocused,
      isRegisterEmailFocused,
      isRegisterPasswordFocused,
      isConfirmPasswordFocused,
      isLoginFormValid,
      isRegisterFormValid,
      toggleCard,
      focusInput,
      blurInput,
      handleLogin,
      handleRegister,
    };
  },
};
