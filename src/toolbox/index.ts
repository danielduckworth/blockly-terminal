// Define the toolbox with an xml string and specify the typescript type.

// import json from "./BasicToolbox.json";

// const toolbox = {
//   toolbox: json,
// };

const Toolbox = `
<xml id="toolbox" style="display: none">

<block type="controls_if"></block>
<block type="logic_compare"></block>
<block type="logic_operation"></block>
<label text="A label" web-class="myLabelStyle"></label>
<label text="Another label"></label>
<block type="logic_negate"></block>
<button text="A button" callbackKey="myFirstButtonPressed"></button>
<block type="logic_boolean"></block>
<block type="controls_repeat_ext">
<value name="TIMES">
<block type="math_number">
<field name="NUM">10</field>
</block>
</value>
</block>
<block type="controls_whileUntil"></block>
<block type="controls_repeat_ext" id="#oE|+l9fDltkPM|YCYZ#" x="0" y="10">
    <value name="TIMES">
      <block type="math_number" id="#LdFQ6.xAx=8MFz|?T)~">
        <field name="NUM">50</field>
      </block>
    </value>
    <statement name="DO">
      <block type="text_print" id="~_Wm?hFo=n8^]F5zpj1">
        <value name="TEXT">
          <block type="text" id="9oyAFn];)V*(MEKePBJs">
            <field name="TEXT">hello</field>
          </block>
        </value>
      </block>
    </statement>
  </block>

</xml>
`;

export default Toolbox;
