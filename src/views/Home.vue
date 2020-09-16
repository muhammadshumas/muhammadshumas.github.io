<template>
  <main>
    <my-skills></my-skills>
    <my-services></my-services>
    <my-recent-work></my-recent-work>
    <my-team></my-team>
    <my-reviews></my-reviews>
    <my-about></my-about>
    <my-contact></my-contact>
  </main>
</template>

<script>
import mySkills from "../components/Home/skills";
import myServices from "../components/Home/services";
import myRecentWork from "../components/Home/recent-work";
import myTeam from "../components/Home/team";
import myReviews from "../components/Home/reviews";
import myAbout from "../components/Home/about";
import myContact from "../components/Home/contact";

export default {
  components: {
    mySkills,
    myServices,
    myRecentWork,
    myTeam,
    myReviews,
    myAbout,
    myContact,
  },
};
</script>
