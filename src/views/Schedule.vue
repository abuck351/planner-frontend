<template>
  <b-container class="p-4" fluid>
    <h1 v-if="currentPlan">
      {{ currentPlan.name }}'s schedule for {{ currentPlan.term }}
    </h1>
    <h1 v-else>Please load or create a schedule</h1>
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

export default {
  name: "Schedule",
  components: { FullCalendar },
  data() {
    return {
      calendarPlugins: [timeGridPlugin]
    };
  },
  computed: mapGetters(["currentPlan"]),
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
</style>
