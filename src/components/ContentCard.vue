<script setup lang="ts">
import { ref } from "vue";
import { store } from '../stores/tabs';

const props = defineProps<{
  modelValue?: boolean;
}>();

</script>

<template>
  <v-card class="mx-2 mt-5 mb-5 pb-5" height="480">
    <v-tabs v-model="store.activeTab" bg-color="blue-lighten-5">
      <v-tab value="tab-1">Overview</v-tab>
      <v-tab value="tab-2">Output</v-tab>
      <v-tab value="tab-3">Code</v-tab>
    </v-tabs>

      <v-window v-model="store.activeTab">
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
  </v-card>
</template>
<style lang="scss" scoped></style>
