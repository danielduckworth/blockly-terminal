import Blockly from "blockly";
import { Workspace } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { tabsStore } from '../stores/tabs';
import { outputStore } from '../stores/outputs';

function generateCode(workspace: Workspace) {
  tabsStore.activeTab = "tab-3";
  // Generate JavaScript code and store the code string in genCode.
  javascriptGenerator.addReservedWords("code");
  var code = javascriptGenerator.workspaceToCode(workspace);
  console.log("Code generated with genCode", code);
}

function showCode(workspace: Workspace) {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  alert(code);
}

function runCode(workspace: Workspace) {
  tabsStore.activeTab = "tab-2";
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  // Loop trap not working
  javascriptGenerator.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = javascriptGenerator.workspaceToCode(workspace);
  javascriptGenerator.INFINITE_LOOP_TRAP = null;
  // Redirect window.alert to a function that populates alertMessage with output.
  window.alert = function (message: string) {
    outputStore.msg.value.push(message);
    console.log("Print output:", message);
  };
  try {
    eval(code);
  } catch (e) {
    window.alert(e);
  }
}
