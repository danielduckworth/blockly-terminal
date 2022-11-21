<script setup lang="ts">
import { ref, onMounted } from "vue";
// Components
import Blockly from "blockly";
import BlocklyComponent from "@/components/BlocklyComponent.vue";
import BlocklyTerminal from "@/components/blockly-terminal/index.vue";
import ContentCard from "@/components/ContentCard.vue";
// Plugins
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
// Stores
import { optionsStore, workspaceStore } from "@/stores/workspaces";
import * as functions from "@/stores/workspaces";
import { outputsStore } from "@/stores/workspaces";
import { tabsStore } from "@/stores/tabs";
// Workspace data
import toolbox from "./toolbox.json";
import startBlocks from "./startBlocks.json";

// Set store data
optionsStore.toolbox = toolbox;
workspaceStore.startBlocks = startBlocks;
const workspace = Blockly.getMainWorkspace();
workspaceStore.workspace = workspace;
tabsStore.activeTab = "tab-1";

onMounted(() => {
  functions.initWorkspaceState();
});
</script>

<template>
  <v-app>
    <BlocklyComponent id="blockly1" :options="optionsStore" ref="workspace">
    </BlocklyComponent>
    <v-card id="content" flat class="mx-auto rounded-0">
      <!-- Terminal Start -->
      <BlocklyTerminal id="terminal">
        <template v-slot:top>
          <v-toolbar flat class="rounded-0" density="compact" color="blue-lighten-5">
            <v-card-title>
              <v-icon color="primary" icon="mdi-code-greater-than"></v-icon>
              <span class="ml-2 text-h6 font-weight-bold">Blockly Terminal</span>
            </v-card-title>
            <v-spacer />
            <!-- <v-toolbar-title class="font-weight-bold text-h5 text-blue-grey-darken-3">Blockly Terminal</v-toolbar-title> -->
            <v-btn icon color="primary" @click="functions.runCode">
              <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn icon color="secondary" @click="functions.generateCode">
              <v-icon>mdi-code-tags</v-icon>
            </v-btn>
            <v-btn icon color="secondary" @click="functions.clearMSG">
              <v-icon>mdi-restart</v-icon>
            </v-btn>
          </v-toolbar>
        </template>

        <v-sheet height="100%" class="text-green-accent-2 bg-transparent">
          <!-- <span v-if="!alertMessage" id="terminal__prompt--cursor"></span> -->
          <div v-if="outputsStore.msg.length == 0" id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span id="terminal__prompt--cursor"></span>
          </div>

          <div v-for="message in outputsStore.msg" :key="message" id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span class="ml-2">{{ message }}</span>
          </div>

          <div v-if="outputsStore.msg.length > 0" id="terminal__prompt">
            <span id="terminal__prompt--user">@icils:</span>
            <span id="terminal__prompt--location">~</span>
            <span id="terminal__prompt--bling">$</span>
            <span id="terminal__prompt--cursor"></span>
          </div>
        </v-sheet>
      </BlocklyTerminal>
      <!-- Terminal End -->

      <!-- Start content card -->
      <ContentCard id="cotent-card">
        <!-- Start Tab 1 Content -->
        <template v-slot:tab-1>
          <!-- <v-card-title class="text-h5">Unscramble the eggs</v-card-title> -->
          <PerfectScrollbar>
            <v-card-text class="text-h6 pb-0">Unscramble the eggs</v-card-text>
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
              <ssh-pre class="ssh-pre__content__example" reactive language="js">
unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"
              </ssh-pre>
            </v-card-text>
          </PerfectScrollbar>
        </template>
        <!-- End Tab 1 Content -->

        <!-- Start Tab 2 Content -->
        <template v-slot:tab-2>
          <v-card-title class="headline">Output</v-card-title>
          <v-card-text v-if="outputsStore.msg">
            <ssh-pre class="ssh-pre__content" reactive language="js">
              {{ outputsStore.msg }}</ssh-pre>
          </v-card-text>
        </template>
        <!-- End Tab 2 Content -->

        <!-- Start Tab 3 Content -->
        <template v-slot:tab-3>
          <v-card-title class="headline">Code</v-card-title>
          <!-- Prismjs syntax highlight -->
          <v-card-text>
            <ssh-pre class="ssh-pre__content" reactive language="js">
              {{ outputsStore.code }}
            </ssh-pre>
          </v-card-text>
        </template>
        <!-- End Tab 3 Content -->
      </ContentCard>
      <!-- End content card -->
    </v-card>
  </v-app>
</template>

<style lang="scss" scoped>
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
  width: 55%;
  height: 100%;
}

#content {
  position: absolute;
  right: 0;
  top: 0;
  width: 45%;
  height: 100%;
}

#terminal {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 40%;
}

#cotent-card {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 60%;
}

.ps {
  height: 45vh;
}

.ssh-pre__content {
  height: 25vh;
  padding-left: 1em;
  overflow-y: scroll;
}

.ssh-pre__content__example {
  padding-left: 1em;
  //  overflow-y: scroll;
}

#terminal__prompt {
  display: flex;
  // align-items: center;
  // height: 2.5em;
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
