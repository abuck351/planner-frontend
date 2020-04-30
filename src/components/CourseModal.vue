<template>
  <b-modal
    id="course-modal"
    button-size="sm"
    hide-footer
    :title="modalTitle"
    centered
  >
    <p><i class="fas fa-th"></i> {{ course.code }}</p>
    <p><i class="fas fa-clock"></i> {{ daysAndTime }}</p>
    <p>
      <i class="fas fa-chalkboard-teacher"></i>
      {{ course.instructor }}
    </p>
    <p><i class="fas fa-building"></i> {{ course.building }}</p>
    <b-button variant="danger"
      ><i class="fas fa-trash"></i> Remove Course</b-button
    >
  </b-modal>
</template>

<script>
import { formatRange } from "@fullcalendar/core";

export default {
  name: "CourseModal",
  props: ["course"],
  computed: {
    modalTitle: function() {
      return `${this.course.section_type} ${this.course.section_name} ${this.course.title}`;
    },
    daysAndTime: function() {
      const timeRange = formatRange(this.course.start, this.course.end, {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        separator: " to ",
      });
      return `${this.course.days} from ${timeRange}`;
    },
  },
};
</script>
