<template>
  <b-container class="p-4" fluid>
    <FullCalendar
      id="schedule"
      default-view="timeGridWeek"
      all-day-text="Online/TBA"
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
      :events="courseEvents"
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
  computed: {
    ...mapGetters(["currentPlan", "courseEvents"])
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
