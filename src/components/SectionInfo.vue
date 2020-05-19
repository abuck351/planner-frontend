<template>
  <b-button
    block
    :variant="courseAdded ? 'info' : 'outline-secondary'"
    :disabled="courseAdded || isAddingCourse"
    @click="add"
  >
    <b-row class="mx-auto py-2">
      <b-col cols="3" md="auto">
        <i class="fas fa-th"></i>
        {{ section.code }}
      </b-col>
      <b-col cols="3" md="auto">
        <i class="fas fa-chair"></i>
        {{ section.section_type }} {{ section.section_name }}
      </b-col>
      <b-col cols="6" md="auto">
        <i class="fas fa-chalkboard-teacher"></i>
        {{ section.instructor }}
      </b-col>
      <b-col cols="6" md="auto">
        <i class="fas fa-clock"></i>
        {{ section.days }} {{ section.time_display }}
      </b-col>
      <b-col cols="6" md="auto">
        <i class="fas fa-building"></i>
        {{ section.building }}
      </b-col>
      <b-col cols="12" lg="auto" v-if="section.restrictions">
        <i class="fas fa-exclamation-circle"></i>
        {{section.restrictions}}
      </b-col>
    </b-row>
    <EnrollmentBar :enrolled="section.enrolled" :capacity="section.max_capacity" />
    <b-overlay :show="isAddingCourse" spinner-variant="info" opacity="0.8" no-wrap></b-overlay>
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
    ...mapGetters(["currentPlan", "addingCourseCode"]),
    courseAdded() {
      if (this.currentPlan) {
        return this.currentPlan.courses.some(
          course => course.code === this.section.code
        );
      } else {
        return false;
      }
    },
    isAddingCourse() {
      return this.addingCourseCode === this.section.code;
    }
  },
  methods: {
    ...mapActions(["addCourse"]),
    add() {
      this.addCourse({
        planName: this.currentPlan.name,
        planTerm: this.currentPlan.term,
        courseCode: this.section.code
      });
    }
  }
};
</script>
