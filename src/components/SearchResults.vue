<template>
  <div class="p-2 shadow rounded border border-info">
    <div v-for="course in allResults" :key="course.count" class="w-100">
      <b-button
        v-b-toggle="'course-collapse-' + course.count"
        block
        squared
        variant="info"
        class="d-flex justify-content-start"
      >
        <span class="p-2 when-opened"><i class="fas fa-folder-open"></i></span>
        <span class="p-2 when-closed"><i class="fas fa-folder"></i></span>
        <span class="p-2">
          {{ formattedTitle(course.title).dept }}
        </span>
        <span class="p-2">
          {{ formattedTitle(course.title).num }}
        </span>
        <span class="ml-auto p-2">
          {{ formattedTitle(course.title).title }}
        </span>
      </b-button>
      <b-collapse :id="'course-collapse-' + course.count">
        <b-container fluid class="p-2">
          <b-button-group vertical class="w-100">
            <SectionInfo
              v-for="section in course.sections"
              :key="section.code"
              :section="section"
            />
          </b-button-group>
        </b-container>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SectionInfo from "./SectionInfo";
import { formatTitle } from "@/utils/formatting";

export default {
  name: "SearchResults",
  components: { SectionInfo },
  computed: {
    ...mapGetters(["allResults"])
  },
  methods: {
    formattedTitle(titleStr) {
      return formatTitle(titleStr);
    }
  }
};
</script>

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
