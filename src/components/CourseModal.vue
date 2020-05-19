<template>
  <b-modal id="course-modal" button-size="sm" hide-footer :title="modalTitle" centered>
    <p>
      <i class="fas fa-th"></i>
      {{ course.code }}
    </p>
    <p>
      <i class="fas fa-clock"></i>
      {{ daysAndTime }}
    </p>
    <p>
      <i class="fas fa-chalkboard-teacher"></i>
      {{ course.instructor }}
    </p>
    <p>
      <i class="fas fa-building"></i>
      {{ course.building }}
    </p>
    <p v-if="course.restrictions">
      <i class="fas fa-exclamation-circle"></i>
      {{course.restrictions}}
    </p>
    <b-button variant="danger" @click="remove">
      <i class="fas fa-trash"></i> Remove Section
    </b-button>
  </b-modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatRange } from "@fullcalendar/core";

export default {
  name: "CourseModal",
  props: ["course"],
  computed: {
    ...mapGetters(["currentPlan"]),
    modalTitle: function() {
      return `${this.course.section_type} ${this.course.section_name} ${this.course.title}`;
    },
    daysAndTime: function() {
      const timeRange = formatRange(this.course.start, this.course.end, {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
        separator: " to "
      });
      return `${this.course.days} from ${timeRange}`;
    }
  },
  methods: {
    ...mapActions(["removeCourse"]),
    remove() {
      this.removeCourse({
        planName: this.currentPlan.name,
        planTerm: this.currentPlan.term,
        courseCode: this.course.code
      });

      this.$root.$emit("bv::hide::modal", "course-modal");
    }
  }
};
</script>
