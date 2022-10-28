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
import classNames from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
export var Input = function(_param) {
    var changleToggleIcon = function changleToggleIcon() {
        if (toggleIcon == "eye") {
            setTypeInput("password");
            setToggleIcon("eye-slash");
        } else {
            setTypeInput("text");
            setToggleIcon("eye");
        }
    };
    var getTag = function getTag() {
        return colorVariant == "success" || colorVariant == "danger" || colorVariant == "warning" ? /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center"
        }, /*#__PURE__*/ React.createElement("i", {
            className: classNames("fa", {
                "fa-circle-check text-success": "success" == colorVariant,
                "fa-warning text-warning": "warning" == colorVariant,
                "fa-circle-exclamation text-danger": "danger" == colorVariant
            })
        }), /*#__PURE__*/ React.createElement("label", {
            className: "block mb-2 pl-2 pt-2 text-sm font-medium text-gray-900 dark:text-dark"
        }, "success" == colorVariant ? "Sucesso" : "", "danger" == colorVariant ? "Erro" : "", "warning" == colorVariant ? "Cuidado" : "")) : "";
    };
    var getContentType = function getContentType() {
        if (inputType === "textarea") {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
                className: "flex flex-col justify-center"
            }, /*#__PURE__*/ React.createElement("div", null, label ? /*#__PURE__*/ React.createElement("label", {
                className: "block mb-1 text-xs font-medium text-gray-900 dark:text-dark"
            }, label) : "", /*#__PURE__*/ React.createElement("textarea", {
                className: classNames("resize w-full px-3 py-1.5 text-xs font-normal text-gray-700 bg-clip-padding border border-solid rounded transition ease-in-out m-0", {
                    "bg-gray-50 border border-gray-300": "default" == colorVariant,
                    "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                    "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                    "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                    "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                    "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                    "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant
                })
            })), tag ? getTag() : ""));
        }
        if (inputType === "icon") {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
                className: "relative"
            }, label ? /*#__PURE__*/ React.createElement("label", {
                className: "block mb-1 text-xs font-medium text-dark dark:text-dark"
            }, label) : "", /*#__PURE__*/ React.createElement("div", {
                className: "flex relative justify-between"
            }, /*#__PURE__*/ React.createElement("input", _extends({
                type: "text",
                className: classNames("border text-gray-900 text-xs rounded-md block w-full p-2.5", {
                    "bg-gray-50 border border-gray-300": "default" == colorVariant,
                    "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                    "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                    "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                    "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                    "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                    "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant
                })
            }, props)), /*#__PURE__*/ React.createElement("i", {
                onClick: onClickIcon,
                className: classNames("absolute right-2 top-3 text-gray-600 fa fa-".concat(icon), {})
            })), tag ? getTag() : ""));
        }
        if (inputType === "selector") {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", null, label ? /*#__PURE__*/ React.createElement("label", {
                className: "block mb-1 text-xs font-medium text-gray-900 dark:text-gray-400"
            }, label) : "", /*#__PURE__*/ React.createElement("select", {
                className: classNames("text-dark text-xs border rounded-lg block w-full p-2.5", {
                    "bg-gray-50 border border-gray-300": "default" == colorVariant,
                    "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                    "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                    "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                    "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                    "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                    "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant
                })
            }, selectorItems ? selectorItems.map(function(item) {
                return /*#__PURE__*/ React.createElement("option", {
                    value: item.value
                }, item.label);
            }) : "")));
        }
        if (inputType === "password") {
            return /*#__PURE__*/ React.createElement("div", null, label ? /*#__PURE__*/ React.createElement("label", {
                className: "block mb-1 text-xs font-medium text-gray-900 dark:text-dark"
            }, label) : "", /*#__PURE__*/ React.createElement("div", {
                className: "flex relative justify-between"
            }, /*#__PURE__*/ React.createElement("input", _extends({
                type: typeInput,
                className: classNames("border text-dark text-xs rounded-lg block w-full p-2.5", {
                    "bg-gray-50 border border-gray-300": "default" == colorVariant,
                    "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                    "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                    "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                    "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                    "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                    "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant
                })
            }, props)), isVisible ? /*#__PURE__*/ React.createElement("i", {
                onClick: changleToggleIcon,
                className: "fa fa-".concat(toggleIcon, " right-2 top-2 text-base absolute text-gray-600")
            }) : ""), tag ? getTag() : "");
        }
        return /*#__PURE__*/ React.createElement(React.Fragment, null);
    };
    var getContentDefault = function getContentDefault() {
        return /*#__PURE__*/ React.createElement("div", null, label ? /*#__PURE__*/ React.createElement("label", {
            className: "block mb-1 text-xs font-medium text-gray-900 dark:text-dark"
        }, label) : "", /*#__PURE__*/ React.createElement("div", {
            className: "flex relative justify-between"
        }, /*#__PURE__*/ React.createElement("input", _extends({
            className: classNames("border text-dark text-xs rounded-lg block w-full p-2.5", {
                "bg-gray-50 border border-gray-300": "default" == colorVariant,
                "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant
            })
        }, props))), tag ? getTag() : "");
    };
    var label = _param.label, labelDefault = _param.labelDefault, _inputType = _param.inputType, inputType = _inputType === void 0 ? "default" : _inputType, colorVariant = _param.colorVariant, selectorItems = _param.selectorItems, tag = _param.tag, icon = _param.icon, isVisible = _param.isVisible, onClickIcon = _param.onClickIcon, props = _objectWithoutProperties(_param, [
        "label",
        "labelDefault",
        "inputType",
        "colorVariant",
        "selectorItems",
        "tag",
        "icon",
        "isVisible",
        "onClickIcon"
    ]);
    var ref = _slicedToArray(useState("eye-slash"), 2), toggleIcon = ref[0], setToggleIcon = ref[1];
    var ref1 = _slicedToArray(useState("password"), 2), typeInput = ref1[0], setTypeInput = ref1[1];
    return "default" == inputType ? getContentDefault() : getContentType();
};
