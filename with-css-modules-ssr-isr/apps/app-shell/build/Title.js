"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Title;
var _react = _interopRequireDefault(require("react"));
var _TitleModule = _interopRequireDefault(require("./Title.module.css"));
function Title(_ref) {
  var _ref$as = _ref.as,
    as = _ref$as === void 0 ? "h1" : _ref$as,
    children = _ref.children;
  var Component = as;
  return /*#__PURE__*/_react.default.createElement(Component, {
    className: _TitleModule.default.title
  }, children);
}