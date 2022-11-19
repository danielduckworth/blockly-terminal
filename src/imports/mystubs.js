Blockly.JavaScript['draw_symbol'] = function(block) {
  var dropdown_symbol_select = block.getFieldValue('SYMBOL_SELECT');
  var value_x_coordinate = Blockly.JavaScript.valueToCode(block, 'X_COORDINATE', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_coordinate = Blockly.JavaScript.valueToCode(block, 'Y_COORDINATE', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['x_coordinate'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['y_coordinate'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['print_4'] = function(block) {
  var value_s1 = Blockly.JavaScript.valueToCode(block, 'S1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s2 = Blockly.JavaScript.valueToCode(block, 'S2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s3 = Blockly.JavaScript.valueToCode(block, 'S3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_s4 = Blockly.JavaScript.valueToCode(block, 'S4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['when_click'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['set_var_to_mouse_click'] = function(block) {
  var variable_x = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['var_between_int_range'] = function(block) {
  var variable_x = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  var dropdown_range_start = block.getFieldValue('RANGE_START');
  var dropdown_range_end = block.getFieldValue('RANGE_END');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['x_variable'] = function(block) {
  var variable_x = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['y_variable'] = function(block) {
  var variable_y = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['if_between_do'] = function(block) {
  var value_condition1 = Blockly.JavaScript.valueToCode(block, 'CONDITION1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement1 = Blockly.JavaScript.statementToCode(block, 'STATEMENT1');
  var value_condition2 = Blockly.JavaScript.valueToCode(block, 'CONDITION2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement2 = Blockly.JavaScript.statementToCode(block, 'STATEMENT2');
  var value_condition3 = Blockly.JavaScript.valueToCode(block, 'CONDITION3', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_statement3 = Blockly.JavaScript.statementToCode(block, 'STATEMENT3');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['set_x_to_mouse_click'] = function(block) {
  var variable_x = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['set_y_to_mouse_click'] = function(block) {
  var variable_y = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['number_list'] = function(block) {
  var dropdown_number = block.getFieldValue('NUMBER');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string_block'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mouse_click_x'] = function(block) {
  var variable_x = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mouse_click_y'] = function(block) {
  var variable_y = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};