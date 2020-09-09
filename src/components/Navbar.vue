<template>
  <nav>
    <b-navbar toggleable="sm" type="dark" variant="primary" class="m-1 mb-4 rounded shadow">
      <b-navbar-brand>Zot Planner</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="p-1">
          <b-button v-b-modal.create-schedule-modal class="mx-1" variant="primary">
            <span class="nav-button-text">
              <i class="fas fa-plus-square pr-1"></i> Create
            </span>
          </b-button>
          <b-button v-b-modal.load-schedule-modal class="mx-1" variant="primary">
            <span class="nav-button-text">
              <i class="fas fa-cloud-download-alt pr-1"></i> Load
            </span>
          </b-button>
          <b-button href="#search" class="mx-1" variant="primary">
            <span class="nav-button-text">
              <i class="fas fa-search pr-1"></i> Search
            </span>
          </b-button>
          <b-button v-b-modal.list-modal class="mx-1" variant="primary">
            <span class="nav-button-text">
              <i class="fas fa-list pr-1"></i> List
            </span>
          </b-button>
          <b-button v-b-modal.about-modal class="mx-1" variant="primary">
            <span class="nav-button-text">
              <i class="fas fa-info-circle pr-1"></i> About
            </span>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default { name: "Navbar" };
</script>

<style lang="scss" scoped>
.nav-button-text {
  float: left;
}
</style>
