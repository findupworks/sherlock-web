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
export var Sticker = function(_param) {
    var _size = _param.size, size = _size === void 0 ? "md" : _size, rounded = _param.rounded, _img = _param.img, img = _img === void 0 ? "" : _img, _icon = _param.icon, icon = _icon === void 0 ? "image" : _icon, props = _objectWithoutProperties(_param, [
        "size",
        "rounded",
        "img",
        "icon"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "w-6 h-6 fa-xs": "xs" == size,
            "w-8 h-8 fa-sm": "sm" == size,
            "w-10 h-10 ": "md" == size,
            "w-12 h-12 fa-lg": "lg" == size,
            "w-20 h-20 fa-2xl": "xl" == size,
            "bg-white grid grid-cols-3": img == "" || img == null,
            "rounded-full": rounded,
            "rounded-md": !rounded
        })
    }, img != null && img != "" && img != undefined ? /*#__PURE__*/ React.createElement("img", {
        className: classname({
            "rounded-full": rounded,
            "rounded-md": !rounded,
            "h-6": "xs" == size,
            "h-8": "sm" == size,
            "h-10": "md" == size,
            "h-12": "lg" == size,
            "h-20": "xl" == size
        }),
        src: img
    }) : /*#__PURE__*/ React.createElement("div", null), icon != null && icon != "" && icon != undefined && (img == "" || img == null) ? /*#__PURE__*/ React.createElement("i", {
        className: "fas fa-".concat(icon, " place-self-center text-darkD1")
    }) : /*#__PURE__*/ React.createElement("div", null));
};
