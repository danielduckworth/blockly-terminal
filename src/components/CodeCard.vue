<script setup lang="ts">
import { ref } from "vue";
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

// const useSshPre = () => {
//   const code = ref("const a = b");
//   return {
//     code,
//   };
// };

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  dark: {
    type: Boolean,
    required: false,
  },
  reactive: {
    type: Boolean,
    required: false,
  },
});

// const { code } = useSshPre();
</script>

<template>
  <div>
    <!-- A vuetify card styled to look like a terminal with syntax highlighting -->
    <v-card
      class="mx-auto"
      max-width="800"
      dark
      outlined
      :theme="SshPre"
      elevation="10"
    >
      <v-card-title class="px-4 py-2">
        <v-icon class="mr-2">mdi-code-tags</v-icon>
        <span class="title font-weight-light">Code</span>
      </v-card-title>

      <ssh-pre
        class="px-4 py-2"
        :code="props.code"
        :language="props.language"
        :label="props.label"
        :dark="props.dark"
        :reactive="true"
      >
        <slot></slot>
      </ssh-pre>
    </v-card>
  </div>
</template>

<style scoped>
.txt {
  color: #333;
}
.comment {
  color: #aaa;
}
.quote {
  color: #c11;
}
.number {
  color: #c11;
}
.boolean {
  color: #c11;
}
.keyword {
  color: #33c;
}
.this {
  color: #c6d;
}
.punctuation {
  color: #99f;
}
.external-var,
.special {
  color: #f63;
}
.variable {
  color: #29e;
}
.obj-attr {
  color: #0bc;
}

[data-type="shell"] .keyword {
  color: #ff5252;
}
[data-type="shell"] .param {
  color: #f63;
}

[data-type="html"] .doctype {
  color: #02027e;
}
[data-type="html"] .tag-name {
  color: #11c;
}
[data-type="html"] .attribute {
  color: #f63;
}

[data-type="html-vue"] .doctype {
  color: #02027e;
}
[data-type="html-vue"] .tag-name {
  color: #42b983;
}
[data-type="html-vue"] .punctuation {
  color: #128953;
}
[data-type="html-vue"] .attribute {
  color: #ff5252;
}

[data-type="xml"] .doctype {
  color: #02027e;
}
[data-type="xml"] .tag-name {
  color: #11c;
}
[data-type="xml"] .attribute {
  color: #f93;
}

[data-type="css"] .selector {
  color: #f0d;
}
[data-type="css"] .class-id {
  color: #f0d;
}
[data-type="css"] .pseudo {
  color: #f35;
}
[data-type="css"] .keyword {
  color: #f5f;
}
[data-type="css"] .vendor {
  color: #0c8;
}
[data-type="css"] .keyword {
  color: #c06;
}
[data-type="css"] .attribute {
  color: #70d;
}
[data-type="css"] .keyword {
  color: #e28;
}
[data-type="css"] .vendor {
  color: #0c8;
}
[data-type="css"] .value {
  color: #c11;
}
[data-type="css"] .vendor {
  color: #0c8;
}
[data-type="css"] .color {
  background: #eee;
}
[data-type="css"] .unit {
  color: #0bc;
}
[data-type="css"] .important {
  color: #f00;
}

[data-type="sql"] .var-type {
  color: #f63;
  font-weight: bold;
}
</style>
