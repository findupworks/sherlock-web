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
export var Box = function(_param) {
    var props = _extends({}, _param);
    return /*#__PURE__*/ React.createElement("div", {
        className: props.className
    }, props.children);
};
export var BoxHeader = function(_param) {
    var props = _extends({}, _param);
    return /*#__PURE__*/ React.createElement("div", {
        className: props.className
    }, props.children);
};
export var BoxBody = function(_param) {
    var props = _extends({}, _param);
    return /*#__PURE__*/ React.createElement("div", {
        className: props.className
    }, props.children);
};
export var BoxFooter = function(_param) {
    var props = _extends({}, _param);
    return /*#__PURE__*/ React.createElement("div", {
        className: props.className
    }, props.children);
};
