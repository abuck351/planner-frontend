<template>
  <b-container class="p-4" fluid>
    <h1>Schedule</h1>
    <h4 v-if="currentPlan">{{ currentPlan.name }} for {{ formattedTerm }}</h4>
    <h4 v-else>Please load or create a schedule</h4>
    <FullCalendar
      id="schedule"
      default-view="timeGridWeek"
      all-day-text="Online"
      min-time="06:00:00"
      height="auto"
      :header="{
        left: '',
        center: '',
        right: ''
      }"
      :weekends="false"
      :column-header-format="{ weekday: 'short' }"
      :plugins="calendarPlugins"
      :events="events"
      @eventClick="onEventClicked"
    />
  </b-container>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import timeGridPlugin from "@fullcalendar/timegrid";
import { mapGetters } from "vuex";
import { formatTerm } from "@/utils/formatting";

export default {
  name: "Schedule",
  components: { FullCalendar },
  data() {
    return {
      calendarPlugins: [timeGridPlugin]
    };
  },
  computed: {
    ...mapGetters(["currentPlan"]),
    formattedTerm: function() {
      if (this.currentPlan) {
        return formatTerm(this.currentPlan.term);
      } else {
        return "";
      }
    }
  },
  methods: {
    onEventClicked(info) {
      console.log("Event: " + info.event.title);
    }
  }
};
</script>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/timegrid/main.css";

.fc-today {
  background-color: inherit !important;
}
</style>
