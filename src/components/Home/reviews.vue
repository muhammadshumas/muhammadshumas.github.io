<template>
  <vue-aos animation-class="slide-in animated" threshold="0.3">
    <section class="reviews pt-4 pb-2">
      <div class="text-center">
        <h1 class="underline text-white">Customer Reviews</h1>
      </div>
      <div class="example-3d p-0">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(review, index) in reviews" :key="index">
            <div class="d-flex flex-column px-4 w-100">
              <p class="letter-spacing-sm reviews__review__body">
                " {{ review.body }} "
              </p>
              <div>
                <img
                  v-lazy="review.img"
                  height="50"
                  width="50"
                  class="rounded-circle"
                />
              </div>
              <p class="mb-1 mt-2 letter-spacing-sm">{{ review.name }}</p>
              <div class="text-center">
                <b-form-rating
                  class="bg-transparent p-0 w-40"
                  size="sm"
                  variant="warning"
                  id="rating-inline"
                  no-border
                  inline
                  :value="review.rating"
                  readonly
                ></b-form-rating>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div
            class="swiper-button-prev text-portfolio1 position-absolute"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-next text-portfolio1 position-absolute"
            slot="button-next"
          ></div>
        </swiper>
      </div>
    </section>
  </vue-aos>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-3d-cube",
  title: "3D Cube effect",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviews: [
        {
          body:
            "Once again you have exceeded my expectations! Well done on a good job. Will use again for future projects.",
          name: "Mr Crash",
          img: require("../../assets/images/home/reviews/1.png"),
          rating: 5,
        },
        {
          body: "Excellent work. Highly recommended",
          name: "Mr Crash",
          img: require("../../assets/images/home/reviews/1.png"),
          rating: 5,
        },
        {
          body: "Fantastic work Well done Will use again",
          name: "Mr Crash",
          img: require("../../assets/images/home/reviews/1.png"),
          rating: 5,
        },
        {
          body: "Great work",
          name: "walkie_talkie",
          img: require("../../assets/images/home/reviews/1.png"),
          rating: 5,
        },
        {
          body:
            "Excellent work The commitment and dedication to his work is amazing We will definitely be using your services again",
          name: "Mr Crash",
          img: require("../../assets/images/home/reviews/1.png"),
          rating: 5,
        },
      ],
      swiperOption: {
        effect: "cube",
        loop: true,
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>
