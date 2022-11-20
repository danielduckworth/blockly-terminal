<script setup lang="ts">
import { ref } from "vue";
import BlocklyComponent from "@/components/BlocklyComponent.vue";

// import "./blocks/stocks";
import {javascriptGenerator} from 'blockly/javascript';

//custom imports
import options from "@/imports/options";
import BlocklyTerminal from "@/components/blockly-terminal/index.vue";
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

// prismjs
import "prismjs";
import "prismjs/themes/prism.css";

const demoWorkspace = ref();
const genCode = ref();
const alertMessage = ref<string[]>([]);

// Blockly.javascriptGenerator.serialization.workspaces.load(startBlocks, demoWorkspace);

function generateCode() {
  // Generate JavaScript code and store the code string in genCode.
  javascriptGenerator.addReservedWords('code');
  var code = javascriptGenerator.workspaceToCode(demoWorkspace.value.workspace);
  genCode.value = code;
  console.log("Code generated with genCode", genCode.value);
}

function runCode() {
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  // Loop trap not working
  javascriptGenerator.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = javascriptGenerator.workspaceToCode(demoWorkspace.value.workspace);
  javascriptGenerator.INFINITE_LOOP_TRAP = null;
  // Redirect window.alert to a function that populates alertMessage with output.
  window.alert = function (message: string) {
    alertMessage.value.push(message);
    console.log("Print output:", message);
  };
  try {
    eval(code);
  } catch (e) {
    window.alert(e);
  }
}

</script>

<template>
  <div id="app">
    <v-container>
      <BlocklyComponent id="blockly1" :options="options" ref="demoWorkspace">
      </BlocklyComponent>
      <v-card id="terminal" class="mx-auto">
        <!-- Terminal Start -->
        <BlocklyTerminal>
          <v-sheet height="100%" class="text-green-accent-2 bg-transparent">
            <!-- <span v-if="!alertMessage" id="terminal__prompt--cursor"></span> -->
            <div v-if="alertMessage.length == 0" id="terminal__prompt">
                <span id="terminal__prompt--user">@icils:</span>
                <span id="terminal__prompt--location">~</span>
                <span id="terminal__prompt--bling">$</span>
                <span id="terminal__prompt--cursor"></span>
              </div>

              <div  v-for="message in alertMessage" :key="message" id="terminal__prompt">
                <span id="terminal__prompt--user">@icils:</span>
                <span id="terminal__prompt--location">~</span>
                <span id="terminal__prompt--bling">$</span>
                <span class="ml-2">{{ message }}</span>
              </div>

            <div v-if="alertMessage.length > 0" id="terminal__prompt">
                <span id="terminal__prompt--user">@icils:</span>
                <span id="terminal__prompt--location">~</span>
                <span id="terminal__prompt--bling">$</span>
                <span id="terminal__prompt--cursor"></span>
            </div>
          </v-sheet>
        </BlocklyTerminal>
        <!-- Terminal End -->

        <v-card-actions class="spaced-evenly">
          <v-btn variant="flat" color="primary" @click="runCode">Run Code</v-btn>
          <v-btn variant="tonal" color="secondary" @click="generateCode">Show Code</v-btn>
        </v-card-actions>

        <!-- Prismjs syntax highlight -->
        <v-card-text v-if="genCode">
          <ssh-pre reactive language="js">{{
              genCode
          }}</ssh-pre>
        </v-card-text>
        <v-card-text v-if="alertMessage.length > 0">
              <ssh-pre reactive language="js">{{
                  alertMessage
              }}</ssh-pre>
            </v-card-text>
        <div>

          <perfect-scrollbar>
            <v-card-text >
              <p class="text-body-1" v-for="lorem in 25" :key="lorem">
              {{ lorem }}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </v-card-text>
        </perfect-scrollbar>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
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

.ps {
  height: 23vh;
}

#terminal {
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
}

#terminal__prompt {
  display: flex;
}

#terminal__prompt--user {
  color: #acffe7;
  font-size: 16px;
  /* line-height: 100%; */
  margin-left: 5px;
  opacity: 0.85;
}
#terminal__prompt--location {
  color: #4878c0;
}
#terminal__prompt--bling {
  color: #f8aeff;
  margin-right: 0.25em;
    white-space: pre;
}

#terminal__prompt--cursor {
  display: block;
  height: 17px;
  width: 8px;
  margin-left: 9px;
  animation: blink 1200ms linear infinite;
}

@keyframes blink {
  0% {
    background: #ffffff;
  }
  49% {
    background: #ffffff;
  }
  60% {
    background: transparent;
  }
  99% {
    background: transparent;
  }
  100% {
    background: #ffffff;
  }
}
</style>

<script lang="ts">
// TODO: Clean up this section
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
