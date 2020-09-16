<template>
  <vue-aos animation-class="slide-in animated" threshold="0">
    <section class="contact mt-4 section-padding text-white">
      <div class="text-center mb-5">
        <h1 class="underline letter-spacing-md text-white">Get in Touch</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 mb-4 mb-md-0">
            <h3 class="letter-spacing-md">Feel Free To Contact</h3>
            <p class="pr-4 letter-spacing-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              tempore nulla eligendi quas non, rem perspiciatis quia mollitia
              voluptates porro cum autem pariatur, veniam corrupti fuga
              aspernatur minima error delectus!
            </p>
            <div class="contact__mediums">
              <div class="d-flex flex-wrap justify-content-between">
                <a
                  href="tel:+923483744640"
                  class="contact__mediums__phone contact__mediums__medium d-inline-block bg-portfolio1 text-portfolio4 py-2 text-center px-0 px-lg-3 text-lg-left mb-3"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fas', 'phone']" rotation="90" />
                  <span class="ml-2">+923483744640</span>
                </a>

                <a
                  href="mailto:info@codelab.com"
                  class="contact__mediums__phone contact__mediums__medium d-inline-block bg-portfolio1 text-portfolio4 py-2 text-center px-0 px-lg-3 text-lg-left mb-3"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                  <span class="ml-2">info@codelab.com</span>
                </a>
                <a
                  href="#"
                  class="contact__mediums__phone contact__mediums__medium d-inline-block bg-portfolio1 text-portfolio4 py-2 text-center px-0 px-lg-3 text-lg-left mb-3"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                  <span class="ml-2">Facebook</span>
                </a>
                <a
                  href="#"
                  class="contact__mediums__phone contact__mediums__medium d-inline-block bg-portfolio1 text-portfolio4 py-2 text-center text-lg-left mb-3 px-0 px-lg-3"
                  target="_blank"
                >
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                  <span class="ml-2">instagram</span>
                </a>
                <a
                  href="https://wa.me/00923483744640?text=Hello, Thank you for contacting us , we will get back to you shortly!"
                  target="_blank"
                  class="contact__mediums__phone contact__mediums__medium d-inline-block bg-portfolio1 text-portfolio4 py-2 text-center px-0 px-lg-3 text-lg-left"
                >
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  <span class="ml-2">whatsapp</span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <b-form class="p-4 contact__form">
              <b-form-group
                v-for="(el, index) in form"
                :key="index"
                class="input-portfolio1-container mb-3"
                :class="{ focused: el.focused }"
              >
                <font-awesome-icon
                  class="position-absolute input-portfolio1-container__icon"
                  :icon="['fas', el.icon]"
                />
                <b-form-input
                  @focus="el.focused = true"
                  @blur="el.focused = false"
                  class="input-portfolio1 pl-4"
                  v-model="el.value"
                  :type="el.type"
                  required
                  :placeholder="el.placeholder"
                ></b-form-input>
              </b-form-group>
              <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="4"
                max-rows="6"
                class="textarea-portfolio1 mt-4"
              ></b-form-textarea>
              <button
                class="btn btn-portfolio1 mt-3 d-block w-40 text-portfolio4 font-weight-bold letter-spacing-md text-uppercase"
              >
                Submit
              </button>
            </b-form>
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
      form: [
        {
          label: "name",
          value: "",
          focused: false,
          type: "text",
          placeholder: "Enter Name",
          icon: "user",
        },
        {
          label: "email",
          value: "",
          focused: false,
          type: "email",
          placeholder: "Enter Email",
          icon: "envelope",
        },
      ],
    };
  },
  methods: {},
};
</script>
