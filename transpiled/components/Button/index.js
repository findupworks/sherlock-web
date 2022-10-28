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
export var Button = function(_param) {
    var label = _param.label, leftIcon = _param.leftIcon, rightIcon = _param.rightIcon, _disabled = _param.disabled, disabled = _disabled === void 0 ? false : _disabled, _outlined = _param.outlined, outlined = _outlined === void 0 ? false : _outlined, _loading = _param.loading, loading = _loading === void 0 ? false : _loading, _size = _param.size, size = _size === void 0 ? "md" : _size, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, _full = _param.full, full = _full === void 0 ? false : _full, _textButton = _param.textButton, textButton = _textButton === void 0 ? false : _textButton, props = _objectWithoutProperties(_param, [
        "label",
        "leftIcon",
        "rightIcon",
        "disabled",
        "outlined",
        "loading",
        "size",
        "variant",
        "full",
        "textButton"
    ]);
    var getIcon = function(icon) {
        return /*#__PURE__*/ React.createElement("i", {
            className: "fas fa-".concat(icon)
        });
    };
    var getLeftIcon = function() {
        if (leftIcon) return getIcon(leftIcon);
    };
    var getRightIcon = function() {
        if (rightIcon) return getIcon(rightIcon);
    };
    // const getLoading = () => <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />;
    var getRealContent = function() {
        return /*#__PURE__*/ React.createElement("span", null, getLeftIcon(), " ", /*#__PURE__*/ React.createElement("span", {
            className: "px-2 text-sm"
        }, label), getRightIcon());
    };
    var getContent = function() {
        if (loading) {
            return /*#__PURE__*/ React.createElement("svg", {
                className: "animate-spin",
                height: "25px",
                version: "1.1",
                viewBox: "0 0 32 32",
                width: "25px"
            }, /*#__PURE__*/ React.createElement("g", {
                id: "Layer_1"
            }), /*#__PURE__*/ React.createElement("g", {
                id: "spin_x5F_alt"
            }, /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
                d: "M4.691,27.32C1.664,24.297,0,20.281,0,16C0,7.18,7.176,0,16,0l2,2l-2,2C9.383,4,4,9.383,4,16 c0,3.211,1.25,6.227,3.52,8.492l-2.457,0.32L4.691,27.32L4.691,27.32z",
                fill: "#F2F0F3"
            }), /*#__PURE__*/ React.createElement("path", {
                d: "M16,32l-2-1.992L16,28c6.617,0,12-5.383,12-12c0-3.203-1.25-6.219-3.523-8.488l2.461-0.324 l0.367-2.504C30.332,7.707,32,11.727,32,16C32,24.82,24.82,32,16,32L16,32z",
                fill: "#F2F0F3"
            }))));
        }
        return getRealContent();
    };
    return /*#__PURE__*/ React.createElement("button", _extends({
        disabled: disabled
    }, props, {
        className: classname({
            "font-bold rounded  mr-1 mb-1 ease-linear transition-all duration-150 text-center flex items-center justify-center": true,
            // Outline none
            "bg-secondary text-white hover:bg-secondaryD1 active:bg-secondaryL1": "default" == variant && !outlined && !textButton || "secondary" == variant && !outlined && !textButton,
            "bg-primary text-white hover:bg-primaryD1 active:bg-primaryL1": "primary" == variant && !outlined && !textButton,
            "bg-success text-white hover:bg-successD1 active:bg-successL1": "success" == variant && !outlined && !textButton,
            "bg-info text-white hover:bg-infoD1 active:bg-infoL1": "info" == variant && !outlined && !textButton,
            "bg-warning text-white hover:bg-warningD1 active:bg-warningL1": "warning" == variant && !outlined && !textButton,
            "bg-danger text-white hover:bg-dangerD1 active:bg-dangerL1": "danger" == variant && !outlined && !textButton,
            // Outline
            "outline outline-2 bg-transparent": outlined && !textButton,
            "outline-secondary text-secondary hover:bg-secondaryD1 hover:text-white active:bg-secondaryL1 active:outline-secondaryL1 active:text-white": "default" == variant && outlined && !textButton || "secondary" == variant && outlined && !textButton,
            "outline-primary text-primary hover:bg-primaryD1 hover:outline-primaryD1 hover:text-white active:bg-primaryL1 active:outline-primaryL1 active:text-white": "primary" == variant && outlined && !textButton,
            "outline-success text-success hover:bg-successD1 hover:outline-successD1 hover:text-white active:bg-successL1 active:outline-successL1 active:text-white": "success" == variant && outlined && !textButton,
            "outline-info text-info hover:bg-infoD1 hover:outline-infoD1 hover:text-white active:bg-infoL1 active:outline-infoL1 active:text-white": "info" == variant && outlined && !textButton,
            "outline-warning text-warning hover:bg-warningD1 hover:outline-warningD1 hover:text-white active:bg-warningL1 active:outline-warningL1 active:text-white": "warning" == variant && outlined && !textButton,
            "outline-danger text-danger hover:bg-dangerD1 hover:outline-dangerD1 hover:text-white active:bg-dangerL1 active:outline-dangerL1 active:text-white": "danger" == variant && outlined && !textButton,
            //textButton
            "text-secondary hover:text-secondaryD1 active:text-secondaryL1": "default" == variant && textButton || "secondary" == variant && textButton,
            "text-primary hover:text-primaryD1 active:text-primaryL1": "primary" == variant && textButton,
            "text-success hover:text-successD1 active:text-successL1": "success" == variant && textButton,
            "text-info hover:text-infoD1 active:text-infoL1": "info" == variant && textButton,
            "text-warning hover:text-warningD1 active:text-warningL1": "warning" == variant && textButton,
            "text-danger  hover:text-dangerD1 active:text-dangerL1": "danger" == variant && textButton,
            // Size
            "text-sm py-1.5 px-3": "sm" == size,
            "text-base py-2 px-4": "md" == size,
            "opacity-25": disabled,
            "w-full overflow-hidden": full
        })
    }), getContent());
};
