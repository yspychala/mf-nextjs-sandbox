"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Title = _interopRequireDefault(require("./Title"));
var _NavModule = _interopRequireDefault(require("./Nav.module.css"));
function Nav(_ref) {
  var fallbackOpts = _ref.fallbackOpts;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _NavModule.default.container,
    style: fallbackOpts !== null && fallbackOpts !== void 0 && fallbackOpts.bgColor ? {
      background: fallbackOpts.bgColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_Title.default, {
    as: "h2"
  }, "navigation ", (fallbackOpts === null || fallbackOpts === void 0 ? void 0 : fallbackOpts.bgColor) && "(fallback)"));
}
var _default = Nav;
exports.default = _default;