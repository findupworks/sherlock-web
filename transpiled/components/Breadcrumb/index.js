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
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from "classnames";
import { Dropdown } from "../Dropdown";
export var Breadcrumb = function(_param) {
    var stepsBreadcrumb = _param.stepsBreadcrumb, props = _objectWithoutProperties(_param, [
        "stepsBreadcrumb"
    ]);
    var handleRouter = function(link, index) {
        setIndexCurrent(index);
        window.location.href = link;
    };
    var ref = _slicedToArray(useState(-10), 2), indexStepCurrent = ref[0], setIndexCurrent = ref[1];
    var ref1 = _slicedToArray(useState([]), 2), stepPrevious = ref1[0], setStepPrevious = ref1[1];
    useEffect(function() {
        var stepPreviousTemp = [];
        stepsBreadcrumb === null || stepsBreadcrumb === void 0 ? void 0 : stepsBreadcrumb.map(function(step, index) {
            if (index < indexStepCurrent) {
                stepPreviousTemp.push({
                    label: step.label,
                    router: step.router,
                    onClick: function() {
                        return handleRouter(step === null || step === void 0 ? void 0 : step.router, index);
                    }
                });
            }
        });
        setStepPrevious(stepPreviousTemp);
    }, [
        indexStepCurrent
    ]);
    var StepLink = function(param) {
        var index = param.index, router = param.router, label = param.label;
        var content = function() {
            return /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("div", {
                className: "flex items-center",
                onClick: function() {
                    return setIndexCurrent(index);
                }
            }, index != 0 && /*#__PURE__*/ React.createElement("svg", {
                className: "w-6 h-6 text-darkL1",
                fill: "currentColor",
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, /*#__PURE__*/ React.createElement("path", {
                fillRule: "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                clipRule: "evenodd"
            })), /*#__PURE__*/ React.createElement("a", {
                href: router,
                className: classname({
                    "ml-1 text-s text-darkL1 hover:underline": true,
                    "font-normal text-darkL1": index != indexStepCurrent,
                    "font-semibold text-dark": index == indexStepCurrent
                })
            }, label)));
        };
        if ((stepsBreadcrumb === null || stepsBreadcrumb === void 0 ? void 0 : stepsBreadcrumb.length) >= 5) {
            if (index >= indexStepCurrent) {
                return content();
            }
        } else {
            return content();
        }
        return /*#__PURE__*/ React.createElement(React.Fragment, null);
    };
    return /*#__PURE__*/ React.createElement("nav", {
        className: "flex",
        "aria-label": "Breadcrumb"
    }, /*#__PURE__*/ React.createElement("ol", {
        className: "inline-flex items-center space-x-1 md:space-x-3"
    }, (stepsBreadcrumb === null || stepsBreadcrumb === void 0 ? void 0 : stepsBreadcrumb.length) >= 5 && indexStepCurrent > 0 && /*#__PURE__*/ React.createElement(Dropdown, {
        itemsMenu: stepPrevious,
        leftIcon: "fa-solid fa-ellipsis",
        variant: "default"
    }), stepsBreadcrumb === null || stepsBreadcrumb === void 0 ? void 0 : stepsBreadcrumb.map(function(step, index) {
        /*#__PURE__*/ return React.createElement("div", {
            key: index
        }, " ", /*#__PURE__*/ React.createElement(StepLink, {
            index: index,
            label: step === null || step === void 0 ? void 0 : step.label,
            router: step === null || step === void 0 ? void 0 : step.router
        }));
    })));
};
