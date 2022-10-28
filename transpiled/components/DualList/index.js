function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../style/react-dual-listbox.css";
import DualListBox from "react-dual-listbox";
export var DualList = function(_param) {
    var options = _param.options, onChange = _param.onChange, _disabled = _param.disabled, disabled = _disabled === void 0 ? false : _disabled, titleOne = _param.titleOne, titleTwo = _param.titleTwo, props = _objectWithoutProperties(_param, [
        "options",
        "onChange",
        "disabled",
        "titleOne",
        "titleTwo"
    ]);
    var ref = _slicedToArray(useState([]), 2), selected = ref[0], setSelected = ref[1];
    return /*#__PURE__*/ React.createElement("div", {
        className: "w-96"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex justify-between mb-4"
    }, titleOne && /*#__PURE__*/ React.createElement("h1", {
        className: "font-semibold text-sm text-dark"
    }, titleOne), titleOne && /*#__PURE__*/ React.createElement("h1", {
        className: "font-semibold text-sm text-dark"
    }, titleTwo)), /*#__PURE__*/ React.createElement(DualListBox, {
        options: options,
        selected: selected,
        onChange: function(value) {
            setSelected(value);
            onChange(value);
        },
        disabled: disabled
    }));
};
