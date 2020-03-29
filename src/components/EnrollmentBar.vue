<template>
  <b-row class="d-flex align-items-center">
    <p class="m-2 mx-4">{{ enrolledProgressLabel }}</p>
    <b-progress :max="capacity" class="flex-fill my-2 mx-4">
      <b-progress-bar
        :value="enrolled"
        :variant="enrolledProgressVariant"
      ></b-progress-bar> </b-progress
  ></b-row>
</template>

<script>
export default {
  name: "EnrollmentBar",
  props: ["enrolled", "capacity"],
  computed: {
    enrolledProgressVariant() {
      if (this.enrolled < this.capacity / 2) {
        return "success";
      } else if (this.enrolled >= this.capacity) {
        return "danger";
      } else {
        return "warning";
      }
    },
    enrolledProgressLabel() {
      if (this.enrolled >= this.capacity) {
        return "FULL";
      } else {
        return `${this.enrolled} / ${this.capacity} enrolled`;
      }
    }
  }
};
</script>

<style></style>
