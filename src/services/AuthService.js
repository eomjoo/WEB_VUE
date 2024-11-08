export class AuthService {
    // 사용자 정보 로컬 스토리지에서 가져오기
    getUsers() {
      return JSON.parse(localStorage.getItem("users") || "[]");
    }
  
    // 사용자 정보 저장하기
    saveUsers(users) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  
    // 회원 가입
    async register(email, password) {
      const users = this.getUsers();
      const userExists = users.some((user) => user.email === email);
  
      if (userExists) {
        throw new Error("User already exists");
      }
  
      const newUser = { email, password };
      users.push(newUser);
      this.saveUsers(users);
      return newUser;
    }
  
    // 로그인
    async login(email, password) {
      const users = this.getUsers();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
  
      if (!user) {
        throw new Error("Invalid credentials");
      }
  
      // 로그인 성공 시 토큰 저장
      localStorage.setItem("auth-token", email);
      return user;
    }
  
    // 로그아웃
    logout() {
      localStorage.removeItem("auth-token");
    }
  
    // 인증 상태 확인
    isAuthenticated() {
      return !!localStorage.getItem("auth-token");
    }
  }
  