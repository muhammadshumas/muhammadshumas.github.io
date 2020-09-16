<template>
  <vue-aos animation-class="slide-in animated" threshold="0">
    <section class="recent-work section-padding">
      <div class="text-center letter-spacing-md">
        <h1 class="underline text-center text-portfolio4">Recent Work</h1>
      </div>
      <div class="container">
        <div class="row">
          <div
            class="col-sm-4 col-12"
            v-for="(work, index) in recentWork"
            :key="index"
          >
            <div
              class="card my-3 recent-work__work cursor-pointer box-shadow border-0"
            >
              <div class="recent-work__work__img-container rounded">
                <img class="img-fluid rounded" height="300" v-lazy="work.src" />
                <div
                  class="position-absolute d-flex align-items-center justify-content-center flex-column w-100 h-100 recent-work__work__content"
                >
                  <h4 class="text-white recent-work__work__content__title">
                    {{ work.title }}
                  </h4>
                  <button
                    @click="() => showImg(index)"
                    class="btn btn-outline-portfolio1 mt-3 d-block w-40 recent-work__work__content__view"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <vue-easy-lightbox
        :visible="visible"
        :imgs="recentWork"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </section>
  </vue-aos>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      index: 0,
      recentWork: [
        {
          title: "Home Builder",
          src: require("../../assets/images/home/recent-work/recent-work1.jpg"),
        },
        {
          title: "Live Platforms",
          src: require("../../assets/images/home/recent-work/recent-work2.jpg"),
        },
        {
          title: "Eat 247",
          src: require("../../assets/images/home/recent-work/recent-work3.jpg"),
        },
        {
          title: "Complete Sign",
          src: require("../../assets/images/home/recent-work/recent-work4.jpg"),
        },
        {
          title: "Ethereums Token",
          src: require("../../assets/images/home/recent-work/recent-work5.jpg"),
        },
      ],
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<style></style>
