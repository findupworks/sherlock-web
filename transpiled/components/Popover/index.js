function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
import classname from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePopper } from "react-popper";
export var Popover = function(_param) {
    var tooltipText = _param.tooltipText, popoverText = _param.popoverText, _showPopover = _param.showPopover, showPopover = _showPopover === void 0 ? false : _showPopover, _direction = _param.direction, direction = _direction === void 0 ? "top" : _direction, target = _param.target, props = _objectWithoutProperties(_param, [
        "tooltipText",
        "popoverText",
        "showPopover",
        "direction",
        "target"
    ]);
    var element = document.getElementById(target);
    var ref = _slicedToArray(useState(), 2), popperElement = ref[0], setPopperElement = ref[1];
    var arrow = document.getElementById("arrow");
    var ref1 = usePopper(element, popperElement, {
        placement: direction,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [
                        0,
                        8
                    ]
                }
            },
            {
                name: "preventOverflow",
                options: {
                    padding: 8
                }
            },
            {
                name: "arrow",
                options: {
                    element: arrow,
                    padding: 5
                }
            }
        ]
    }), styles = ref1.styles, attributes = ref1.attributes;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, showPopover ? /*#__PURE__*/ React.createElement("div", _extends({
        className: classname({
            "bg-slate-100 w-[256px]  min-h-[160px] z-20 rounded text-sm shadow-lg absolute ": true
        }),
        ref: setPopperElement,
        style: styles.popper
    }, attributes.popper), /*#__PURE__*/ React.createElement("div", {
        style: styles.arrow,
        className: classname({
            " h-0 w-0 border-slate-100": true,
            "-top-1 border-x-[18px] border-x-transparent border-b-[16px] ": "bottom" == direction,
            "-bottom-1 border-x-[18px] border-x-transparent border-t-[16px]": "top" == direction,
            "-right-1 border-y-[9px] border-y-transparent border-l-[8px]": "left" == direction,
            "-left-1 border-y-[9px] border-y-transparent border-r-[8px]": "right" == direction
        }),
        id: "arrow"
    }), /*#__PURE__*/ React.createElement("div", {
        className: " font-semibold p-2 border-b border-slate-50 break-words"
    }, tooltipText), /*#__PURE__*/ React.createElement("div", {
        className: "p-2 text-cyan break-words"
    }, popoverText)) : /*#__PURE__*/ React.createElement("div", null));
};
