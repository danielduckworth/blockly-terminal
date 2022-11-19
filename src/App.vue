<script setup lang="ts">
import { ref } from "vue";
import BlocklyComponent from "@/components/BlocklyComponent.vue";
// import "./blocks/stocks";
import BlocklyJS from "blockly/javascript";
// import Toolbox from "@/toolbox";
// import Theme from "./theme";

//custom imports
import options from "@/imports/options";
import UbuntuTerminal from "@/components/ubuntu-terminal/index.vue";

// prismjs
import "prismjs";
import "prismjs/themes/prism.css";

const foo = ref();
const genCode = ref();
const codeString = ref();
const alert = ref(false);
const alertMessage = ref([]);

function generateCode() {
  genCode.value = BlocklyJS.javascriptGenerator.workspaceToCode(
    foo.value.workspace
  );
}

// Function to show the code using prismjs
function showCode() {
  generateCode();
  codeString.value = genCode.value;
}

// Function to run the code and capture the out from window.alert()
function runCode() {
  generateCode();
  window.alert = function (message) {
    alert.value = true;
    alertMessage.value.push(message);
    //alertMessage.value = message;
    console.log("output:", message);
  };
  try {
    eval(genCode.value)();
  } catch (message) {
    alert.value = true;
  }
}

// Function to get the current time
function generateTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var time = h + ":" + m + ":" + s;
  return time;
}
</script>

<template>
  <div id="app">
    <v-container>
      <BlocklyComponent id="blockly1" :options="options" ref="foo">
      </BlocklyComponent>

      <v-card id="terminal" class="mx-auto">

        <!-- Terminal Start -->
        <UbuntuTerminal>
          <v-sheet height="100%" class="text-green-accent-2 bg-transparent">

            <p class="ml-1" v-for="message in alertMessage" :key="message">
              {{ message }}
            </p>
            <!-- <v-btn variant="text" @click="hideAlert">Close</v-btn> -->
          </v-sheet>
        </UbuntuTerminal>
        <!-- Terminal End -->

        <v-card-actions class="spaced-evenly">
          <v-btn variant="flat" color="primary" @click="runCode">Run Code</v-btn>
          <v-btn variant="tonal" color="secondary" @click="showCode">Show Code</v-btn>
        </v-card-actions>

        <!-- Prismjs syntax highlight -->
        <v-card-text v-if="codeString" >

                <ssh-pre reactive language="js" code="codeString">{{ codeString }}</ssh-pre>

        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.myLabelStyle>.blocklyFlyoutLabelText {
  font-style: italic;
  fill: green;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  size: 12;
}

html,
body {
  margin: 0;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eceff1;
  margin: 0;
  line-height: 1.5;
}

#blockly1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  height: 100%;
}

#terminal {
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
}
</style>

<script lang="ts">
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
  components: {
    SshPre,
  },
  data() {
    return {
      taskList: {
        // your tasks
      },
      commandList: {
        // your commands
      },
    };
  },
};
</script>
