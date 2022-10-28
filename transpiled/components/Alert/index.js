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
import React, { useEffect, useRef } from "react";
import classname from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "../Button";
export var AlertTypes;
(function(AlertTypes) {
    AlertTypes["alertFixed"] = "alertFixed";
    AlertTypes["alertTemporary"] = "alertTemporary";
})(AlertTypes || (AlertTypes = {}));
export var Alert = function(_param) {
    var _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, _onClickOne = _param.onClickOne, onClickOne = _onClickOne === void 0 ? undefined : _onClickOne, _onClickTwo = _param.onClickTwo, onClickTwo = _onClickTwo === void 0 ? undefined : _onClickTwo, _labelButtonOne = _param.labelButtonOne, labelButtonOne = _labelButtonOne === void 0 ? "Small button" : _labelButtonOne, _labelButtonTwo = _param.labelButtonTwo, labelButtonTwo = _labelButtonTwo === void 0 ? "Small button" : _labelButtonTwo, onHiden = _param.onHiden, showAlert = _param.showAlert, _onAlertBorderBottom = _param.onAlertBorderBottom, onAlertBorderBottom = _onAlertBorderBottom === void 0 ? false : _onAlertBorderBottom, title = _param.title, text = _param.text, props = _objectWithoutProperties(_param, [
        "variant",
        "onClickOne",
        "onClickTwo",
        "labelButtonOne",
        "labelButtonTwo",
        "onHiden",
        "showAlert",
        "onAlertBorderBottom",
        "title",
        "text"
    ]);
    var ref = useRef(null);
    var ButtonsActions = function() {
        var colorButton = function() {
            if (variant == "default") {
                return "primary";
            }
            if (variant == "info") {
                return "info";
            }
            if (variant == "success") {
                return "success";
            }
            if (variant == "warning") {
                return "warning";
            }
            if (variant == "danger") {
                return "danger";
            }
        };
        if (onClickOne || onClickTwo) {
            return /*#__PURE__*/ React.createElement("div", {
                className: "flex items-center mt-4 gap-2 ml-8"
            }, onClickOne && /*#__PURE__*/ React.createElement(Button, {
                label: labelButtonOne,
                onClick: onClickOne,
                size: "sm",
                variant: colorButton()
            }), onClickTwo && /*#__PURE__*/ React.createElement("button", null, /*#__PURE__*/ React.createElement(Button, {
                label: labelButtonTwo,
                onClick: onClickTwo,
                size: "sm",
                variant: colorButton(),
                outlined: true
            })));
        }
        return /*#__PURE__*/ React.createElement(React.Fragment, null);
    };
    useEffect(function() {
        var divNode = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!onClickOne && !onClickTwo) {
            if (showAlert) {
                divNode !== null && divNode.classList.remove("opacity-0");
                divNode !== null && divNode.classList.add("opacity-100");
                setTimeout(function() {
                    divNode !== null && divNode.classList.remove("opacity-100");
                    divNode !== null && divNode.classList.add("opacity-0");
                }, 5000);
                setTimeout(function() {
                    onHiden();
                }, 7000);
            }
        }
    }, [
        showAlert
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        ref: ref,
        className: classname({
            "w-[24.5rem]  p-4 rounded break-words fixed top-4 right-4 z-50": true,
            // hidden
            "ease-out duration-[4000ms] opacity-100  transition-opacity": !onClickOne && !onClickTwo,
            // variant
            "bg-white text-secondary": variant == "default",
            "bg-primaryL3 border-infoL1 text-info": variant == "info",
            "bg-successL2 border-successL1 text-success": variant == "success",
            "bg-warningL2 border-warningL1 text-warning": variant == "warning",
            "bg-dangerL2 border-dangerL1 text-danger": variant == "danger",
            // showAlert visible
            block: showAlert,
            hidden: !showAlert,
            border: !onAlertBorderBottom,
            "border-b": onAlertBorderBottom
        })
    }, /*#__PURE__*/ React.createElement("header", {
        className: classname({
            "flex items-start justify-between": true
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex gap-2 items-start mt-0.5"
    }, /*#__PURE__*/ React.createElement("i", {
        className: classname({
            "text-base mt-1": true,
            //icon type variant
            "fa-solid fa-circle-check text-[#6B6C7E]": variant == "default",
            "fa-solid fa-circle-info": variant == "info",
            "fa-solid fa-circle-check": variant == "success",
            "fa-solid fa-triangle-exclamation": variant == "warning",
            "fa-solid fa-circle-exclamation": variant == "danger"
        })
    }), /*#__PURE__*/ React.createElement("span", {
        className: "font-semibold text-sm flex items-start pyd-1"
    }, title, /*#__PURE__*/ React.createElement("span", {
        className: "ml-1 font-normal"
    }, text))), /*#__PURE__*/ React.createElement("button", {
        onClick: onHiden
    }, /*#__PURE__*/ React.createElement("i", {
        className: "fa-solid fa-xmark text-base ml-1"
    }))), /*#__PURE__*/ React.createElement(ButtonsActions, null));
};
