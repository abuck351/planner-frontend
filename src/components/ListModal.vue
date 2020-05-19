<template>
  <b-modal
    id="list-modal"
    size="lg"
    button-size="sm"
    title="Course List"
    hide-footer
    centered
    scrollable
  >
    <b-container fluid>
      <p v-if="!courses">No courses have been added yet...</p>
      <ul v-else>
        <li v-for="course in courses" :key="course._id">
          <b-badge
            :variant="course.section_type === 'Lec' ? 'primary' : 'secondary'"
            class="px-1"
          >{{course.code}}</b-badge>
          <b class="px-1">{{course.title}}</b>
          <i class="px-1">({{course.section_type}} {{course.section_name}})</i>
          <ul>
            <li>
              <i class="fas fa-clock"></i>
              {{ course.days }}
            </li>
            <li>
              <i class="fas fa-chalkboard-teacher"></i>
              {{ course.instructor }}
            </li>
            <li>
              <i class="fas fa-building"></i>
              {{ course.building }}
            </li>
            <li v-if="course.restrictions">
              <i class="fas fa-exclamation-circle"></i>
              {{course.restrictions}}
            </li>
          </ul>
        </li>
      </ul>
    </b-container>
  </b-modal>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ListModal",
  computed: {
    ...mapGetters(["currentPlan"]),
    courses() {
      if (this.currentPlan) return this.currentPlan.courses;
      return null;
    }
  }
};
</script>

<style></style>
