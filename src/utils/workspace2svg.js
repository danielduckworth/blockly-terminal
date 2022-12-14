// Path: apps/blockly-vuetify/src/toolbox/utils/workspace2svg.js
// A util to export the blocks from a worksapce as svg or png

// The following code is from 2020 and is not compatible with the latest version of Blockly

var DOMURL = self.URL || self.webkitURL || self;

function svg() {
  canvas = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);
  if (canvas.children[0] === undefined) throw "Couldn't find Blockly canvas.";

  canvas.removeAttribute("transform");

  var css =
    '<defs><style type="text/css" xmlns="http://www.w3.org/1999/xhtml"><![CDATA[' +
    Blockly.Css.CONTENT.join("") +
    "]]></style></defs>";
  var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
  var content = new XMLSerializer().serializeToString(canvas);

  xml =
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' +
    bbox.width +
    '" height="' +
    bbox.height +
    '" viewBox=" ' +
    bbox.x +
    " " +
    bbox.y +
    " " +
    bbox.width +
    " " +
    bbox.height +
    '">' +
    css +
    '">' +
    content +
    "</svg>";

  return new Blob([xml], { type: "image/svg+xml;base64" });
}

function download(url, filename) {
  let element = document.createElement("a");
  element.href = url;
  element.download = filename;
  element.click();
  DOMURL.revokeObjectURL(element.href);
}

function exportSVG() {
  download(DOMURL.createObjectURL(svg()), "blocks.svg");
}

function exportPNG() {
  var img = new Image();
  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    canvas.getContext("2d").drawImage(img, 0, 0);
    download(canvas.toDataURL("image/png"), "blocks.png");
  };
  img.src = DOMURL.createObjectURL(svg());
}

exportSVG();

// The following code is an attempt to make it work with the latest version of Blockly

import Blockly from "blockly";

function svg() {
  canvas = Blockly.mainWorkspace.svgBlockCanvas_.cloneNode(true);
  if (canvas.children[0] === undefined) throw "Couldn't find Blockly canvas.";

  canvas.removeAttribute("transform");

  var css =
    '<defs><style type="text/css" xmlns="http://www.w3.org/1999/xhtml"><![CDATA[' +
    Blockly.Css.CONTENT.join("") +
    "]]></style></defs>";
  var bbox = document.getElementsByClassName("blocklyBlockCanvas")[0].getBBox();
  var content = new XMLSerializer().serializeToString(canvas);

  xml =
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' +
    bbox.width +
    '" height="' +
    bbox.height +
    '" viewBox=" ' +
    bbox.x +
    " " +
    bbox.y +
    " " +
    bbox.width +
    " " +
    bbox.height +
    '">' +
    css +
    '">' +
    content +
    "</svg>";

  return new Blob([xml], { type: "image/svg+xml;base64" });
}

function download(url, filename) {
  let element = document.createElement("a");
  element.href = url;
  element.download = filename;
  element.click();
  DOMURL.revokeObjectURL(element.href);
}

function exportSVG() {
  download(DOMURL.createObjectURL(svg()), "blocks.svg");
}

function exportPNG() {
  var img = new Image();
  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    canvas.getContext("2d").drawImage(img, 0, 0);
    download(canvas.toDataURL("image/png"), "blocks.png");
  };
  img.src = DOMURL.createObjectURL(svg());
}

exportSVG();

