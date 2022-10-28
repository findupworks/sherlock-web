function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
export var Switch = function(_param) {
    var label = _param.label, _size = _param.size, size = _size === void 0 ? "sm" : _size, disabled = _param.disabled, checked = _param.checked, onClick = _param.onClick, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, checkedIcon = _param.checkedIcon, notCheckedIcon = _param.notCheckedIcon, props = _objectWithoutProperties(_param, [
        "label",
        "size",
        "disabled",
        "checked",
        "onClick",
        "variant",
        "checkedIcon",
        "notCheckedIcon"
    ]);
    var _obj;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("label", {
        className: classname({
            "inline-flex relative items-center cursor-pointer": true,
            "opacity-50": disabled
        }),
        onClick: onClick
    }, /*#__PURE__*/ React.createElement("div", {
        className: "relative"
    }, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "block rounded-full": true,
            "bg-primary": "default" == variant,
            "bg-secondary": "secondary" == variant,
            "bg-success": "success" == variant,
            "bg-info": "info" == variant,
            "bg-danger": "danger" == variant,
            "bg-warning": "warning" == variant,
            "w-[60px] h-8": "sm" == size,
            "w-[70px] h-9": "md" == size
        })
    }), /*#__PURE__*/ React.createElement("div", {
        className: "absolute left-1 top-1"
    }, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "bg-white rounded-full transition": true,
            " p-[0.01em] px-[0.23em]": "sm" == size,
            "p-[0.1em] px-[0.3em]": "md" == size,
            " translate-x-full ": checked
        })
    }, /*#__PURE__*/ React.createElement("i", {
        className: classname((_obj = {
            "fas fa-fw  fa-s/m fa-be/ll-slash": true,
            "text-primary": "default" == variant,
            "text-secondary": "secondary" == variant,
            "fa-sm": "sm" == size,
            "fa-md": "md" == size
        }, _defineProperty(_obj, "fa-".concat(checkedIcon), checked), _defineProperty(_obj, "fa-".concat(notCheckedIcon), !checked), _obj))
    })))), label != "" && label != null && label != undefined ? /*#__PURE__*/ React.createElement("span", {
        className: classname({
            "ml-3 font-medium text-darkD1": true,
            "text-sm": "sm" == size,
            "text-md": "md" == size
        })
    }, label) : /*#__PURE__*/ React.createElement("div", null)));
};
