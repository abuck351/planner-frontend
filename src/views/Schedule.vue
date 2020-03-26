<template>
  <b-container class="p-4" fluid>
    <!-- <h1>{{ plan.name }} for {{ plan.term }}</h1> -->
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

export default {
  name: "Schedule",
  components: { FullCalendar },
  data() {
    return {
      calendarPlugins: [timeGridPlugin]
    };
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
</style>
