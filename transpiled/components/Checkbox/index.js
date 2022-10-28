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
export var Checkbox = function(_param) {
    var label = _param.label, _size = _param.size, size = _size === void 0 ? "md" : _size, disabled = _param.disabled, checked = _param.checked, onClick = _param.onClick, icon = _param.icon, props = _objectWithoutProperties(_param, [
        "label",
        "size",
        "disabled",
        "checked",
        "onClick",
        "icon"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "flex items-center mr-4 mb-2 cursor-pointer": true,
            "opacity-50": disabled
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "bg-white rounded-sm border border-secondary flex flex-shrink-0 justify-center items-center mr-2": true,
            "bg-primary border-none": checked,
            "bg-gray-500 border-white border-1": !checked && disabled,
            "cursor-pointer": !disabled,
            "w-4 h-4 fa-xs": "sm" == size,
            "w-5 h-5 ": "md" == size,
            "w-6 h-6 ": "lg" == size
        })
    }, checked ? /*#__PURE__*/ React.createElement("i", {
        className: "fas fa-".concat(icon, " text-white")
    }) : null), label != "" && label != null && label != undefined ? /*#__PURE__*/ React.createElement("label", {
        className: classname({
            "text-sm ": "sm" == size,
            "text-md ": "md" == size,
            "text-lg": "lg" == size
        })
    }, label) : /*#__PURE__*/ React.createElement("div", null));
};
