<template>
  <b-container class="p-4">
    <form ref="form" @submit.stop.prevent="handleSubmit">
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
          ><template v-slot:first>
            <b-form-select-option :value="null" disabled
              >-- Please select a department --</b-form-select-option
            >
          </template></b-form-select
        >
      </b-form-group>
      <b-button
        type="submit"
        value="Submit"
        block
        variant="primary"
        :disabled="!currentPlan"
        ><i class="fas fa-search"></i> Search</b-button
      >
    </form>
    <hr />
    <SearchResults v-if="allResults.length > 0" />
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
      departmentState: null
    };
  },
  computed: {
    ...mapGetters(["currentPlan", "allDeptsAsSelect", "allResults"])
  },
  methods: {
    ...mapActions(["loadAllDepts", "search"]),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
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
        department: this.department
      };
      this.search(searchParams);

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("create-schedule-modal");
      });
    }
  },
  created() {
    this.loadAllDepts();
  }
};
</script>
