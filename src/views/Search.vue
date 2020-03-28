<template>
  <b-container class="p-4" fluid>
    <CurrentPlanAlert />
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
      <b-button type="submit" value="Submit" block variant="primary"
        ><i class="fas fa-search"></i> Search</b-button
      >
    </form>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CurrentPlanAlert from "@/components/CurrentPlanAlert";

export default {
  name: "Search",
  components: { CurrentPlanAlert },
  data() {
    return {
      department: null,
      departmentState: null
    };
  },
  computed: {
    ...mapGetters(["currentPlan", "allDeptsAsSelect"])
  },
  methods: {
    ...mapActions(["loadAllDepts"]),
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

      console.log("SEARCH");

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
