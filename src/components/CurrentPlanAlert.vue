<template>
  <b-alert
    v-if="currentPlan"
    show
    variant="info"
    class="m-4"
  >Loaded Plan: {{ currentPlan.name }} for {{ formattedTerm }}</b-alert>
  <b-alert v-else show variant="warning" class="m-4">
    Please
    <a class="alert-link" href="#" v-b-modal.create-schedule-modal>create</a> or
    <a class="alert-link" href="#" v-b-modal.load-schedule-modal>load</a> a schedule
  </b-alert>
</template>

<script>
import { mapGetters } from "vuex";
import { formatTerm } from "@/utils/formatting";

export default {
  name: "CurrentPlanAlert",
  computed: {
    ...mapGetters(["currentPlan", "allDeptsAsSelect"]),
    formattedTerm: function () {
      if (this.currentPlan) {
        return formatTerm(this.currentPlan.term);
      } else {
        return "";
      }
    },
  },
};
</script>
