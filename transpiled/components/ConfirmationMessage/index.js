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
import React from "react";
import classname from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
export var ConfirmationMessage = function(_param) {
    var message = _param.message, _labelButtonCancel = _param.labelButtonCancel, labelButtonCancel = _labelButtonCancel === void 0 ? "Cancelar" : _labelButtonCancel, _labelButtonConfirm = _param.labelButtonConfirm, labelButtonConfirm = _labelButtonConfirm === void 0 ? "Confirmar" : _labelButtonConfirm, _size = _param.size, size = _size === void 0 ? "md" : _size, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, _showConfirmationMessage = _param.showConfirmationMessage, showConfirmationMessage = _showConfirmationMessage === void 0 ? false : _showConfirmationMessage, _onCancel = _param.onCancel, onCancel = _onCancel === void 0 ? undefined : _onCancel, _onConfirm = _param.onConfirm, onConfirm = _onConfirm === void 0 ? undefined : _onConfirm, props = _objectWithoutProperties(_param, [
        "message",
        "labelButtonCancel",
        "labelButtonConfirm",
        "size",
        "variant",
        "showConfirmationMessage",
        "onCancel",
        "onConfirm"
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "bg-black opacity-70 fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50": true,
            //visible
            "block": showConfirmationMessage,
            "hidden": !showConfirmationMessage
        })
    }), /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50": true,
            //visible
            "block": showConfirmationMessage,
            "hidden": !showConfirmationMessage
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "mx-auto w-full bg-white  mt-16 rounded drop-shadow-[0_4px_16px_rgba(39,40,51,0.4)]": true,
            //size 
            "max-w-[18.75rem]": "sm" == size,
            "max-w-[31.25rem] min-w-[31.25rem]": "md" == size,
            "max-w-[50rem] min-w-[50rem]": "lg" == size
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: "py-4 px-6 text-darkD1"
    }, message ? message : "Deleting portlet data before importing can’t be undone. Some applicatios in other page might be referencing this data. Are you sure you wan’t to continue deleteing portlet data?"), /*#__PURE__*/ React.createElement("footer", {
        className: "flex justify-end p-6 gap-2"
    }, onCancel && /*#__PURE__*/ React.createElement("button", {
        className: "py-2 px-4 text-secondary rounded border",
        onClick: onCancel
    }, labelButtonCancel), onConfirm && /*#__PURE__*/ React.createElement("button", {
        onClick: onConfirm,
        className: classname({
            "py-2 px-4 text-white rounded": true,
            //variant 
            "bg-primary": "default" == variant,
            "bg-danger": "danger" == variant,
            "bg-success": "success" == variant,
            "bg-warning": "warning" == variant,
            "bg-info": "info" == variant
        })
    }, labelButtonConfirm)))));
};
