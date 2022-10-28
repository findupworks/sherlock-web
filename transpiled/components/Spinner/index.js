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
import classNames from "classnames";
function getVariantColor(variant) {
    if (variant == "primary" || variant == "default") return "#0086D6";
    if (variant == "secondary") return "#3CDBC0";
    if (variant == "success") return "#287D3C";
    if (variant == "danger") return "#DA1414";
    if (variant == "warning") return "#B95000";
    if (variant == "info") return "#041E42";
}
export var Spinner = function(_param) {
    var _size = _param.size, size = _size === void 0 ? "md" : _size, _variant = _param.variant, variant = _variant === void 0 ? "primary" : _variant, props = _objectWithoutProperties(_param, [
        "size",
        "variant"
    ]);
    return /*#__PURE__*/ React.createElement("svg", {
        className: classNames({
            "animate-spin -ml-1 mr-3 text-white": true,
            "w-2 h-2": size == "sm",
            "w-5 h-5": size == "md",
            "w-10 h-10": size == "lg"
        }),
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ React.createElement("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: 4
    }), /*#__PURE__*/ React.createElement("path", {
        className: "opacity-80",
        fill: getVariantColor(variant),
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }));
};
