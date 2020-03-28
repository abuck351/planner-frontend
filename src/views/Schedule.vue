<template>
  <b-container class="p-4" fluid>
    <CurrentPlanAlert />
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
import CurrentPlanAlert from "@/components/CurrentPlanAlert";

export default {
  name: "Schedule",
  components: { FullCalendar, CurrentPlanAlert },
  data() {
    return {
      calendarPlugins: [timeGridPlugin]
    };
  },
  computed: {
    ...mapGetters(["currentPlan"])
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
