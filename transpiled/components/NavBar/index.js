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
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from "classnames";
import { Dropdown } from "../Dropdown";
export var NavBar = function(param) {
    var navBarItems = param.navBarItems, _variant = param.variant, variant = _variant === void 0 ? "dark" : _variant;
    var ref = _slicedToArray(useState([]), 2), optionsDropwdon = ref[0], setOptionsDropwdon = ref[1];
    var handleRouter = function(link) {
        return window.location.href = link;
    };
    useEffect(function() {
        var optionsDropwdonTemp = [];
        navBarItems === null || navBarItems === void 0 ? void 0 : navBarItems.map(function(step) {
            var ref;
            (ref = step.subItems) === null || ref === void 0 ? void 0 : ref.map(function(subItems) {
                optionsDropwdonTemp.push({
                    label: subItems === null || subItems === void 0 ? void 0 : subItems.label,
                    router: subItems === null || subItems === void 0 ? void 0 : subItems.router,
                    onClick: function() {
                        return handleRouter(subItems === null || subItems === void 0 ? void 0 : subItems.router);
                    }
                });
            });
        });
        setOptionsDropwdon(optionsDropwdonTemp);
    }, []);
    var ref1 = _slicedToArray(useState(-10), 2), indexStepCurrent = ref1[0], setIndexCurrent = ref1[1];
    var NavBarItem = function(param) {
        var index = param.index, router = param.router, label = param.label, isExistiSubItems = param.isExistiSubItems;
        return /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "flex items-center h-32 gap-2 ml-1 text-sm  hover:border-b-4  p-4  font-semibold ": true,
                "text-secondaryL1": index == indexStepCurrent && variant == "light",
                "text-darkD2": index == indexStepCurrent && variant == "dark",
                // variant 
                "text-white  hover:border-secondaryL2": variant == "light",
                "text-darkL1 hover:border-primaryL1 hover:text-darkD1": variant == "dark"
            }),
            onClick: function() {
                return setIndexCurrent(index);
            }
        }, /*#__PURE__*/ React.createElement("a", {
            href: router
        }, label), isExistiSubItems && /*#__PURE__*/ React.createElement(Dropdown, {
            itemsMenu: optionsDropwdon,
            leftIcon: "fa-solid fa-caret-down",
            variant: "default"
        })));
    };
    return /*#__PURE__*/ React.createElement("nav", {
        className: "flex"
    }, /*#__PURE__*/ React.createElement("ol", {
        className: "inline-flex items-center"
    }, navBarItems === null || navBarItems === void 0 ? void 0 : navBarItems.map(function(step, index) {
        /*#__PURE__*/ return React.createElement("div", {
            key: index
        }, " ", /*#__PURE__*/ React.createElement(NavBarItem, {
            index: index,
            label: step === null || step === void 0 ? void 0 : step.label,
            router: step === null || step === void 0 ? void 0 : step.router,
            isExistiSubItems: (step === null || step === void 0 ? void 0 : step.subItems) ? true : false
        }));
    })));
};
