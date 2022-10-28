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
import classname from "classnames";
export var NavBarVertical = function(param) {
    var navBarItems = param.navBarItems;
    var ref = _slicedToArray(useState([]), 2), optionsDropwdon = ref[0], setOptionsDropwdon = ref[1];
    var ref1 = _slicedToArray(useState(-10), 2), indexStepCurrent = ref1[0], setIndexCurrent = ref1[1];
    var ref2 = _slicedToArray(useState(-10), 2), indexStepCurrentSubItem = ref2[0], setIndexStepCurrentSubItem = ref2[1];
    var ref3 = _slicedToArray(useState(false), 2), showSubItems = ref3[0], setShowSubItems = ref3[1];
    var NavBarItem = function(param) {
        var index = param.index, router = param.router, label = param.label, subItems = param.subItems;
        return /*#__PURE__*/ React.createElement("li", {
            className: "mb-6"
        }, /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "flex cursor-pointer   items-center justify-between gap-4 ml-1 rounded text-sm py-2 px-4 text-dark hover:bg-darkL2": true,
                "text-darkD2 text-sm font-semibold": index == indexStepCurrent && showSubItems
            }),
            onClick: function() {
                setIndexCurrent(index);
                setShowSubItems(!showSubItems);
            }
        }, /*#__PURE__*/ React.createElement("a", {
            href: router
        }, label), (subItems === null || subItems === void 0 ? void 0 : subItems.length) > 0 ? showSubItems && index == indexStepCurrent ? /*#__PURE__*/ React.createElement("i", {
            className: "fa-solid fa-caret-down"
        }) : /*#__PURE__*/ React.createElement("i", {
            className: "fa-solid fa-caret-right"
        }) : null), /*#__PURE__*/ React.createElement("div", {
            className: "mt-2"
        }, (subItems === null || subItems === void 0 ? void 0 : subItems.length) > 0 && index == indexStepCurrent && showSubItems && (subItems === null || subItems === void 0 ? void 0 : subItems.map(function(subItem, index) {
            /*#__PURE__*/ return React.createElement("a", {
                className: classname({
                    "block cursor-pointer  ml-4 rounded text-sm py-2 px-4 text-dark hover:bg-light mb-3": true,
                    "bg-primaryL3 text-primary font-semibold": index == indexStepCurrentSubItem
                }),
                href: subItem === null || subItem === void 0 ? void 0 : subItem.router,
                onClick: function() {
                    return setIndexStepCurrentSubItem(index);
                }
            }, subItem === null || subItem === void 0 ? void 0 : subItem.label);
        }))));
    };
    return /*#__PURE__*/ React.createElement("nav", null, /*#__PURE__*/ React.createElement("ol", null, navBarItems === null || navBarItems === void 0 ? void 0 : navBarItems.map(function(item, index) {
        /*#__PURE__*/ return React.createElement("div", {
            key: index
        }, " ", /*#__PURE__*/ React.createElement(NavBarItem, {
            index: index,
            label: item === null || item === void 0 ? void 0 : item.label,
            router: item === null || item === void 0 ? void 0 : item.router,
            subItems: (item === null || item === void 0 ? void 0 : item.subItems) ? item === null || item === void 0 ? void 0 : item.subItems : []
        }));
    })));
};
