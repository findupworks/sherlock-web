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
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export var Divider = function(_param) {
    var props = _extends({}, _param);
    return /*#__PURE__*/ React.createElement("hr", _extends({
        className: "border-gray-200 dark:border-gray-700 "
    }, props));
};
