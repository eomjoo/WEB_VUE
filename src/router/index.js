import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PopularView from "../views/PopularView.vue";
import WishlistView from "../views/WishlistView.vue";
import SearchView from "../views/SearchView.vue";
import SignInView from "../views/SignInView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/popular", name: "Popular", component: PopularView },
  { path: "/wishlist", name: "Wishlist", component: WishlistView },
  { path: "/search", name: "Search", component: SearchView },
  { path: "/login", name: "Login", component: SignInView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
