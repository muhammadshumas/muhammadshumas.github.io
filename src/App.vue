<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <scroll-top-btn></scroll-top-btn>
  </div>
</template>

<script>
import appHeader from "./components/General/header";
import appFooter from "./components/General/footer";
import scrollTopBtn from "./components/General/scroll-top-btn";

export default {
  components: {
    appHeader,
    appFooter,
    scrollTopBtn,
  },
};
</script>
