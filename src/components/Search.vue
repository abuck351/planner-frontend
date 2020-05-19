<template>
  <b-container class="p-4">
    <h1><i class="fas fa-search"></i> Search</h1>
    <form ref="searchForm" id="search" @submit.stop.prevent="handleSubmit">
      <b-form-group
        description="You can type the department name"
        label="Department"
        label-for="department-select"
        :state="departmentState"
        invalid-feedback="You must select a department"
      >
        <b-form-select
          id="department-select"
          v-model="department"
          :options="allDeptsAsSelect"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled
              >-- Please select a department --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-form-group>
      <b-button
        type="submit"
        value="Submit"
        block
        variant="primary"
        :disabled="!currentPlan || isSearching"
      >
        <div v-if="isSearching">Searching...</div>
        <div v-else><i class="fas fa-search"></i> Search</div>
      </b-button>
    </form>
    <hr />
    <SearchResults v-if="allResults.length > 0" />
    <b-button href="#schedule" class="mt-4">
      <i class="fas fa-calendar-alt"></i> Back to schedule
    </b-button>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SearchResults from "@/components/SearchResults";

export default {
  name: "Search",
  components: { SearchResults },
  data() {
    return {
      department: null,
      departmentState: null,
    };
  },
  computed: {
    ...mapGetters([
      "currentPlan",
      "allDeptsAsSelect",
      "allResults",
      "isSearching",
    ]),
  },
  methods: {
    ...mapActions(["loadAllDepts", "search"]),
    checkFormValidity() {
      const valid = this.$refs.searchForm.checkValidity();
      this.departmentState = valid;
      return valid;
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      const searchParams = {
        term: this.currentPlan.term,
        department: this.department,
      };
      this.search(searchParams);
    },
  },
  created() {
    this.loadAllDepts();
  },
};
</script>
