<template>
  <b-modal
    id="load-schedule-modal"
    ref="modal"
    title="Load an existing schedule"
    ok-title="Load"
    @ok="handleOk"
    @shown="focusPlanNameInput"
  >
    <b-form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        label="Plan Name"
        label-for="load-plan-name-input"
        :state="nameState"
        invalid-feedback="A plan name is required"
      >
        <b-form-input
          ref="loadPlanNameInput"
          id="load-plan-name-input"
          type="text"
          v-model="name"
          :state="nameState"
          required
          placeholder="panteater"
        />
      </b-form-group>
      <b-form-group label="Term" label-for="load-plan-term-input">
        <b-form-select id="load-plan-term-input" v-model="term" :options="options"></b-form-select>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import toast from "@/utils/toast";

export default {
  name: "LoadScheduleModal",
  data() {
    return {
      name: "",
      nameState: null,
      term: "2020-FALL",
      options: [{ value: "2020-FALL", text: "2020 Fall" }]
    };
  },
  methods: {
    ...mapActions(["loadPlan"]),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    focusPlanNameInput() {
      this.$refs.loadPlanNameInput.focus();
    },
    handleOk(e) {
      e.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      // Actually submit the data
      this.loadPlan({ name: this.name, term: this.term }).then(res => {
        if (res.status === 200) {
          toast.call(
            this,
            "Plan successfully loaded",
            `Plan named ${res.plan.name} for the ${res.plan.term} term`,
            "success"
          );
          this.resetModal();
        } else {
          toast.call(this, "Error", res.message, "danger");
        }
      });

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("load-schedule-modal");
      });
    }
  }
};
</script>

<style></style>
