<template>
  <nav>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="m-1 mb-4 rounded shadow"
    >
      <b-navbar-brand>Planner</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/" class="nav-item"
              >Schedule</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/search">Search</router-link></b-nav-item
          >
          <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned elements -->
        <b-navbar-nav class="ml-auto"
          ><ScheduleLoader />
          <b-button v-b-modal.create-schedule-modal class="ml-2"
            >Create</b-button
          ></b-navbar-nav
        >
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
import ScheduleLoader from "./ScheduleLoader";

export default { name: "Navbar", components: { ScheduleLoader } };
</script>

<style lang="scss">
nav a {
  color: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;

  .router-link-exact-active,
  :hover {
    color: white;
    text-decoration: none;
    background: #17a2b8;
  }
}
</style>
