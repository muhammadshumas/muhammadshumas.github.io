<template>
  <section class="skills section-margin">
    <div class="text-center mb-4">
      <h1 class="text-portfolio4 text-uppercase underline">
        What are we Good at
      </h1>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4 col-sm-6 col-12 my-3"
          v-for="skill in skills"
          :key="skill.name"
        >
          <div class="skill text-center card box-shadow border-0">
            <div class="p-3">
              <radial-progress-bar
                class="mx-auto"
                :diameter="175"
                :completed-steps="skill.completedSteps"
                :total-steps="totalSteps"
                :startColor="skill.startColor"
                :stopColor="skill.endColor"
                :strokeWidth="7"
                :innerStrokeWidth="7"
              >
                <h1 class="text-portfolio3 letter-spacing-md">
                  {{ skill.percent }}
                </h1>
              </radial-progress-bar>
            </div>
            <div class="d-flex bg-portfolio1 p-2 justify-content-center w-100">
              <img v-lazy="skill.img" width="50" height="50" />
              <p class="m-0 ml-2 letter-spacing-sm align-self-center">
                {{ skill.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";

export default {
  mounted() {
    setTimeout(() => {
      this.skills.forEach((skill) => {
        skill.completedSteps = 9;
      });
    });
  },
  data() {
    return {
      totalSteps: 10,
      skills: [
        {
          name: "HTML5",
          completedSteps: 0,
          percent: "90%",
          startColor: "#E44D26",
          endColor: "#F16529",
          img: require("../../assets/images/skills/html-logo.png"),
        },
        {
          name: "CSS3",
          completedSteps: 0,
          percent: "80%",
          startColor: "#2965f1",
          endColor: "#264de4",
          img: require("../../assets/images/skills/css-logo.png"),
        },
        {
          name: "JS",
          completedSteps: 0,
          percent: "75%",
          startColor: "#f0db4f",
          endColor: "#f0db4f",
          img: require("../../assets/images/skills/js-logo.png"),
        },
        {
          name: "Vue JS",
          completedSteps: 0,
          percent: "75%",
          startColor: "#42b883",
          endColor: "#35495e",
          img: require("../../assets/images/skills/vue-logo.png"),
        },
        {
          name: "Node JS",
          completedSteps: 0,
          percent: "75%",
          startColor: "#68A063",
          endColor: "#3C873A",
          img: require("../../assets/images/skills/node-logo.png"),
        },

        {
          name: "Mongo DB / MySQL",
          completedSteps: 0,
          percent: "75%",
          startColor: "#4DB33D",
          endColor: "#00758F",
          img: require("../../assets/images/skills/db-logo.png"),
        },
      ],
    };
  },

  components: {
    RadialProgressBar,
  },
};
</script>

<style></style>
