<template>
  <div>
    <h1>views에서 표시되는거</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { AuthService } from "../services/AuthService";

export default {
  name: "HomeView",
  setup() {
    const authService = new AuthService();

    const logout = () => {
      authService.logout();
      location.reload(); // 로그아웃 후 페이지 새로고침
    };

    return { logout };
  },
};
</script>
