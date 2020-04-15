<template>
  <b-button
    block
    :variant="courseAdded ? 'success' : 'outline-secondary'"
    :disabled="courseAdded"
    @click="addSection"
  >
    <b-row class="py-2">
      <b-col cols="2">{{ section.code }}</b-col>
      <b-col cols="2">{{ section.section_type }} {{ section.section_name }}</b-col>
      <b-col>{{ section.instructor }}</b-col>
      <b-col>{{ section.days }} {{ section.time_display }}</b-col>
      <b-col cols="2">{{ section.building }}</b-col>
    </b-row>
    <EnrollmentBar :enrolled="section.enrolled" :capacity="section.max_capacity" />
  </b-button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EnrollmentBar from "./EnrollmentBar";

export default {
  name: "SectionInfo",
  components: { EnrollmentBar },
  props: ["section"],
  computed: {
    ...mapGetters(["currentPlan"]),
    courseAdded() {
      if (this.currentPlan) {
        return this.currentPlan.courses.some(
          course => course.code === this.section.code
        );
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapActions(["addCourse"]),
    addSection() {
      this.addCourse({
        planName: this.currentPlan.name,
        planTerm: this.currentPlan.term,
        courseCode: this.section.code
      });
    }
  }
};
</script>
