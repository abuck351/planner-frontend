<template>
  <div id="app">
    <Navbar />
    <CurrentPlanAlert />
    <CreateScheduleModal />
    <LoadScheduleModal />
    <ListModal />
    <AboutModal />
    <Schedule id="schedule" />
    <Search />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import CurrentPlanAlert from "./components/CurrentPlanAlert";
import CreateScheduleModal from "./components/CreateScheduleModal";
import LoadScheduleModal from "./components/LoadScheduleModal";
import ListModal from "./components/ListModal";
import AboutModal from "./components/AboutModal";
import Schedule from "./components/Schedule";
import Search from "./components/Search";

export default {
  name: "App",
  components: {
    Navbar,
    CurrentPlanAlert,
    CreateScheduleModal,
    LoadScheduleModal,
    ListModal,
    AboutModal,
    Schedule,
    Search
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
