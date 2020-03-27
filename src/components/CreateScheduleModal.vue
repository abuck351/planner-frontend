<template>
  <b-modal
    id="create-schedule-modal"
    ref="modal"
    title="Create New Schedule"
    ok-title="Create"
    @ok="handleOk"
    @show="resetModal"
    @hidden="resetModal"
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
          id="create-plan-name-input"
          type="text"
          v-model="name"
          :state="nameState"
          required
          placeholder="panteater"
        />
      </b-form-group>
      <b-form-group label="Term" label-for="create-plan-term-input">
        <b-form-select
          id="create-plan-term-input"
          v-model="term"
          :options="options"
        ></b-form-select>
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
      term: "2020-SPRING",
      options: [
        { value: "2020-WINTER", text: "2020 Winter Quarter" },
        { value: "2020-SPRING", text: "2020 Spring Quarter" },
        { value: "2020-SUM1", text: "2020 Summer Session 1" },
        { value: "2020-SUM2", text: "2020 Summer Session 2" }
      ]
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
      this.createPlan({ name: this.name, term: this.term }).then(response => {
        if (response.status === 201) {
          toast.call(
            this,
            response.data.message,
            `Plan named ${response.data.plan.name} for the ${response.data.plan.term} term`,
            "success"
          );
        } else {
          toast.call(this, "Error", response.data.message, "danger");
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
