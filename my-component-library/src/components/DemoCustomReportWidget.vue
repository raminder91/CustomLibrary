<template>
  <div>
    <h2>Test successful</h2>
    <DxDataGrid :show-borders="true"></DxDataGrid>
  </div>
</template>

<script lang="ts">
import {
  DxDataGrid
} from 'devextreme-vue/data-grid';
export default {
    name: 'DemoCustomReportWidget',
    components: {
      DxDataGrid
    }
};
</script>

<style scoped></style>