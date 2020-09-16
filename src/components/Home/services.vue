<template>
  <vue-aos animation-class="slide-in animated" threshold="0">
    <div class="services py-5">
      <div class="text-center">
        <h1 class="underline letter-spacing-md mb-5 mb-sm-9 text-white">
          What Do We Offer?
        </h1>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-4 col-12 services__col "
              :class="{ 'mb-4 mb-lg-0': index !== services.length - 1 }"
              v-for="(service, index) in services"
              :key="service.headline"
            >
              <div
                class="services__img-container mb-3 position-absolute rounded-circle d-lg-block d-none"
              >
                <img width="100" height="100" :src="service.imgSrc" alt />
              </div>
              <div
                class="card services__service p-lg-3 px-sm-4 px-3 py-3 box-shadow text-center text-sm-left"
              >
                <span class="shinning-border1"></span>
                <span class="shinning-border2"></span>
                <span class="shinning-border3"></span>
                <span class="shinning-border4"></span>

                <div
                  class="d-flex d-lg-block services__service__main flex-column-reverse flex-sm-row"
                >
                  <div>
                    <h4 class="letter-spacing-md mt-lg-6 mt-0">
                      {{ service.headline }}
                    </h4>
                    <p class="letter-spacing-sm">{{ service.description }}</p>
                    <button
                      class="btn btn-outline-portfolio4 d-block w-100 d-lg-inline"
                    >
                      Hire US
                    </button>
                  </div>
                  <div
                    class="d-block d-lg-none text-sm-right text-center mb-3 mb-sm-0"
                  >
                    <img
                      class="img-fluid"
                      width="150"
                      height="150"
                      :src="service.imgSrc"
                      alt
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </vue-aos>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          headline: "Front End Development",
          description:
            "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at accusamus blanditiis totam a error cum obcaecati, deserunt reiciendis facilis tempore nemo asperiores fugit porro sed ab tempora praesentium alias.",
          imgSrc: require("../../assets/svgs/design.svg"),
        },
        {
          headline: "Back End Development",
          description:
            "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at accusamus blanditiis totam a error cum obcaecati, deserunt reiciendis facilis tempore nemo asperiores fugit porro sed ab tempora praesentium alias.",
          imgSrc: require("../../assets/svgs/code.svg"),
        },
        {
          headline: "Bug Fix",
          description:
            "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta at accusamus blanditiis totam a error cum obcaecati, deserunt reiciendis facilis tempore nemo asperiores fugit porro sed ab tempora praesentium alias.",
          imgSrc: require("../../assets/svgs/fix.svg"),
        },
      ],
    };
  },
};
</script>

<style></style>
