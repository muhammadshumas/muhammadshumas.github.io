<template>
  <vue-aos animation-class="slide-in animated" threshold="0">
    <section class="team section-margin section-padding">
      <div class="text-center">
        <h1 class="underline text-white letter-spacing-md">Meet Our Team</h1>
      </div>
      <div class="container mb-4 mt-5">
        <div class="row">
          <div
            class="col-md-4 col-12"
            :class="{ 'mb-3 mb-md-0': index < team.length - 1 }"
            v-for="(member, index) in team"
            :key="member.name"
          >
            <div class="card p-3 box-shadow border-0 text-center h-100">
              <div class="team__member__content">
                <div class="mb-3">
                  <img width="125" height="125" v-lazy="member.img" />
                </div>
                <h3 class="letter-spacing-md">{{ member.name }}</h3>
                <h5 class="text-portfolio3 letter-spacing-sm">
                  {{ member.role }}
                </h5>
                <p class="m-0 letter-spacing-sm">{{ member.about }}</p>

                <div class="d-flex justify-content-center mt-3 mt-md-0">
                  <button
                    class="btn btn-outline-portfolio3 team__contact d-block w-75  mx-auto"
                    v-scroll-to="{
                      el: '.contact__form',
                      container: 'body',
                      duration: 1000,
                      easing: 'linear',
                      offset: 0,
                      force: true,
                      cancelable: true,
                      onStart: onStart,
                      onDone: onDone,
                      onCancel: onCancel,
                      x: false,
                      y: true,
                    }"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </vue-aos>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Muhammad Musab",
          role: "Back End Developer",
          about:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio aliquid accusantium recusandae harum atque optio voluptates voluptatem",
          img: require("../../assets/images/home/team/member2.png"),
        },
        {
          name: "Abdul Wahid",
          role: "Founder / CEO",
          about:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio aliquid accusantium recusandae harum atque optio voluptates voluptatem",
          img: require("../../assets/images/home/team/member3.png"),
        },
        {
          name: "Muhammad Shumas",
          role: "Front End Developer",
          about:
            "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio aliquid accusantium recusandae harum atque optio voluptates voluptatem",
          img: require("../../assets/images/home/team/member1.png"),
        },
      ],
    };
  },
};
</script>

<style></style>
