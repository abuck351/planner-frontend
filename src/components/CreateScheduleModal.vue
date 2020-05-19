<template>
  <b-modal
    id="create-schedule-modal"
    ref="modal"
    title="Create a new schedule"
    ok-title="Create"
    @ok="handleOk"
    @shown="focusPlanNameInput"
  >
    <b-form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        description="You can use your UCInetID"
        label="Plan Name"
        label-for="create-plan-name-input"
        :state="nameState"
        invalid-feedback="A plan name is required"
      >
        <b-form-input
          ref="createPlanNameInput"
          id="create-plan-name-input"
          type="text"
          v-model="name"
          :state="nameState"
          required
          placeholder="panteater"
        />
      </b-form-group>
      <b-form-group label="Term" label-for="create-plan-term-input">
        <b-form-select id="create-plan-term-input" v-model="term" :options="options"></b-form-select>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
import toast from "@/utils/toast";

export default {
  name: "CreateScheduleModal",
  data() {
    return {
      name: "",
      nameState: null,
      term: "2020-FALL",
      options: [{ value: "2020-FALL", text: "2020 Fall" }]
    };
  },
  methods: {
    ...mapActions(["createPlan"]),
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
      this.$refs.createPlanNameInput.focus();
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
      this.createPlan({ name: this.name, term: this.term }).then(res => {
        if (res.status === 201) {
          toast.call(
            this,
            res.message,
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
        this.$bvModal.hide("create-schedule-modal");
      });
    }
  }
};
</script>

<style></style>
