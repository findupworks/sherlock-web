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
export var Label = function(_param) {
    var label = _param.label, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, _size = _param.size, size = _size === void 0 ? "md" : _size, _outlined = _param.outlined, outlined = _outlined === void 0 ? false : _outlined, iconRight = _param.iconRight, props = _objectWithoutProperties(_param, [
        "label",
        "variant",
        "size",
        "outlined",
        "iconRight"
    ]);
    var getIconRIght = function() {
        if (iconRight) return /*#__PURE__*/ React.createElement("i", {
            className: "fas fa-".concat(iconRight)
        });
    };
    return /*#__PURE__*/ React.createElement("span", {
        className: classname({
            "rounded-sm	flex items-center gap-2": true,
            // Variant,  Outline none
            "bg-secondary text-white": "default" == variant && !outlined,
            "bg-secondary text-dark": "secondary" == variant && !outlined,
            "bg-success text-white": "success" == variant && !outlined,
            "bg-info text-white": "info" == variant && !outlined,
            "bg-warning text-white": "warning" == variant && !outlined,
            "bg-danger text-white": "danger" == variant && !outlined,
            //outline
            "bg-transparent outline outline-2 ": outlined,
            "outline-secondaryL2 text-secondary": "default" == variant && outlined,
            "outline-secondaryL2 text-dark": "secondary" == variant && outlined,
            "outline-successL1 text-success": "success" == variant && outlined,
            "outline-infoL1 text-info": "info" == variant && outlined,
            "outline-warningL1 text-warning": "warning" == variant && outlined,
            "outline-dangerL1 text-danger": "danger" == variant && outlined,
            // Size
            "py-px px-1 text-[10px]": "sm" == size,
            "text-xs py-[3px] px-2": "md" == size
        })
    }, label, getIconRIght());
};
