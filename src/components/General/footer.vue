<template>
  <footer class="footer bg-footer py-4 text-white">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 col-12">
          <h5 class="letter-spacing-md mb-3">Code Lab</h5>
          <p class="font-weight-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            excepturi fugiat laudantium tempore praesentium iure nemo vitae,
            sit, earum voluptates vero ullam dicta eos dignissimos dolores
            impedit amet! Nemo, vero?
          </p>
        </div>
        <div class="col-12 col-sm-3 mb-3 mb-sm-0">
          <h5 class="letter-spacing-md mb-3">Quick Links</h5>
          <div class="d-flex flex-column pl-2">
            <a class="text-white my-1" href="#">Contact</a>
            <a class="text-white my-1" href="#">About</a>
            <a class="text-white mt-1" href="#">Contact</a>
          </div>
        </div>

        <div class="col-12 col-sm-3 footer__social">
          <h5 class="letter-spacing-md mb-3">Social Media</h5>
          <div class="d-flex">
            <a
              href="http://"
              class="d-flex justify-content-center align-items-center"
            >
              <font-awesome-icon
                class="text-portfolio1"
                :icon="['fab', 'whatsapp']"
                size="2x"
              />
            </a>
            <a
              href="http://"
              class="d-flex justify-content-center align-items-center"
            >
              <font-awesome-icon
                class="text-portfolio1"
                :icon="['fab', 'facebook']"
                size="2x"
              />
            </a>
            <a
              href="http://"
              class="d-flex justify-content-center align-items-center"
            >
              <font-awesome-icon
                class="text-portfolio1"
                :icon="['fab', 'instagram']"
                size="2x"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
