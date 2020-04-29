<template>
  <b-modal
    id="course-modal"
    button-size="sm"
    hide-footer
    :title="modalTitle"
    centered
  >
    <p><i class="fas fa-clock"></i> {{ daysAndTime }}</p>
    <p>
      <i class="fas fa-chalkboard-teacher"></i>
      {{ event.extendedProps.course.instructor }}
    </p>
    <p>
      <i class="fas fa-building"></i> {{ event.extendedProps.course.building }}
    </p>
  </b-modal>
</template>

<script>
import { formatRange } from "@fullcalendar/core";

export default {
  name: "CourseModal",
  props: ["event"],
  computed: {
    modalTitle: function() {
      return (
        this.event.extendedProps.course.section_type +
        " " +
        this.event.extendedProps.course.section_name +
        " | " +
        this.event.title
      );
    },
    daysAndTime: function() {
      return (
        this.event.extendedProps.course.days +
        ", " +
        formatRange(this.event.start, this.event.end, {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
          separator: " to ",
        })
      );
    },
  },
};
</script>
