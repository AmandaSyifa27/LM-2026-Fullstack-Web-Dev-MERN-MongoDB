"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Item = _interopRequireDefault(require("./Item"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function App() {
  var items = ["Satu", "Dua", "Tiga"];
  var name = "Amanda";
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Hello, ", name, "!"), /*#__PURE__*/_react["default"].createElement("p", null, "Welcome to React with JSX")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Items:"), /*#__PURE__*/_react["default"].createElement("ul", null, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, item);
  }), ";")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Items(1):"), /*#__PURE__*/_react["default"].createElement("ul", null, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_Item["default"], {
      key: index,
      name: item
    });
  }))));
}
var _default = exports["default"] = App;