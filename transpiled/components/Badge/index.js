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
export var Badge = function(_param) {
    var getDefault = function getDefault() {
        return /*#__PURE__*/ React.createElement("span", {
            className: classname({
                "text-xs font-semibold inline-block py-px px-1 uppercase last:mr-0 mr-1 rounded-full": true,
                // Outline none
                "bg-secondary text-secondaryL3": "default" == color,
                "bg-primary text-white": "primary" == color,
                "bg-secondaryL3 text-secondary": "secondary" == color,
                "bg-success text-white": "success" == color,
                "bg-info text-white": "info" == color,
                "bg-warning text-white": "warning" == color,
                "bg-danger text-white": "danger" == color
            })
        }, label);
    };
    var getKanban = function getKanban() {
        return /*#__PURE__*/ React.createElement("span", {
            className: classname({
                "text-xs font-semibold inline-block py-px px-1 uppercase last:mr-0 mr-1 rounded-lg pl-4 pr-4 pt-1 pb-1 text-center": true,
                // Outline none
                "bg-secondary text-secondaryL3": "default" == color,
                "bg-primary text-white": "primary" == color,
                "bg-secondaryL3 text-secondary": "secondary" == color,
                "bg-success text-white": "success" == color,
                "bg-info text-white": "info" == color,
                "bg-warning text-white": "warning" == color,
                "bg-danger text-white": "danger" == color
            })
        }, /*#__PURE__*/ React.createElement("p", null, label));
    };
    var label = _param.label, _color = _param.color, color = _color === void 0 ? "default" : _color, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, props = _objectWithoutProperties(_param, [
        "label",
        "color",
        "variant"
    ]);
    return variant === "default" ? getDefault() : getKanban();
};
