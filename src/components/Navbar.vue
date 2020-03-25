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
        <b-navbar-nav class="ml-auto"><ScheduleLoader /></b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
import ScheduleLoader from "./ScheduleLoader";

export default { name: "Navbar", components: { ScheduleLoader } };
</script>

<style>
nav a {
  color: white;
}

nav a:hover {
  color: white;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
