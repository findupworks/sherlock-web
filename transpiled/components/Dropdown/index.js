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
import { useDetectClickOutside } from "react-detect-click-outside";
import { Button } from "../Button";
export var Dropdown = function(param) {
    var label = param.label, itemsMenu = param.itemsMenu, leftIcon = param.leftIcon, rightIcon = param.rightIcon, _onClickButtonDropwdon = param.onClickButtonDropwdon, onClickButtonDropwdon = _onClickButtonDropwdon === void 0 ? undefined : _onClickButtonDropwdon, _onChange = param.onChange, onChange = _onChange === void 0 ? undefined : _onChange, _labelButtonDropdown = param.labelButtonDropdown, labelButtonDropdown = _labelButtonDropdown === void 0 ? "Apply" : _labelButtonDropdown, _variant = param.variant, variant = _variant === void 0 ? "default" : _variant, _isSearch = param.isSearch, isSearch = _isSearch === void 0 ? false : _isSearch, _disabled = param.disabled, disabled = _disabled === void 0 ? false : _disabled;
    var ref = _slicedToArray(useState(false), 2), showDropdown = ref[0], setShowDropdown = ref[1];
    var ref1 = useDetectClickOutside({
        onTriggered: function() {
            return setShowDropdown(false);
        }
    });
    var ref2 = _slicedToArray(useState(""), 2), search = ref2[0], setSearch = ref2[1];
    var ref3 = _slicedToArray(useState(""), 2), dropdownItemIndexSelected = ref3[0], SetDropdownItemIndexSelected = ref3[1];
    var icon = function(icon) {
        return /*#__PURE__*/ React.createElement("i", {
            className: "fas pt-1 fa-".concat(icon)
        });
    };
    var getLeftIcon = function() {
        if (leftIcon) return icon(leftIcon);
    };
    var getRightIcon = function() {
        if (rightIcon) return icon(rightIcon);
    };
    var toggleContentSubItens = function(index) {
        if (index != dropdownItemIndexSelected) {
            SetDropdownItemIndexSelected(index);
        } else {
            SetDropdownItemIndexSelected("");
        }
    };
    var getSubItem = function(subItem, index) {
        return /*#__PURE__*/ React.createElement("label", {
            htmlFor: subItem === null || subItem === void 0 ? void 0 : subItem.value,
            className: "flex gap-3 text-dark hover:bg-darkL2 mt-4 cursor-pointer"
        }, /*#__PURE__*/ React.createElement("input", {
            type: "checkbox",
            id: subItem === null || subItem === void 0 ? void 0 : subItem.value,
            name: "base",
            checked: subItem === null || subItem === void 0 ? void 0 : subItem.checked,
            value: subItem === null || subItem === void 0 ? void 0 : subItem.value,
            onChange: function(event) {
                return onChange && onChange(event, subItem, index, true);
            }
        }), subItem.label);
    };
    var getDefault = function(item) {
        return /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "w-full p-3 text-xs text-dark capitalize transition-colors duration-200 transform  hover:bg-darkL2 cursor-pointer": true,
                //isDivider
                "border-b border-darkL1": item === null || item === void 0 ? void 0 : item.isDivider
            }),
            onClick: item === null || item === void 0 ? void 0 : item.onClick
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center justify-between"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "mx-2"
        }, item === null || item === void 0 ? void 0 : item.label)), (item === null || item === void 0 ? void 0 : item.onClickActionRight) && /*#__PURE__*/ React.createElement("button", {
            onClick: item === null || item === void 0 ? void 0 : item.onClickActionRight
        }, /*#__PURE__*/ React.createElement("i", {
            className: "fa-solid fa-chevron-right"
        }))));
    };
    var getIcon = function(item) {
        return /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "w-full p-3 text-xs text-dark capitalize transition-colors duration-200 transform  hover:bg-darkL2 cursor-pointer": true,
                //isDivider
                "border-b border-darkL1": item === null || item === void 0 ? void 0 : item.isDivider
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center justify-between"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center"
        }, (item === null || item === void 0 ? void 0 : item.icon) && /*#__PURE__*/ React.createElement("i", {
            className: "fas fa-".concat(item === null || item === void 0 ? void 0 : item.icon)
        }), /*#__PURE__*/ React.createElement("span", {
            className: "mx-2"
        }, item === null || item === void 0 ? void 0 : item.label)), (item === null || item === void 0 ? void 0 : item.onClickActionRight) && /*#__PURE__*/ React.createElement("button", {
            onClick: item === null || item === void 0 ? void 0 : item.onClickActionRight
        }, /*#__PURE__*/ React.createElement("i", {
            className: "fa-solid fa-chevron-right"
        }))));
    };
    var getRadio = function(item, index) {
        return /*#__PURE__*/ React.createElement("div", null, (item === null || item === void 0 ? void 0 : item.isTitleFilterBy) && /*#__PURE__*/ React.createElement("div", {
            className: "font-semibold text-xs text-dark mt-2 ml-2"
        }, "FILTRAR POR"), /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "flex items-center w-full justify-between p-3 text-xs text-dark capitalize transition-colors duration-200 transform hover:bg-darkL2 cursor-pointer": true
            }),
            onChange: function(event) {
                return onChange && onChange(event, item, index, false);
            }
        }, /*#__PURE__*/ React.createElement("label", {
            htmlFor: item === null || item === void 0 ? void 0 : item.value,
            className: "flex gap-2"
        }, /*#__PURE__*/ React.createElement("input", {
            type: "radio",
            id: item === null || item === void 0 ? void 0 : item.value,
            name: "base",
            value: item === null || item === void 0 ? void 0 : item.value,
            checked: item === null || item === void 0 ? void 0 : item.checked
        }), item === null || item === void 0 ? void 0 : item.label), (item === null || item === void 0 ? void 0 : item.onClickActionRight) && /*#__PURE__*/ React.createElement("button", {
            onClick: item === null || item === void 0 ? void 0 : item.onClickActionRight
        }, /*#__PURE__*/ React.createElement("i", {
            className: "fa-solid fa-chevron-right"
        }))));
    };
    var getCheckBox = function(item, index) {
        var ref;
        var arrowActionRight = function() {
            if (item === null || item === void 0 ? void 0 : item.onClickActionRight) {
                var ref;
                if ((item === null || item === void 0 ? void 0 : item.subItens) && (item === null || item === void 0 ? void 0 : (ref = item.subItens) === null || ref === void 0 ? void 0 : ref.length) > 0) {
                    return /*#__PURE__*/ React.createElement("i", {
                        className: "fa-solid fa-".concat(dropdownItemIndexSelected == index ? "angle-down" : "chevron-right")
                    });
                }
                return /*#__PURE__*/ React.createElement("button", {
                    onClick: item === null || item === void 0 ? void 0 : item.onClickActionRight
                }, /*#__PURE__*/ React.createElement("i", {
                    className: "truncate fa-solid fa-chevron-right"
                }));
            }
            return /*#__PURE__*/ React.createElement(React.Fragment, null);
        };
        return /*#__PURE__*/ React.createElement("div", null, (item === null || item === void 0 ? void 0 : item.isTitleFilterBy) && /*#__PURE__*/ React.createElement("div", {
            className: "font-semibold text-xs text-dark mt-5 ml-2"
        }, "FILTRAR POR"), /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center w-full justify-between text-xs p-3 text-dark capitalize transition-colors duration-200 transform hover:bg-darkL2 cursor-pointer",
            onClick: function() {
                return toggleContentSubItens(index);
            }
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex gap-2"
        }, /*#__PURE__*/ React.createElement("input", {
            type: "checkbox",
            id: item === null || item === void 0 ? void 0 : item.value,
            checked: item === null || item === void 0 ? void 0 : item.checked,
            value: item === null || item === void 0 ? void 0 : item.value,
            onChange: function(event) {
                return onChange && onChange(event, item, Number(index), false);
            }
        }), /*#__PURE__*/ React.createElement("span", null, item === null || item === void 0 ? void 0 : item.label)), arrowActionRight()), (item === null || item === void 0 ? void 0 : item.subItens) && (item === null || item === void 0 ? void 0 : (ref = item.subItens) === null || ref === void 0 ? void 0 : ref.length) > 0 && /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "w-full justify-between text-xs text-dark capitalize transition-colors duration-200 transform ml-2 px-2": true,
                block: dropdownItemIndexSelected == index,
                hidden: dropdownItemIndexSelected != index
            })
        }, item === null || item === void 0 ? void 0 : item.subItens.map(function(subItem, index) {
            return getSubItem(subItem, index);
        })));
    };
    var getFilter = function(item, index) {
        if ((item === null || item === void 0 ? void 0 : item.typeInput) == "checkbox") {
            return getCheckBox(item, index);
        }
        if ((item === null || item === void 0 ? void 0 : item.typeInput) == "radio") {
            return getRadio(item, Number(index));
        }
        return /*#__PURE__*/ React.createElement(React.Fragment, null);
    };
    var variantTypeCheck = function(item, index) {
        if (variant === "default") {
            return getDefault(item);
        }
        if (variant === "icon") {
            return getIcon(item);
        }
        if (variant === "checkbox") {
            return getCheckBox(item, String(index));
        }
        if (variant === "radio") {
            return getRadio(item, index);
        }
        if (variant === "filter") {
            return getFilter(item, String(index));
        }
    };
    // search
    var listFilter = itemsMenu === null || itemsMenu === void 0 ? void 0 : itemsMenu.filter(function(item) {
        var ref;
        return item === null || item === void 0 ? void 0 : (ref = item.label) === null || ref === void 0 ? void 0 : ref.toLocaleLowerCase().includes(search === null || search === void 0 ? void 0 : search.toLocaleLowerCase());
    });
    var content = function() {
        var toggleDropwdon = function() {
            if (variant === "filter") {
                return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("input", {
                    className: "relative p-2.5 text-xs border text-dark w-full rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring focus:outline-none",
                    onClick: function() {
                        return setShowDropdown(!showDropdown);
                    },
                    placeholder: label,
                    onChange: function(e) {
                        return setSearch(e.target.value);
                    },
                    disabled: disabled
                }), /*#__PURE__*/ React.createElement("i", {
                    onClick: function() {
                        return setShowDropdown(!showDropdown);
                    },
                    className: "fa-solid fa-chevron-down absolute right-2 top-3 text-dark"
                }));
            }
            return /*#__PURE__*/ React.createElement("button", {
                className: "border-none outline outline-none px-2",
                onClick: function() {
                    return setShowDropdown(!showDropdown);
                }
            }, getLeftIcon(), label, getRightIcon());
        };
        return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "relative flex justify-between": true,
                "border-none": variant != "filter"
            }),
            ref: ref1
        }, /*#__PURE__*/ React.createElement("div", {
            className: "relative inline-block rounded-lg w-full"
        }, toggleDropwdon(), showDropdown ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "absolute right-0 z-20 w-full py-2 mt-2 bg-white rounded-md shadow-xl transition duration-150 ease-out transform": variant !== "filter",
                "absolute inset-x-0 z-10 w-full mt-2 rounded-md transition duration-150 bg-white max-h-60": variant === "filter"
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "rounded-md transition duration-150 bg-white max-h-44 scrollbar-hide overflow-auto ease-out transform scale-100 opacity-100 mb-2"
        }, listFilter.map(function(item, index) {
            return variantTypeCheck(item, index);
        })), /*#__PURE__*/ React.createElement("div", {
            className: "mx-2 my-2"
        }, onClickButtonDropwdon && /*#__PURE__*/ React.createElement(Button, {
            label: labelButtonDropdown,
            full: true,
            variant: "primary",
            onClick: onClickButtonDropwdon
        })))) : "")));
    };
    return content();
};
