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
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
import "@fortawesome/fontawesome-free/css/all.min.css";
import Select from "react-select";
import { Button } from "../Button";
export var MultiSelect = function(_param) {
    var onChange = _param.onChange, _onClickButton = _param.onClickButton, onClickButton = _onClickButton === void 0 ? undefined : _onClickButton, options = _param.options, _labelButton = _param.labelButton, labelButton = _labelButton === void 0 ? "SELECT" : _labelButton, _isDisabled = _param.isDisabled, isDisabled = _isDisabled === void 0 ? false : _isDisabled, _isLoading = _param.isLoading, isLoading = _isLoading === void 0 ? false : _isLoading, props = _objectWithoutProperties(_param, [
        "onChange",
        "onClickButton",
        "options",
        "labelButton",
        "isDisabled",
        "isLoading"
    ]);
    var colourStyles = {
        container: function(provided) {
            return _objectSpreadProps(_objectSpread({}, provided), {
                width: "80%",
                minWidth: "10rem",
                color: "#7E7E82",
                zIndex: "1000"
            });
        },
        multiValue: function(styles, param) {
            var data = param.data;
            return _objectSpreadProps(_objectSpread({}, styles), {
                backgroundColor: "#0086D6"
            });
        },
        multiValueLabel: function(styles) {
            return _objectSpreadProps(_objectSpread({}, styles), {
                backgroundColor: "#0086D6",
                color: "#F2F0F3"
            });
        },
        multiValueRemove: function(styles, param) {
            var data = param.data;
            return _objectSpreadProps(_objectSpread({}, styles), {
                backgroundColor: "#0086D6",
                color: "#F2F0F3",
                ":hover": {
                    backgroundColor: "#084B76",
                    color: "#F2F0F3"
                }
            });
        }
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "w-full flex gap-2 items-start z-50"
    }, /*#__PURE__*/ React.createElement(Select, {
        styles: colourStyles,
        isMulti: true,
        options: options,
        isDisabled: isDisabled,
        isLoading: isLoading,
        onChange: onChange
    }), onClickButton && /*#__PURE__*/ React.createElement(Button, {
        label: labelButton,
        variant: "primary",
        outlined: true,
        onClick: onClickButton
    }));
};
