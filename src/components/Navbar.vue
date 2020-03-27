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
          <b-button
            to="/"
            variant="primary"
            class="mx-1"
            exact
            active-class="active"
            ><i class="fas fa-calendar-alt"></i> Schedule</b-button
          >
          <b-button
            to="/search"
            variant="primary"
            class="mx-1"
            active-class="active"
            ><i class="fas fa-search"></i> Search</b-button
          >
          <b-button
            to="/about"
            variant="primary"
            class="mx-1"
            active-class="active"
            ><i class="fas fa-info-circle"></i> About</b-button
          >
        </b-navbar-nav>

        <!-- Right aligned elements -->
        <b-navbar-nav class="ml-auto">
          <b-button
            v-b-modal.create-schedule-modal
            class="mx-1"
            variant="primary"
            ><i class="fas fa-plus-square"></i> Create</b-button
          >
          <b-button v-b-modal.load-schedule-modal class="mx-1" variant="primary"
            ><i class="fas fa-cloud-download-alt"></i> Load</b-button
          ></b-navbar-nav
        >
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default { name: "Navbar" };
</script>
