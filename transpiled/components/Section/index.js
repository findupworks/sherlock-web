function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import React, { useState } from "react";
import classname from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
export var Section = function(_param) {
    var items = _param.items, _size = _param.size, size = _size === void 0 ? "md" : _size, props = _objectWithoutProperties(_param, [
        "items",
        "size"
    ]);
    // const [state, setState] = useState([]);
    return /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "max-w-[550px] min-w-[500px]": "sm" == size,
            "max-w-[750px] min-w-[700px]": "md" == size,
            "max-w-[900px] min-w-[850px]": "lg" == size
        })
    }, items.map(function(item, index) {
        return /*#__PURE__*/ React.createElement(SectionItem, {
            label: item.label,
            index: index,
            hasIcon: !item.icon,
            disabled: item.disabled
        });
    }));
};
export var SectionItem = function(param) {
    var label = param.label, hasIcon = param.hasIcon, disabled = param.disabled, index = param.index;
    var onClickSection = function onClickSection(index) {
        if (index !== openSection) {
            setShowBodySection(true);
            setOpenSection(index);
        } else {
            setShowBodySection(false);
            setOpenSection("");
        }
    };
    var ref = _slicedToArray(useState(""), 2), openSection = ref[0], setOpenSection = ref[1];
    var ref1 = _slicedToArray(useState(false), 2), showBodySection = ref1[0], setShowBodySection = ref1[1];
    return /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "opacity-25": disabled
        })
    }, /*#__PURE__*/ React.createElement("h1", {
        className: disabled || hasIcon ? "pointer-events-none" : "",
        onClick: function() {
            return onClickSection(index);
        }
    }, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "flex disabled items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-secondaryL2"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "text-secondary hover:text-dark"
    }, "  ", label, " "), hasIcon ? "" : /*#__PURE__*/ React.createElement("i", {
        className: "w-6 h-6 shrink-0 pl-2 pt-1 fas fa-".concat((index === null || index === void 0 ? void 0 : index.toString()) == openSection ? "angle-down" : "angle-right")
    }))), /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "hidden": !showBodySection
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: "p-5 font-light"
    }, /*#__PURE__*/ React.createElement("p", {
        className: "mb-2 text-gray-500 dark:text-gray-400"
    }, "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."), /*#__PURE__*/ React.createElement("p", {
        className: "text-gray-500 dark:text-gray-400"
    }, "Check out the ", /*#__PURE__*/ React.createElement("a", {
        href: "https://flowbite.com/figma/",
        className: "text-blue-600 dark:text-blue-500 hover:underline"
    }, "Figma design system"), " based on the utility classes from Tailwind CSS and components from Flowbite."))));
};
