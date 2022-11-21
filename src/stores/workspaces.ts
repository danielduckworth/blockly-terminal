// outputs.ts
import { reactive, ref } from "vue";
import Blockly from "blockly";
import { javascriptGenerator } from 'blockly/javascript';

export const workspaceStore = reactive({
  workspace: ref(),
  startBlocks: ref(),
});

export const optionsStore = reactive({
  toolbox: ref(),
  theme: ref(), // import Theme from "@/theme/index";
  collapse: false,
  comments: false,
  disable: false,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  media: "https://blockly-demo.appspot.com/static/media/",
  rtl: false,
  scrollbars: true,
  sounds: false,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 1,
    colour: "#888",
    snap: true,
  },
  zoom: {
    controls: true,
    wheel: false,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },
});

export const outputsStore = reactive({
  msg: ref([]),
  code: ref(),
});


export function saveJSON() {
  var workspace = Blockly.getMainWorkspace();
  var state = Blockly.serialization.workspaces.save(workspace);
  var json = JSON.stringify(state);
  console.log("Workspace state saved to localstorage as JSON: " + json);
  localStorage.setItem("blocklyTerminal", json);
}

export function loadJSON() {
  var workspace = Blockly.getMainWorkspace();
  var json = localStorage.getItem("blocklyTerminal");
  if (json) {
    Blockly.serialization.workspaces.load(JSON.parse(json), workspace);
  }
}

export function initWorkspaceState() {
  var startBlocks = workspaceStore.startBlocks;
  var workspace = Blockly.getMainWorkspace();
  Blockly.serialization.workspaces.load(startBlocks, workspace);
}

export function generateCode() {
  var workspace = Blockly.getMainWorkspace();
  // Generate JavaScript code and store the code string in genCode.
  javascriptGenerator.addReservedWords("code");
  // var code = javascriptGenerator.workspaceToCode(workspace);
  outputsStore.code = javascriptGenerator.workspaceToCode(workspace);
  console.log("Code generated with genCode", outputsStore.code);
}

export function showCode() {
  var workspace = Blockly.getMainWorkspace();
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  alert(code);
}

export function runCode() {
  var workspace = Blockly.getMainWorkspace();
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  // Loop trap not working
  javascriptGenerator.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = javascriptGenerator.workspaceToCode(workspace);
  javascriptGenerator.INFINITE_LOOP_TRAP = null;
  // Redirect window.alert to a function that populates alertMessage with output.
  window.alert = function (message: string) {
    outputsStore.msg.push(message);
    console.log("Print output:", message);
  };
  try {
    eval(code);
  } catch (e) {
    window.alert(e);
  }
}

export function clearMSG() {
  outputsStore.msg = [];
}
