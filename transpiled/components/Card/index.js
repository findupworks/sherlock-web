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
import { Dropdown } from "../Dropdown";
export var Card = function(_param) {
    var getVariant = function getVariant() {
        if ("default" === variant) {
            return /*#__PURE__*/ React.createElement("img", {
                className: "w-full",
                src: imageCard ? imageCard : "https://v1.tailwindcss.com/img/card-top.jpg"
            });
        }
        if ("userCard" === variant) {
            return /*#__PURE__*/ React.createElement("div", {
                className: classname({
                    "flex justify-center items-center": true,
                    "h-[140px]": "sm" == size,
                    "h-[178px]": "md" == size,
                    "h-[217px]": "lg" == size
                })
            }, getIconCard());
        }
        if ("iconCard" === variant) {
            return /*#__PURE__*/ React.createElement("div", {
                className: classname({
                    "flex justify-center items-center": true,
                    "h-[140px]": "sm" == size,
                    "h-[178px]": "md" == size,
                    "h-[217px]": "lg" == size
                })
            }, getIconCard());
        }
    };
    var getContent = function getContent() {
        return /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "rounded shadow-lg bg-white hover:border-sky-600 hover:border box-content": true,
                "max-w-[230px] min-w-[166px]": "sm" == size,
                "max-w-[294px] min-w-[230px]": "md" == size,
                "max-w-[358px] min-w-[294px]": "lg" == size,
                "border-sky-600 border": check
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "relative"
        }, /*#__PURE__*/ React.createElement("input", {
            className: "absolute top-3 left-3 h-4 w-4 border border-teal rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
            type: "checkbox",
            id: "flexCheckDefault",
            checked: check,
            onClick: onClickCheck
        }), variant === "userCard" ? "" : /*#__PURE__*/ React.createElement("button", {
            className: "absolute bottom-5 left-3 h-8 w-8 border rounded bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
            onClick: onTapIcon
        }, getIconButton()), getVariant()), /*#__PURE__*/ React.createElement("div", {
            className: "flex justify-between px-4 py-2 border-t-2 border-secondaryL3 bg-white"
        }, /*#__PURE__*/ React.createElement("div", {
            onClick: onTapCard
        }, /*#__PURE__*/ React.createElement("p", {
            className: "text-dark break-all"
        }, title ? title : "Card Title"), /*#__PURE__*/ React.createElement("p", {
            className: "text-secondary text-base break-all"
        }, body ? body : "Body Text")), /*#__PURE__*/ React.createElement("div", {
            className: "h-10 w-5 pl-3"
        }, /*#__PURE__*/ React.createElement(Dropdown, {
            itemsMenu: itemsMenu,
            leftIcon: "fa-solid fa-ellipsis-vertical",
            variant: "default"
        }))), /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "px-4 pb-2": true
            })
        }, tags.map(function(tag) {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, getTag(tag));
        })));
    };
    var getHorizontalCard = function getHorizontalCard() {
        return /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "rounded grid grid-cols-2 shadow-lg bg-white hover:border-sky-600 hover:border box-content": true,
                "max-w-[250px] min-w-[196px]": "sm" == size,
                "max-w-[294px] min-w-[230px]": "md" == size,
                "max-w-[358px] min-w-[294px]": "lg" == size,
                "border-sky-600 border": check
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-start pl-2 pt-2 col-span-2 gap-3"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center gap-2"
        }, /*#__PURE__*/ React.createElement("input", {
            className: "top-3 left-3 h-4 w-4 border border-teal rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
            type: "checkbox",
            id: "flexCheckDefault",
            checked: check,
            onClick: onClickCheck
        }), /*#__PURE__*/ React.createElement("button", {
            className: "bottom-5 left-3 h-8 w-8 border rounded bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",
            onClick: onTapIcon
        }, getIconButton())), /*#__PURE__*/ React.createElement("div", {
            onClick: onTapCard,
            className: ""
        }, /*#__PURE__*/ React.createElement("p", {
            className: "text-dark break-all"
        }, title ? title : "Card Title"), /*#__PURE__*/ React.createElement("p", {
            className: "text-secondary text-base break-all"
        }, body ? body : "Body Text"), /*#__PURE__*/ React.createElement("div", {
            className: "mb-2"
        }, tags.map(function(tag) {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, getTag(tag));
        })))), /*#__PURE__*/ React.createElement("div", {
            className: "h-10 col-end-10"
        }, /*#__PURE__*/ React.createElement(Dropdown, {
            itemsMenu: itemsMenu,
            leftIcon: "fa-solid fa-ellipsis-vertical",
            variant: "default"
        })));
    };
    var imageCard = _param.imageCard, title = _param.title, body = _param.body, _checked = _param.checked, checked = _checked === void 0 ? false : _checked, iconCard = _param.iconCard, iconButton = _param.iconButton, _size = _param.size, size = _size === void 0 ? "md" : _size, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, itemsMenu = _param.itemsMenu, tags = _param.tags, onTapCheck = _param.onTapCheck, onTapCard = _param.onTapCard, onTapMenu = _param.onTapMenu, onTapIcon = _param.onTapIcon, props = _objectWithoutProperties(_param, [
        "imageCard",
        "title",
        "body",
        "checked",
        "iconCard",
        "iconButton",
        "size",
        "variant",
        "itemsMenu",
        "tags",
        "onTapCheck",
        "onTapCard",
        "onTapMenu",
        "onTapIcon"
    ]);
    var ref = _slicedToArray(useState(checked), 2), check = ref[0], setCheck = ref[1];
    var onClickCheck = function() {
        setCheck(!check);
        if (onTapCheck) onTapCheck(!check);
    };
    var getIconButton = function() {
        if (iconButton) {
            return /*#__PURE__*/ React.createElement("i", {
                className: "fas fa-".concat(iconButton)
            });
        } else {
            return /*#__PURE__*/ React.createElement("i", {
                className: "fa-solid fa-image"
            });
        }
    };
    var getIconCard = function() {
        if (iconCard) {
            return /*#__PURE__*/ React.createElement("i", {
                className: "fas fa-".concat(iconCard, " fa-4x")
            });
        } else {
            return /*#__PURE__*/ React.createElement("i", {
                className: "fa-solid fa-bolt fa-4x"
            });
        }
    };
    var getTag = function(tags) {
        return /*#__PURE__*/ React.createElement("span", {
            className: classname({
                "inline-block border border-green-400 px-3 py-1 text-xs font-semibold text-success mr-2 mb-2 border-success": true
            })
        }, tags.text);
    };
    return "horizontalCard" === variant ? getHorizontalCard() : getContent();
};
