<template>
  <header class="header pt-3 text-white position-relative">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="false"
      :clickEffect="false"
    >
    </vue-particles>
    <nav
      class="header__nav d-none d-lg-block w-100 position-absolute"
      :class="{ fixed: fixedNav }"
    >
      <div class="container">
        <div class="row">
          <div class="col-2">
            <h2 class="font-weight-bold m-0 header__logo">Code Lab</h2>
          </div>
          <div class="col-10">
            <ul
              class="d-flex header__nav-list m-0 w-100 justify-content-between"
            >
              <li>
                <a href="http://">
                  Home
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Services
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
              <li>
                <a href="http://">
                  About
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Portfolio
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Testimonials
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
              <li>
                <a href="http://">
                  Contact
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="d-block d-lg-none position-absolute w-100 header__nav">
      <div class="container w-100 h-100">
        <div class="d-flex justify-content-between  align-items-center">
          <h2 class="font-weight-bold m-0 header__logo">Code Lab</h2>
          <div
            class="burger burger-squeeze"
            aria-controls="header-sb"
            aria-expanded="false"
            :class="{ open: sbState }"
            @click="sbState = !sbState"
          >
            <div class="burger-lines"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center header__content w-100">
      <h1
        class="text-portfolio text-white text-uppercase header__heading-main underline letter-spacing-lg mb-0 mx-auto mb-2"
      >
        Welcome to
        <span class="text-portfolio2">Code Lab</span>
      </h1>
      <div class="header__web-development mt-3 mt-sm-4 letter-spacing-md">
        <h1>
          Web Development is
          <br class="d-block d-sm-none" />
          <span
            class="text-portfolio2 header__web-development__variable position-relative"
          ></span>
        </h1>
      </div>
    </div>

    <b-sidebar
      v-model="sbState"
      class="d-block d-lg-none"
      id="header-sb"
      :backdrop="true"
    >
      <div class="px-3 py-2">
        <h2 class="font-weight-bold m-0 header__logo">Code Lab</h2>
        <ul class="header__nav-list m-0 w-50 pl-0">
          <li>
            <a href="http://">
              Home
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="http://">
              Services
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="http://">
              About
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="http://">
              Portfolio
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="http://">
              Testimonials
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="http://">
              Contact
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </header>
</template>

<script>
export default {
  data() {
    return {
      sbState: false,
      fixedNav: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.fixedNav = true;
      } else {
        this.fixedNav = false;
      }

      const scrollTopBtn = document.querySelector(".scroll-top-btn");

      if (window.scrollY > 200) {
        scrollTopBtn.classList.remove("d-none");
        scrollTopBtn.classList.add("d-block");
      } else {
        scrollTopBtn.classList.remove("d-block");
        scrollTopBtn.classList.add("d-none");
      }
    },
  },
};
</script>

<style></style>
