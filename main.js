/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\np {\r\n  text-wrap: pretty;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-wrap: balance;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Courier New\", Courier, monospace;\r\n  background-color: #001f3f;\r\n  color: #ffffff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  background-image: url(\"https://p4.wallpaperbetter.com/wallpaper/340/757/197/world-of-warships-battlefield-naval-ocean-wallpaper-preview.jpg\"); /* Placeholder for ocean image */\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.container {\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);\r\n  width: 90%;\r\n  max-width: 400px;\r\n  border: 2px solid #0074d9;\r\n}\r\n\r\n.game-container {\r\n  text-align: center;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);\r\n  width: 90%;\r\n  max-width: 800px;\r\n  border: 2px solid #0074d9;\r\n}\r\n\r\n.title {\r\n  font-size: 3rem;\r\n  margin-bottom: 20px;\r\n  color: #0074d9;\r\n  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.player-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.label {\r\n  font-size: 1.5rem;\r\n  margin-bottom: 10px;\r\n  color: #7fdbff;\r\n}\r\n\r\n.input {\r\n  padding: 12px;\r\n  font-size: 1rem;\r\n  border: 2px solid #7fdbff;\r\n  border-radius: 4px;\r\n  margin-bottom: 20px;\r\n  outline: none;\r\n  background-color: #001f3f;\r\n  color: #ffffff;\r\n}\r\n\r\n.input::placeholder {\r\n  color: #7fdbff;\r\n}\r\n\r\n.start-button {\r\n  background-color: #0074d9;\r\n  color: #fff;\r\n  border: 2px solid #7fdbff;\r\n  border-radius: 4px;\r\n  padding: 12px;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s, transform 0.2s;\r\n}\r\n\r\n.start-button:hover {\r\n  background-color: #005bb5;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.displayer {\r\n  font-size: 1.5rem;\r\n  color: #7fdbff;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.grid-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.grid {\r\n  width: 48%;\r\n}\r\n\r\n.grid h2 {\r\n  color: #0074d9;\r\n}\r\n\r\n.grid-board {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-gap: 1px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.grid-cell {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #003b5c;\r\n  border: 1px solid #0074d9;\r\n}\r\n\r\n.grid-cell.highlight {\r\n  background-color: rgba(0, 255, 0, 0.5);\r\n}\r\n\r\n.grid-cell.painted {\r\n  background-color: rgba(0, 0, 255, 0.5);\r\n}\r\n\r\n.grid-pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.grid-cell-hover {\r\n  background-color: grey;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.grid-cell.attacked {\r\n  cursor: not-allowed;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .title {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n  .input,\r\n  .start-button {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .label {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .grid-container {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .grid {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classFactory.js":
/*!*****************************!*\
  !*** ./src/classFactory.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Ship {\r\n  constructor(name, length) {\r\n    this.name = name;\r\n    this.length = length;\r\n    this.hitStatus = 0;\r\n  }\r\n\r\n  hit() {\r\n    this.hitStatus += 1;\r\n  }\r\n\r\n  isSunk() {\r\n    return this.hitStatus >= this.length;\r\n  }\r\n}\r\n\r\nclass Gameboard {\r\n  constructor(size = 10) {\r\n    this.size = size;\r\n    this.board = Array(size)\r\n      .fill(null)\r\n      .map(() => Array(size).fill(null));\r\n    this.missedAttacks = [];\r\n    this.ships = [];\r\n  }\r\n\r\n  placeShip(ship, x, y, direction) {\r\n    if (this.isValidPlacement(ship, x, y, direction)) {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (direction === \"horizontal\") {\r\n          this.board[y][x + i] = ship;\r\n        } else if (direction === \"vertical\") {\r\n          this.board[y + i][x] = ship;\r\n        }\r\n      }\r\n      this.ships.push(ship);\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  isValidPlacement(ship, x, y, direction) {\r\n    if (direction === \"horizontal\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (x + i >= this.size || this.board[y][x + i] !== null) return false;\r\n      }\r\n    } else if (direction === \"vertical\") {\r\n      for (let i = 0; i < ship.length; i++) {\r\n        if (y + i >= this.size || this.board[y + i][x] !== null) return false;\r\n      }\r\n    }\r\n    return true;\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    if (this.board[y][x] !== null) {\r\n      this.board[y][x].hit();\r\n      return true;\r\n    } else {\r\n      this.missedAttacks.push([x, y]);\r\n      return false;\r\n    }\r\n  }\r\n\r\n  allSunk() {\r\n    return this.ships.every((ship) => ship.isSunk());\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor(name, type) {\r\n    this.name = name;\r\n    this.type = type;\r\n    this.gameboard = new Gameboard();\r\n    this.attacksMade = [];\r\n    this.hitQueue = [];\r\n  }\r\n\r\n  receiveAttack(x, y) {\r\n    return this.gameboard.receiveAttack(x, y);\r\n  }\r\n\r\n  placeShip(ship, x, y, direction) {\r\n    if (this.gameboard.isValidPlacement(ship, x, y, direction)) {\r\n      this.gameboard.placeShip(ship, x, y, direction);\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  makeAttack(opponent) {\r\n    let attackX, attackY;\r\n\r\n    if (this.hitQueue.length > 0) {\r\n      [attackX, attackY] = this.hitQueue.shift();\r\n    } else {\r\n      do {\r\n        attackX = Math.floor(Math.random() * this.gameboard.size);\r\n        attackY = Math.floor(Math.random() * this.gameboard.size);\r\n      } while (\r\n        this.attacksMade.some(([x, y]) => x === attackX && y === attackY)\r\n      );\r\n    }\r\n\r\n    this.attacksMade.push([attackX, attackY]);\r\n\r\n    const hit = opponent.receiveAttack(attackX, attackY);\r\n\r\n    if (hit) {\r\n      this.enqueueAdjacentCells(attackX, attackY, opponent.gameboard.size);\r\n    }\r\n\r\n    return { hit, attackX, attackY };\r\n  }\r\n\r\n  enqueueAdjacentCells(x, y, boardSize) {\r\n    const directions = [\r\n      [0, 1],\r\n      [0, -1],\r\n      [1, 0],\r\n      [-1, 0],\r\n    ];\r\n\r\n    directions.forEach(([dx, dy]) => {\r\n      const newX = x + dx;\r\n      const newY = y + dy;\r\n\r\n      if (\r\n        newX >= 0 &&\r\n        newX < boardSize &&\r\n        newY >= 0 &&\r\n        newY < boardSize &&\r\n        !this.attacksMade.some(([ax, ay]) => ax === newX && ay === newY) &&\r\n        !this.hitQueue.some(([qx, qy]) => qx === newX && qy === newY)\r\n      ) {\r\n        this.hitQueue.push([newX, newY]);\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nmodule.exports = { Ship, Gameboard, Player };\r\n\n\n//# sourceURL=webpack://battleship/./src/classFactory.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDirectionButtonListeners: () => (/* binding */ addDirectionButtonListeners),\n/* harmony export */   addEnemyGridHoverEffect: () => (/* binding */ addEnemyGridHoverEffect),\n/* harmony export */   addGridEventListeners: () => (/* binding */ addGridEventListeners),\n/* harmony export */   changeGridPointer: () => (/* binding */ changeGridPointer),\n/* harmony export */   hideButtons: () => (/* binding */ hideButtons),\n/* harmony export */   highlightCells: () => (/* binding */ highlightCells),\n/* harmony export */   paintCells: () => (/* binding */ paintCells),\n/* harmony export */   removeGridPointer: () => (/* binding */ removeGridPointer),\n/* harmony export */   updateDisplayMessage: () => (/* binding */ updateDisplayMessage)\n/* harmony export */ });\nconst updateDisplayMessage = (message) => {\r\n  const displayer = document.querySelector(\"#displayer\");\r\n  displayer.textContent = message;\r\n};\r\n\r\nfunction paintCells(x, y, length, direction) {\r\n  const grid = document.getElementById(\"friendly-waters\");\r\n  for (let i = 0; i < length; i++) {\r\n    let cell;\r\n    if (direction === \"horizontal\") {\r\n      cell = grid.querySelector(`[data-x=\"${x + i}\"][data-y=\"${y}\"]`);\r\n    } else {\r\n      cell = grid.querySelector(`[data-x=\"${x}\"][data-y=\"${y + i}\"]`);\r\n    }\r\n    if (cell) {\r\n      cell.classList.add(\"painted\");\r\n    }\r\n  }\r\n}\r\n\r\nfunction highlightCells(x, y, length, direction, action) {\r\n  const grid = document.getElementById(\"friendly-waters\");\r\n  for (let i = 0; i < length; i++) {\r\n    let cell;\r\n    if (direction === \"horizontal\") {\r\n      cell = grid.querySelector(`[data-x=\"${x + i}\"][data-y=\"${y}\"]`);\r\n    } else {\r\n      cell = grid.querySelector(`[data-x=\"${x}\"][data-y=\"${y + i}\"]`);\r\n    }\r\n    if (cell) {\r\n      if (action === \"highlight\") {\r\n        cell.classList.add(\"highlight\");\r\n      } else {\r\n        cell.classList.remove(\"highlight\");\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction addGridEventListeners(grid, ships, getCurrentShipIndex, getDirection) {\r\n  grid.addEventListener(\"mouseover\", (event) => {\r\n    if (\r\n      event.target.classList.contains(\"grid-cell\") &&\r\n      getCurrentShipIndex() < ships.length\r\n    ) {\r\n      const x = parseInt(event.target.dataset.x);\r\n      const y = parseInt(event.target.dataset.y);\r\n      highlightCells(\r\n        x,\r\n        y,\r\n        ships[getCurrentShipIndex()].length,\r\n        getDirection(),\r\n        \"highlight\"\r\n      );\r\n    }\r\n  });\r\n\r\n  grid.addEventListener(\"mouseout\", (event) => {\r\n    if (\r\n      event.target.classList.contains(\"grid-cell\") &&\r\n      getCurrentShipIndex() < ships.length\r\n    ) {\r\n      const x = parseInt(event.target.dataset.x);\r\n      const y = parseInt(event.target.dataset.y);\r\n      highlightCells(\r\n        x,\r\n        y,\r\n        ships[getCurrentShipIndex()].length,\r\n        getDirection(),\r\n        \"remove-highlight\"\r\n      );\r\n    }\r\n  });\r\n}\r\n\r\nfunction addDirectionButtonListeners(setDirection) {\r\n  document.getElementById(\"horizontal-button\").addEventListener(\"click\", () => {\r\n    setDirection(\"horizontal\");\r\n  });\r\n  document.getElementById(\"vertical-button\").addEventListener(\"click\", () => {\r\n    setDirection(\"vertical\");\r\n  });\r\n}\r\n\r\nfunction hideButtons() {\r\n  const horizontalButton = document.querySelector(\"#horizontal-button\");\r\n  const verticalButton = document.querySelector(\"#vertical-button\");\r\n\r\n  horizontalButton.classList.add(\"hidden\");\r\n  verticalButton.classList.add(\"hidden\");\r\n}\r\n\r\nfunction changeGridPointer(grid) {\r\n  const cells = grid.querySelectorAll(\".grid-cell\");\r\n  cells.forEach((cell) => {\r\n    cell.classList.add(\"grid-pointer\");\r\n  });\r\n}\r\n\r\nfunction removeGridPointer(grid) {\r\n  const cells = grid.querySelectorAll(\".grid-cell\");\r\n  cells.forEach((cell) => {\r\n    cell.classList.remove(\"grid-pointer\");\r\n  });\r\n}\r\n\r\nfunction addEnemyGridHoverEffect(grid) {\r\n  const cells = grid.querySelectorAll(\".grid-cell\");\r\n\r\n  cells.forEach((cell) => {\r\n    cell.addEventListener(\"mouseover\", () => {\r\n      cell.classList.add(\"grid-cell-hover\");\r\n    });\r\n\r\n    cell.addEventListener(\"mouseout\", () => {\r\n      cell.classList.remove(\"grid-cell-hover\");\r\n    });\r\n  });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/domManipulation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template */ \"./src/template.js\");\n\r\n\r\n\r\n(0,_template__WEBPACK_IMPORTED_MODULE_1__.initialize)();\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _classFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classFactory */ \"./src/classFactory.js\");\n/* harmony import */ var _classFactory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_classFactory__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n\r\n\r\n\r\nfunction startGame(playerName) {\r\n  const player = new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Player(playerName, \"real\");\r\n  const computer = new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Player(\"Computer\", \"computer\");\r\n\r\n  placeComputerShips(computer);\r\n  placeShipsOnGrid(player, () => {\r\n    playGame(player, computer, playerName);\r\n  });\r\n}\r\n\r\nfunction placeShipsOnGrid(player, onAllShipsPlaced) {\r\n  const ships = [\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Destroyer\", 2),\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Submarine\", 3),\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Battleship\", 4),\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Carrier\", 5),\r\n  ];\r\n\r\n  let currentShipIndex = 0;\r\n  let direction = \"horizontal\";\r\n\r\n  const grid = document.getElementById(\"friendly-waters\");\r\n\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.addGridEventListeners)(\r\n    grid,\r\n    ships,\r\n    () => currentShipIndex,\r\n    () => direction\r\n  );\r\n\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.addDirectionButtonListeners)((newDirection) => {\r\n    direction = newDirection;\r\n  });\r\n\r\n  grid.addEventListener(\"click\", (event) => {\r\n    if (\r\n      event.target.classList.contains(\"grid-cell\") &&\r\n      currentShipIndex < ships.length\r\n    ) {\r\n      const x = parseInt(event.target.dataset.x);\r\n      const y = parseInt(event.target.dataset.y);\r\n      const ship = ships[currentShipIndex];\r\n\r\n      if (player.placeShip(ship, x, y, direction)) {\r\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.paintCells)(x, y, ship.length, direction);\r\n        currentShipIndex++;\r\n        if (currentShipIndex < ships.length) {\r\n          (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\r\n            `${player.name}, place your ${ships[currentShipIndex].name}`\r\n          );\r\n        } else {\r\n          (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\"All ships placed!\");\r\n          (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.hideButtons)();\r\n          onAllShipsPlaced();\r\n          (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.removeGridPointer)(grid);\r\n        }\r\n      } else {\r\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\"Invalid placement, try again.\");\r\n      }\r\n    }\r\n  });\r\n\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\r\n    `${player.name}, place your ${ships[currentShipIndex].name}`\r\n  );\r\n}\r\n\r\nfunction placeComputerShips(computer) {\r\n  const ships = [\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Destroyer\", 2),\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Submarine\", 3),\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Battleship\", 4),\r\n    new _classFactory__WEBPACK_IMPORTED_MODULE_0__.Ship(\"Carrier\", 5),\r\n  ];\r\n\r\n  ships.forEach((ship) => {\r\n    let placed = false;\r\n    while (!placed) {\r\n      const x = Math.floor(Math.random() * 10);\r\n      const y = Math.floor(Math.random() * 10);\r\n      const direction = Math.random() > 0.5 ? \"horizontal\" : \"vertical\";\r\n      placed = computer.placeShip(ship, x, y, direction);\r\n    }\r\n  });\r\n}\r\n\r\nfunction attack(opponent, x, y) {\r\n  return opponent.receiveAttack(x, y);\r\n}\r\n\r\nfunction playGame(player, computer, playerName) {\r\n  const grid = document.querySelector(\"#enemy-waters\");\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.changeGridPointer)(grid);\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.addEnemyGridHoverEffect)(grid);\r\n\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\"It's your turn to attack!\");\r\n\r\n  function handleRound(event) {\r\n    if (event.target.classList.contains(\"grid-cell\")) {\r\n      if (event.target.classList.contains(\"attacked\")) {\r\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\r\n          \"You've already attacked this cell! Choose another one\"\r\n        );\r\n        return;\r\n      }\r\n\r\n      const x = parseInt(event.target.dataset.x);\r\n      const y = parseInt(event.target.dataset.y);\r\n\r\n      const hit = attack(computer, x, y);\r\n\r\n      event.target.classList.add(\"attacked\");\r\n\r\n      if (hit) {\r\n        event.target.style.backgroundColor = \"red\";\r\n      } else {\r\n        event.target.style.backgroundColor = \"white\";\r\n      }\r\n\r\n      if (computer.gameboard.allSunk()) {\r\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\"You win! The game will restart in 5 seconds\");\r\n        grid.removeEventListener(\"click\", handleRound);\r\n        restartGame();\r\n        return;\r\n      }\r\n\r\n      (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\"Computer's turn to attack!\");\r\n\r\n      setTimeout(() => {\r\n        const {\r\n          hit: computerHit,\r\n          attackX: computerX,\r\n          attackY: computerY,\r\n        } = computer.makeAttack(player);\r\n\r\n        const playerGrid = document.querySelector(\r\n          `#friendly-waters .grid-cell[data-x=\"${computerX}\"][data-y=\"${computerY}\"]`\r\n        );\r\n\r\n        if (computerHit) {\r\n          if (playerGrid) {\r\n            playerGrid.style.backgroundColor = \"red\";\r\n          }\r\n        } else {\r\n          if (playerGrid) {\r\n            playerGrid.style.backgroundColor = \"white\";\r\n          }\r\n        }\r\n\r\n        if (player.gameboard.allSunk()) {\r\n          (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\r\n            \"Computer wins! The game will restart in 5 seconds\"\r\n          );\r\n          grid.removeEventListener(\"click\", handleRound);\r\n          restartGame();\r\n          return;\r\n        }\r\n\r\n        (0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__.updateDisplayMessage)(\"It's your turn to attack!\");\r\n      }, 1000);\r\n    }\r\n  }\r\n\r\n  grid.addEventListener(\"click\", handleRound);\r\n}\r\n\r\nfunction restartGame() {\r\n  setTimeout(() => {\r\n    location.reload();\r\n  }, 5000);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/logic.js?");

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\r\n\r\nfunction displayDOM() {\r\n  const playerName = document.getElementById(\"player-name\").value;\r\n\r\n  if (playerName.trim() !== \"\") {\r\n    document.querySelector(\"#initial-container\").style.display = \"none\";\r\n\r\n    document.querySelector(\"#game-container\").style.display = \"block\";\r\n\r\n    createGrid(\"friendly-waters\");\r\n    createGrid(\"enemy-waters\");\r\n  }\r\n  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.startGame)(playerName);\r\n}\r\n\r\nfunction createGrid(gridId) {\r\n  const gridElement = document.getElementById(gridId);\r\n  for (let i = 0; i < 10; i++) {\r\n    for (let j = 0; j < 10; j++) {\r\n      const gridCell = document.createElement(\"div\");\r\n      if (gridId === \"friendly-waters\") {\r\n        gridCell.classList.add(\"grid-pointer\");\r\n      }\r\n      gridCell.classList.add(\"grid-cell\");\r\n      gridCell.dataset.x = j;\r\n      gridCell.dataset.y = i;\r\n      gridElement.appendChild(gridCell);\r\n    }\r\n  }\r\n}\r\n\r\nconst handleStartButton = () => {\r\n  const startButton = document.getElementById(\"start-button\");\r\n  startButton.addEventListener(\"click\", displayDOM);\r\n};\r\n\r\nconst handleEnterButton = () => {\r\n  document.addEventListener(\"keydown\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n      event.preventDefault();\r\n      displayDOM();\r\n    }\r\n  });\r\n};\r\n\r\nconst focusName = () => {\r\n  document.getElementById(\"player-name\").focus();\r\n};\r\n\r\nconst initialize = () => {\r\n  handleEnterButton();\r\n  handleStartButton();\r\n  focusName();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/template.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;