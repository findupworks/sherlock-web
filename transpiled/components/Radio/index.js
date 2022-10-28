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
export var Radio = function(_param) {
    var label = _param.label, _size = _param.size, size = _size === void 0 ? "md" : _size, disabled = _param.disabled, _checked = _param.checked, checked = _checked === void 0 ? false : _checked, onClick = _param.onClick, props = _objectWithoutProperties(_param, [
        "label",
        "size",
        "disabled",
        "checked",
        "onClick"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center"
    }, "\xa0", /*#__PURE__*/ React.createElement("input", {
        type: "radio",
        id: "html",
        name: "fav_language",
        value: "HTML",
        className: classname({
            "appearance-none rounded-full border border-secondary bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2": true,
            "h-3 w-3 ": "sm" == size,
            "h-4 w-4 ": "md" == size,
            "h-5 w-5 ": "lg" == size,
            "bg-white border-primary border-4": checked,
            "bg-gray-500 border-white border-2": !checked && disabled,
            "opacity-50 cursor-default": disabled,
            "cursor-pointer": !disabled
        }),
        disabled: disabled,
        checked: checked,
        onClick: onClick
    }), label != null && label != "" && label != undefined ? /*#__PURE__*/ React.createElement("p", {
        className: classname({
            "text-gray-600": true,
            "opacity-50": disabled,
            "text-xs": "sm" == size,
            "text-sm": "md" == size,
            "text-md": "lg" == size
        })
    }, label) : /*#__PURE__*/ React.createElement("div", null));
};
