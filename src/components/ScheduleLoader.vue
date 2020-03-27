<template>
  <b-input-group size="md" prepend="@">
    <b-form-input
      :placeholder="currentPlan ? currentPlan.name : 'panteater'"
    ></b-form-input>
    <b-input-group-append>
      <b-button variant="info">Load</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ScheduleLoader",
  computed: mapGetters(["currentPlan"])
};
</script>

<style></style>
