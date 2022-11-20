<script setup lang="ts">
import {ref} from "vue";
const props = defineProps<{
  modelValue?: boolean;
  activeTab?: string;
}>();

// const activeTab = ref("tab-1");
// const activeTab = ref(props.activeTab);
</script>

<template>
  <v-card>
    <v-toolbar density="compact" color="primary">
      <v-toolbar-title>User Profile</v-toolbar-title>
    </v-toolbar>
    <div class="d-flex flex-row">
      <v-tabs v-model="activeTab" direction="vertical" color="primary">
        <v-tab value="tab-1">
          <v-icon start> mdi-account </v-icon>
          Section 1
        </v-tab>
        <v-tab value="tab-2">
          <v-icon start> mdi-lock </v-icon>
          Show code
        </v-tab>
        <v-tab value="tab-3">
          <v-icon start> mdi-access-point </v-icon>
          Show output
        </v-tab>
      </v-tabs>
      <v-window v-model="activeTab">
        <v-window-item value="tab-1">
          <v-card flat>
            <v-card-text>
              <p class="text-md-overline">Section 1</p>
                <slot name="tab-1" />
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                aliquam libero, non adipiscing dolor urna a orci. Curabitur
                ligula sapien, tincidunt non, euismod vitae, posuere imperdiet,
                leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                hac habitasse platea dictumst. Fusce ac felis sit amet ligula
                pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc, quis gravida magna mi a libero. Nam commodo suscipit quam.
                In consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
                Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius
                tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
                iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <p class="text-md-overline">Code</p>
              <slot name="tab-2" />
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum
                aliquam libero, non adipiscing dolor urna a orci. Curabitur
                ligula sapien, tincidunt non, euismod vitae, posuere imperdiet,
                leo. Nunc sed turpis.
              </p>

              <p>
                Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque
                egestas, lacus ante convallis tellus, vitae iaculis lacus elit
                id tortor. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                hac habitasse platea dictumst. Fusce ac felis sit amet ligula
                pharetra condimentum.
              </p>

              <p>
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc, quis gravida magna mi a libero. Nam commodo suscipit quam.
                In consectetuer turpis ut velit. Sed cursus turpis vitae tortor.
                Aliquam eu nunc.
              </p>

              <p>
                Etiam ut purus mattis mauris sodales aliquam. Ut varius
                tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce
                fermentum odio nec arcu.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed,
                iaculis a, condimentum nec, nisi.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="tab-3">
          <v-card flat>
            <v-card-text>
              <p class="text-md-overline">Output</p>
              <slot name="tab-3" />
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis.
                Nam eget dui. Proin viverra, ligula sit amet ultrices semper,
                ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In
                dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque
                facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut,
                mi. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </div>
  </v-card>
</template>
