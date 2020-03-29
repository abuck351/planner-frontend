<template>
  <div id="app">
    <Navbar />
    <CurrentPlanAlert />
    <CreateScheduleModal />
    <LoadScheduleModal />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import CurrentPlanAlert from "./components/CurrentPlanAlert";
import CreateScheduleModal from "./components/CreateScheduleModal";
import LoadScheduleModal from "./components/LoadScheduleModal";

export default {
  name: "App",
  components: {
    Navbar,
    CurrentPlanAlert,
    CreateScheduleModal,
    LoadScheduleModal
  }
};
</script>

<style>
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
