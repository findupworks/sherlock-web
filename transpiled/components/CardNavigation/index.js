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
export var CardNavigation = function(_param) {
    var getIcon = function getIcon() {
        return iconCard ? iconCard : "image";
    };
    var getDefault = function getDefault() {
        return /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "rounded shadow-lg justify-between flex-col bg-white box-content border-b-4 hover hover:border-primary": true,
                "max-w-[230px] w-[220px] min-w-[166px] min-h-[145px]": "sm" == size,
                "max-w-[294px] min-w-[230px] min-h-[200px]": "md" == size,
                "max-w-[358px] min-w-[294px] min-h-[253px]": "lg" == size,
                "hover:bg-light": true
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "rounded justify-center flex items-center"
        }, /*#__PURE__*/ React.createElement("i", {
            className: classname("fa-solid fa-".concat(getIcon(), " text-dark "), {
                "fa-3x m-8": "sm" == size,
                "fa-4x m-10": "md" == size,
                "fa-5x m-12": "lg" == size
            })
        })), /*#__PURE__*/ React.createElement("div", {
            className: "justify-center items-center px-4 py-2"
        }, /*#__PURE__*/ React.createElement("p", {
            className: "text-base text-center break-all"
        }, title ? title : "Card Title"), /*#__PURE__*/ React.createElement("p", {
            className: "text-darkD1 text-center mt-2 mb-4 break-all"
        }, body ? body : "Build a page using page fragments and edit content inline.")));
    };
    var getSmall = function getSmall() {
        return /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "rounded shadow-lg bg-white box-content border-b-4 hover hover:border-primary": true,
                "max-w-[230px] w-[200px] min-w-[166px] min-h-[49px]": "sm" == size,
                "max-w-[294px] min-w-[240px] min-h-[60px]": "md" == size,
                "max-w-[358px] min-w-[294px] min-h-[65px]": "lg" == size,
                "hover:bg-light": true
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "rounded flex py-4"
        }, /*#__PURE__*/ React.createElement("i", {
            className: classname("fa-solid fa-".concat(getIcon(), " text-dark fa-2x ml-4"), {})
        }), /*#__PURE__*/ React.createElement("p", {
            className: "text-base text-center break-all pt-1 pr-4 pl-4"
        }, title ? title : "Content page")));
    };
    var iconCard = _param.iconCard, title = _param.title, body = _param.body, _size = _param.size, size = _size === void 0 ? "md" : _size, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, props = _objectWithoutProperties(_param, [
        "iconCard",
        "title",
        "body",
        "size",
        "variant"
    ]);
    return variant === "default" ? getDefault() : getSmall();
};
