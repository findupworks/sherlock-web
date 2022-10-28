function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
import React from "react";
import classname from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Sticker } from "../Sticker";
import { Label } from "../Label";
import { Dropdown } from "../Dropdown";
import { useState, useEffect } from "react";
export var ItemList = function(param) {
    var title = param.title, subTitle = param.subTitle, labelText = param.labelText, img = param.img, icon = param.icon, dropDrownAction = param.dropDrownAction, isAselectableItem = param.isAselectableItem, _onClickActionInfo = param.onClickActionInfo, onClickActionInfo = _onClickActionInfo === void 0 ? undefined : _onClickActionInfo, _onClickActionDelete = param.onClickActionDelete, onClickActionDelete = _onClickActionDelete === void 0 ? undefined : _onClickActionDelete, _onClick = param.onClick, onClick = _onClick === void 0 ? undefined : _onClick, _onClickActionCopy = param.onClickActionCopy, onClickActionCopy = _onClickActionCopy === void 0 ? undefined : _onClickActionCopy, keyItem = param.keyItem, _variant = param.variant, variant = _variant === void 0 ? "group" : _variant, itemsKeySelected = param.itemsKeySelected, handleItemSelected = param.handleItemSelected;
    var ref = _slicedToArray(useState(false), 2), showActions = ref[0], setShowActions = ref[1];
    var Actions = function() {
        if (showActions && isAselectableItem) {
            return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("button", {
                onClick: function() {
                    return onClickActionInfo && onClickActionInfo(keyItem);
                }
            }, /*#__PURE__*/ React.createElement("i", {
                className: "fa-solid fa-info text-dark"
            })), /*#__PURE__*/ React.createElement("button", {
                onClick: function() {
                    return onClickActionDelete && onClickActionDelete(keyItem);
                }
            }, /*#__PURE__*/ React.createElement("i", {
                className: "fa-regular fa-trash-can text-base text-dark"
            })), /*#__PURE__*/ React.createElement("button", {
                onClick: function() {
                    return onClickActionCopy && onClickActionCopy(keyItem);
                }
            }, /*#__PURE__*/ React.createElement("i", {
                className: "fa-regular fa-copy text-base text-dark"
            })));
        }
        return /*#__PURE__*/ React.createElement(React.Fragment, null);
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "flex items-start gap-4 justify-between  border  border-darkL2 p-4 cursor-pointer w-full": true,
            //variant list
            "mt-0 ": variant == "group",
            "mt-4": variant == "divider",
            " bg-primaryL3": isAselectableItem && (itemsKeySelected === null || itemsKeySelected === void 0 ? void 0 : itemsKeySelected.includes(keyItem)),
            " bg-lightL1": !isAselectableItem && (itemsKeySelected === null || itemsKeySelected === void 0 ? void 0 : itemsKeySelected.includes(keyItem))
        }),
        onMouseOver: function() {
            return setShowActions(true);
        },
        onMouseOut: function() {
            return setShowActions(false);
        },
        onClick: function() {
            onClick && onClick(keyItem);
            handleItemSelected && handleItemSelected();
        }
    }, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-start gap-4"
    }, isAselectableItem && /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
        checked: (itemsKeySelected === null || itemsKeySelected === void 0 ? void 0 : itemsKeySelected.includes(keyItem)) ? true : false,
        className: "mt-1"
    }), /*#__PURE__*/ React.createElement("div", {
        className: "-translate-y-2 "
    }, /*#__PURE__*/ React.createElement(Sticker, {
        img: img,
        icon: icon
    })), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h2", {
        className: "text-dark text-sm font-semibold"
    }, title), labelText && /*#__PURE__*/ React.createElement("h3", {
        className: "font-normal text-sm text-secondary mb-1"
    }, subTitle), labelText && /*#__PURE__*/ React.createElement(Label, {
        size: "sm",
        outlined: true,
        variant: "success",
        label: labelText
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "flex items-start gap-4 -translate-y-0.5"
    }, /*#__PURE__*/ React.createElement(Actions, null), /*#__PURE__*/ React.createElement("div", {
        className: "-translate-y-2"
    }, /*#__PURE__*/ React.createElement(Dropdown, {
        itemsMenu: dropDrownAction ? dropDrownAction : [],
        leftIcon: "fa-solid fa-ellipsis-vertical",
        variant: "default"
    }))));
};
export var List = function(_param) {
    var itemsList = _param.itemsList, _variant = _param.variant, variant = _variant === void 0 ? "group" : _variant, onChangeItemsSelected = _param.onChangeItemsSelected, props = _objectWithoutProperties(_param, [
        "itemsList",
        "variant",
        "onChangeItemsSelected"
    ]);
    var ref = _slicedToArray(useState([]), 2), itemsKeySelected = ref[0], setItemsKeySelected = ref[1];
    var handleItemSelected = function(key, isAselectableItem) {
        var listKeySelectedLocal = itemsKeySelected;
        if (isAselectableItem) {
            if (itemsKeySelected.includes(key)) {
                listKeySelectedLocal = listKeySelectedLocal.filter(function(keyLocal) {
                    return keyLocal != key;
                });
                setItemsKeySelected(listKeySelectedLocal);
            } else {
                setItemsKeySelected(_toConsumableArray(itemsKeySelected).concat([
                    key
                ]));
            }
        } else {
            if (!itemsKeySelected.includes(key)) {
                setItemsKeySelected(_toConsumableArray(itemsKeySelected).concat([
                    key
                ]));
            }
        }
    };
    useEffect(function() {
        onChangeItemsSelected && onChangeItemsSelected(itemsKeySelected);
    }, [
        itemsKeySelected
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, itemsList === null || itemsList === void 0 ? void 0 : itemsList.map(function(item) {
        /*#__PURE__*/ return React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(ItemList, {
            title: item === null || item === void 0 ? void 0 : item.title,
            subTitle: item === null || item === void 0 ? void 0 : item.subTitle,
            labelText: item === null || item === void 0 ? void 0 : item.labelText,
            icon: item === null || item === void 0 ? void 0 : item.icon,
            img: item === null || item === void 0 ? void 0 : item.img,
            isAselectableItem: item === null || item === void 0 ? void 0 : item.isAselectableItem,
            onClick: item === null || item === void 0 ? void 0 : item.onClick,
            onClickActionInfo: item === null || item === void 0 ? void 0 : item.onClickActionInfo,
            onClickActionDelete: item === null || item === void 0 ? void 0 : item.onClickActionDelete,
            onClickActionCopy: item === null || item === void 0 ? void 0 : item.onClickActionCopy,
            keyItem: item === null || item === void 0 ? void 0 : item.keyItem,
            handleItemSelected: function() {
                return handleItemSelected(item === null || item === void 0 ? void 0 : item.keyItem, item === null || item === void 0 ? void 0 : item.isAselectableItem);
            },
            itemsKeySelected: itemsKeySelected,
            variant: variant,
            dropDrownAction: item === null || item === void 0 ? void 0 : item.dropDrownAction
        }));
    }));
};
