<template>
  <b-container class="p-4" fluid>
    <h1>Search</h1>
    <h4 v-if="currentPlan">{{ currentPlan.name }} for {{ formattedTerm }}</h4>
    <h4 v-else>Please load or create a schedule</h4>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { formatTerm } from "@/utils/formatting";

export default {
  name: "Search",
  computed: {
    ...mapGetters(["currentPlan"]),
    formattedTerm: function() {
      if (this.currentPlan) {
        return formatTerm(this.currentPlan.term);
      } else {
        return "";
      }
    }
  }
};
</script>
