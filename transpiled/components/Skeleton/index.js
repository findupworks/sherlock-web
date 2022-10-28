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
export var Skeleton = function(_param) {
    var _rows = _param.rows, rows = _rows === void 0 ? 1 : _rows, _width = _param.width, width = _width === void 0 ? 100 : _width, _height = _param.height, height = _height === void 0 ? 100 : _height, _rounded = _param.rounded, rounded = _rounded === void 0 ? true : _rounded, props = _objectWithoutProperties(_param, [
        "rows",
        "width",
        "height",
        "rounded"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "animate-pulse "
    }, Array(rows).fill("").map(function(n) {
        return /*#__PURE__*/ React.createElement("div", {
            style: {
                width: "".concat(width, "px"),
                height: "".concat(height, "px")
            },
            className: classNames({
                "bg-gray-200 rounded m-2": true,
                "rounded": !rounded,
                "rounded-full": rounded
            })
        });
    }));
};
