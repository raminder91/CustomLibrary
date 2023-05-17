<template>     
     <DemoCustomReportWidget></DemoCustomReportWidget>
    <!-- <component :is="customWidget" ref="widget">
    </component> -->
  </template>
  
  <script  lang="ts">
  import {  ref } from 'vue';
   //import DemoCustomChartView from './components/DemoCustomChartView.vue';
  import DemoCustomReportWidget from './components/DemoCustomReportWidget.vue';
  
  export default {
  name: 'app',
    components: {
 //   DemoCustomChartView,
    DemoCustomReportWidget
}, props: {
  
    }, setup() {
      const customWidget = ref<string>('DemoCustomChartView');
      return { customWidget }
    }
  };
  
  </script>
  
  <style scoped></style>