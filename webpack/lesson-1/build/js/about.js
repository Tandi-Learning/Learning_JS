webpackJsonp([1],{

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

console.log("About page scripts ....");

__webpack_require__(7);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./about.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./about.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "h1 {\n    border: {\n        color: red;\n        border-style: solid;\n        width: 1px;\n    }\n}", ""]);

// exports


/***/ })

},[6]);