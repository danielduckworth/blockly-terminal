<script setup lang="ts">
import { ref } from "vue";
import BlocklyComponent from "@/components/BlocklyComponent.vue";

// import "./blocks/stocks";
import { javascriptGenerator } from "blockly/javascript";

//custom imports
import { tabsStore } from "./stores/tabs";
// import options from "@/imports/options";
import BlocklyTerminal from "@/components/blockly-terminal/index.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

// prismjs
import "prismjs";
import "prismjs/themes/prism.css";

const options = workspace.options;
const demoWorkspace = ref();
const genCode = ref();
const alertMessage = ref<string[]>([]);

// Blockly.javascriptGenerator.serialization.workspaces.load(startBlocks, demoWorkspace);

function generateCode() {
  tabsStore.activeTab = "tab-3";
  // Generate JavaScript code and store the code string in genCode.
  javascriptGenerator.addReservedWords("code");
  var code = javascriptGenerator.workspaceToCode(demoWorkspace.value.workspace);
  genCode.value = code;
  console.log("Code generated with genCode", genCode.value);
}

function runCode() {
  tabsStore.activeTab = "tab-2";
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
workspace.addChangeListener(generateCode);
</script>

<template>
  <div id="app">
    <v-container>
      <BlocklyComponent id="blockly1" :options="options" ref="demoWorkspace">
      </BlocklyComponent>
      <v-card id="terminal" flat class="mx-auto rounded-0">
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

            <div
              v-for="message in alertMessage"
              :key="message"
              id="terminal__prompt"
            >
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
          <v-btn variant="flat" color="primary" @click="runCode"
            >Run Code</v-btn
          >
          <v-btn variant="tonal" color="secondary" @click="generateCode"
            >Show Code</v-btn
          >
        </v-card-actions>

        <!-- Start content card -->
        <ContentCard>

          <!-- Start Tab 1 Content -->
          <template v-slot:tab-1>
            <v-card-title class="text-h5">Unscramble the eggs</v-card-title>
            <PerfectScrollbar>
              <v-card-text class="text-h6 pb-0">Description</v-card-text>
              <v-card-text>
                <p class="text-body-1">
                  The string given to your function has had an "egg" inserted
                  directly after each consonant. You need to return the string
                  before it became eggcoded.
                </p>
              </v-card-text>
              <v-card-text class="text-h6 pb-0">Example</v-card-text>
              <v-card-text class="pt-0">
                <!-- TODO: Install antfu/vite-plugin-md -->
                <ssh-pre class="ssh-pre__content__example"  reactive language="js">
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
                </ssh-pre>
              </v-card-text>
            </PerfectScrollbar>
          </template>
          <!-- End Tab 1 Content -->

          <!-- Start Tab 2 Content -->
          <template v-slot:tab-3>
            <v-card-title class="headline">Output</v-card-title>
            <!-- Prismjs syntax highlight -->
            <v-card-text>
              <ssh-pre class="ssh-pre__content" reactive language="js">
                {{ genCode }}</ssh-pre
              >
            </v-card-text>
          </template>
          <!-- End Tab 2 Content -->

          <!-- Start Tab 3 Content -->
          <template v-slot:tab-2>
            <v-card-title class="headline">Code</v-card-title>
            <v-card-text v-if="alertMessage">
              <ssh-pre class="ssh-pre__content" reactive language="js">
                {{ alertMessage }}</ssh-pre
              >
            </v-card-text>
          </template>
          <!-- End Tab 3 Content -->
        </ContentCard>
        <!-- End content card -->
        <div></div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.myLabelStyle > .blocklyFlyoutLabelText {
  font-style: italic;
  fill: green;
}

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  size: 12;
  overflow-y: auto;
}

html {
  overflow-y: auto;
}

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
  height: 29vh;
}

.ssh-pre__content {
  height: 29vh;
  padding-left: 1em;
  overflow-y: scroll;
}

.ssh-pre__content__example {
  padding-left: 1em;
 //  overflow-y: scroll;
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
import ContentCard from "./components/ContentCard.vue";

export default {
  components: {
    SshPre,
    ContentCard,
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
