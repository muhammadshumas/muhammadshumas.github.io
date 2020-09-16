<template>
  <vue-aos animation-class="slide-in animated" threshold="0">
    <section class="about mt-4">
      <div class="container">
        <div class="row d-flex flex-column-reverse flex-md-row">
          <div class="col-md-6 col-12">
            <div class="py-3 d-flex flex-column justify-content-center h-100">
              <h3 class="underline text-portfolio4 letter-spacing-md">
                About Us
              </h3>
              <p class="letter-spacing-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur quia quibusdam consectetur adipisci, ratione nobis
                officiis incidunt molestiae, eos neque reiciendis vel voluptate
                voluptatibus quis odit dignissimos qui fuga at dolorum veritatis
                earum aliquam fugit tempore? Omnis fugit dicta architecto aut
                delectus voluptatem reprehenderit molestiae dignissimos, id
                magni, voluptates quod.
              </p>
              <button class="btn btn-portfolio4 w-40">Hire Us</button>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <img class="img-fluid" v-lazy="aboutImg" alt srcset />
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
      aboutImg: require("../../assets/images/about/about3.png"),
    };
  },
};
</script>

<style></style>
