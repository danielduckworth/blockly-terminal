<script setup lang="ts">
import { tabsStore } from '../stores/tabs';
// import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps<{
  modelValue?: boolean;
}>();

</script>

<template>
  <v-card class="mx-0 mt-0 mb-0 pb-0 content-card" elevation="5" rounded="0">
    <v-tabs v-model="tabsStore.activeTab" bg-color="blue-lighten-5">
      <v-tab value="tab-1">Overview</v-tab>
      <v-tab value="tab-2">Output</v-tab>
      <v-tab value="tab-3">Code</v-tab>
    </v-tabs>

      <v-window v-model="tabsStore.activeTab">
        <!-- <perfect-scrollbar> -->

        <v-window-item value="tab-1">
          <v-card flat>
            <v-card-text>
              <slot name="tab-1" />
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <slot name="tab-2" />
            </v-card-text>
          </v-card>
        </v-window-item>

        <v-window-item value="tab-3">
          <v-card flat>
            <v-card-text>
              <slot name="tab-3" />
            </v-card-text>
          </v-card>
        </v-window-item>
        <!-- </perfect-scrollbar> -->

      </v-window>
      <slot name="actions"></slot>
  </v-card>
</template>
<style lang="scss" scoped>

.content-card {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

// .ps {
//   height: 50vh;
//   width: 100%;
//   overflow: hidden;
// }

</style>
