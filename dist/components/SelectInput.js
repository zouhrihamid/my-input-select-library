"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SelectInput = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
require("./SelectInput.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SelectInput = exports.SelectInput = function SelectInput(_ref) {
  var label = _ref.label,
    name = _ref.name,
    value = _ref.value,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    onChange = _ref.onChange,
    _ref$isRequired = _ref.isRequired,
    isRequired = _ref$isRequired === void 0 ? false : _ref$isRequired,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("label", null, label, ":"), /*#__PURE__*/_react["default"].createElement("select", {
    name: name,
    className: "select ".concat(className).trim(),
    value: value,
    onChange: onChange,
    required: isRequired
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, label), options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  })));
};

// Définition des PropTypes
SelectInput.propTypes = {
  label: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    value: _propTypes["default"].string.isRequired,
    label: _propTypes["default"].string.isRequired
  })).isRequired,
  onChange: _propTypes["default"].func.isRequired,
  isRequired: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
var _default = exports["default"] = SelectInput;