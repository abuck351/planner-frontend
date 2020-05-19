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
              {{ daysAndTime(course.days, course.start_time, course.end_time) }}
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
import { formatRange } from "@fullcalendar/core";

export default {
  name: "ListModal",
  computed: {
    ...mapGetters(["currentPlan"]),
    courses: function() {
      if (this.currentPlan) return this.currentPlan.courses;
      return null;
    }
  },
  methods: {
    daysAndTime(days, start_time, end_time) {
      // Date doesn't matter b/c I just care about the time
      const start = new Date(`January 1, 2000 ${start_time}`);
      const end = new Date(`January 1, 2000 ${end_time}`);

      const timeRange = formatRange(start, end, {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        separator: " to "
      });
      return `${days} from ${timeRange}`;
    }
  }
};
</script>

<style></style>
