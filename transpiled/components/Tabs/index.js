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
import classNames from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
export var Tabs = function(_param) {
    var menuItems = _param.menuItems, onTapMenu = _param.onTapMenu, onClickDropdownOption = _param.onClickDropdownOption, props = _objectWithoutProperties(_param, [
        "menuItems",
        "onTapMenu",
        "onClickDropdownOption"
    ]);
    var ref = _slicedToArray(useState(false), 2), showEntries = ref[0], setshowEntries = ref[1];
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "text-sm relative font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "flex flex-wrap -mb-px"
    }, menuItems.map(function(item) {
        return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("li", {
            className: "mr-2"
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: onTapMenu,
            className: "text-".concat(item.colorLabel, " inline-block p-4 rounded-t-lg border-transparent border-b-2 hover:border-primary")
        }, item.label, " ", item.countLabel ? "(".concat(item.countLabel, ")") : ""), /*#__PURE__*/ React.createElement("i", {
            className: "fas fa-".concat(item.icon, " text-").concat(item.colorLabel),
            onClick: function() {
                return setshowEntries(!showEntries);
            }
        }), item.dropdownOptions ? /*#__PURE__*/ React.createElement("div", {
            className: classNames("absolute z-20 w-20 py-2 top-10 bg-white rounded-md shadow-xl transition duration-150 ease-out transform", {
                "hidden": !showEntries,
                "scale-100 opacity-100": showEntries
            })
        }, item.dropdownOptions.map(function(dropdownOption) {
            return /*#__PURE__*/ React.createElement("p", {
                onClick: onClickDropdownOption,
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, dropdownOption.label);
        })) : ""));
    }))));
};
