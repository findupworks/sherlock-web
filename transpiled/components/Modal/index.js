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
import "@fortawesome/fontawesome-free/css/all.min.css";
import classname from "classnames";
export var Modal = function(_param) {
    var title = _param.title, _size = _param.size, size = _size === void 0 ? "md" : _size, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, _showModal = _param.showModal, showModal = _showModal === void 0 ? false : _showModal, children = _param.children, _labelButtonCancel = _param.labelButtonCancel, labelButtonCancel = _labelButtonCancel === void 0 ? "Cancelar" : _labelButtonCancel, _labelButtonConfirm = _param.labelButtonConfirm, labelButtonConfirm = _labelButtonConfirm === void 0 ? "Confirmar" : _labelButtonConfirm, onHide = _param.onHide, _onCancel = _param.onCancel, onCancel = _onCancel === void 0 ? undefined : _onCancel, _onConfirm = _param.onConfirm, onConfirm = _onConfirm === void 0 ? undefined : _onConfirm, icon = _param.icon, props = _objectWithoutProperties(_param, [
        "title",
        "size",
        "variant",
        "showModal",
        "children",
        "labelButtonCancel",
        "labelButtonConfirm",
        "onHide",
        "onCancel",
        "onConfirm",
        "icon"
    ]);
    var handleOnHide = function(e) {
        if (e.target.classList.value.includes("fixed")) onHide();
    };
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "bg-black opacity-70 fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50": true,
            //visible
            "block": showModal,
            "hidden": !showModal
        })
    }), /*#__PURE__*/ React.createElement("div", {
        onClick: handleOnHide,
        className: classname({
            "fixed w-full h-screen mx-auto top-0 left-0  overflow-x-hidden overflow-y-auto z-50": true,
            //visible
            "block": showModal,
            "hidden": !showModal
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "mx-auto w-full bg-white  mt-16 rounded drop-shadow-[0_4px_16px_rgba(39,40,51,0.4)]": true,
            //size 
            "max-w-[18.75rem]": "sm" == size,
            "max-w-[31.25rem] min-w-[31.25rem]": "md" == size,
            "max-w-[50rem] min-w-[50rem]": "lg" == size
        })
    }, /*#__PURE__*/ React.createElement("header", {
        className: classname({
            "p-6  border-b-[1px] flex items-start justify-between rounded-t": true,
            //variant 
            "border-darkL2 text-dark": "default" == variant,
            "border-danger bg-dangerL2 text-danger": "danger" == variant,
            "border-success text-success bg-successL2": "success" == variant,
            "border-warning text-warning bg-warningL2": "warning" == variant,
            "border-info text-info bg-infoL2": "info" == variant
        })
    }, /*#__PURE__*/ React.createElement("h1", null, /*#__PURE__*/ React.createElement("i", {
        className: "fas fa-".concat(icon, " mr-2")
    }), /*#__PURE__*/ React.createElement("span", {
        className: "font-bold text-xl"
    }, title)), /*#__PURE__*/ React.createElement("button", {
        onClick: onHide
    }, /*#__PURE__*/ React.createElement("i", {
        className: "fa-solid fa-xmark text-2xl"
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "py-4 px-6"
    }, children), /*#__PURE__*/ React.createElement("footer", {
        className: "flex justify-end border-t-[1px] border-darkL2 p-6 gap-2"
    }, onCancel && /*#__PURE__*/ React.createElement("button", {
        className: "border-[1px] border-secondaryL2 py-2 px-4 text-secondary rounded",
        onClick: onCancel
    }, labelButtonCancel), onConfirm && /*#__PURE__*/ React.createElement("button", {
        onClick: onConfirm,
        className: classname({
            "py-2	px-4 text-white rounded": true,
            //variant 
            "bg-primary": "default" == variant,
            "bg-danger": "danger" == variant,
            "bg-success": "success" == variant,
            "bg-warning": "warning" == variant,
            "bg-info": "info" == variant
        })
    }, labelButtonConfirm)))));
};
