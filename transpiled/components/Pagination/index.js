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
import "@fortawesome/fontawesome-free/css/all.min.css";
import classNames from "classnames";
export var PaginationEntries;
(function(PaginationEntries) {
    PaginationEntries[PaginationEntries["ten"] = 10] = "ten";
    PaginationEntries[PaginationEntries["twenty"] = 20] = "twenty";
    PaginationEntries[PaginationEntries["fifty"] = 50] = "fifty";
    PaginationEntries[PaginationEntries["hundred"] = 100] = "hundred";
})(PaginationEntries || (PaginationEntries = {}));
export var Pagination = function(_param) {
    var changeEntries = function changeEntries(entrie) {
        setEntrie(entrie);
        setshowEntries(false);
    };
    var getEntriesElement = function getEntriesElement(entrieOrientation) {
        if (entrieOrientation === "down") {
            return /*#__PURE__*/ React.createElement("div", {
                className: classNames("absolute z-20 w-24 py-2 top-6 bg-white rounded-md shadow-xl transition duration-150 ease-out transform", {
                    hidden: !showEntries,
                    "scale-100 opacity-100": showEntries
                })
            }, /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.ten);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.ten), /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.twenty);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.twenty), /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.fifty);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.fifty), /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.hundred);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.hundred));
        } else {
            return /*#__PURE__*/ React.createElement("div", {
                className: classNames("absolute z-20 w-24 py-2 -top-28 bg-white rounded-md shadow-xl transition duration-150 ease-out transform", {
                    hidden: !showEntries,
                    "scale-100 opacity-100": showEntries
                })
            }, /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.ten);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.ten), /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.twenty);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.twenty), /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.fifty);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.fifty), /*#__PURE__*/ React.createElement("p", {
                onClick: function() {
                    return changeEntries(PaginationEntries.hundred);
                },
                className: "flex flex-row items-center text-gray-600 transition-colors duration-200 transform hover:bg-gray-300"
            }, PaginationEntries.hundred));
        }
    };
    var getPages = function getPages() {
        return /*#__PURE__*/ React.createElement(React.Fragment, null, currentPage - 2 <= 0 || currentPage - 2 >= totalPages ? "" : /*#__PURE__*/ React.createElement("p", {
            className: "page-item 'active'} "
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage - 2);
            },
            className: classNames("cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium")
        }, currentPage - 2)), currentPage - 1 <= 0 || currentPage - 2 >= totalPages ? "" : /*#__PURE__*/ React.createElement("p", {
            className: "page-item 'active'} "
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage - 1);
            },
            className: classNames("cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium")
        }, currentPage - 1)), currentPage > totalPages ? "" : /*#__PURE__*/ React.createElement("p", {
            className: "page-item 'active'} "
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage);
            },
            className: classNames("cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium", {
                "text-darkD2 bg-gray-50": true
            })
        }, currentPage)), currentPage + 1 > totalPages ? "" : /*#__PURE__*/ React.createElement("p", {
            className: "page-item 'active'} "
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage + 1);
            },
            className: classNames("cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium")
        }, currentPage + 1)), currentPage + 2 > totalPages ? "" : /*#__PURE__*/ React.createElement("p", {
            className: "page-item 'active'} "
        }, /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage + 2);
            },
            className: classNames("cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium")
        }, currentPage + 2)));
    };
    var getContent = function getContent() {
        return /*#__PURE__*/ React.createElement("div", {
            className: "bg-white px-4 py-3 flex items-center justify-between sm:px-6 space-x-20",
            onClick: showEntries ? function() {
                return setshowEntries(!showEntries);
            } : function() {
                return "";
            }
        }, /*#__PURE__*/ React.createElement("div", {
            className: "sm:flex-1 sm:flex sm:items-center sm:justify-between0"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex flex-row relative"
        }, /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-gray-700"
        }, entrie, " ", entrieLabel !== null && entrieLabel !== void 0 ? entrieLabel : "entradas"), /*#__PURE__*/ React.createElement("i", {
            className: "cursor-pointer fa-solid fa-caret-".concat(entrieOrientation, " text-primary pl-2 pt-1"),
            onClick: function() {
                return setshowEntries(!showEntries);
            }
        }), getEntriesElement(entrieOrientation), /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-gray-700 pl-2"
        }, showingLabel !== null && showingLabel !== void 0 ? showingLabel : "Exibindo", " ", currentPage * entrie - entrie + 1, " ", toLabel !== null && toLabel !== void 0 ? toLabel : "a", " ", currentPage * entrie, " ", ofLabel !== null && ofLabel !== void 0 ? ofLabel : "de", " ", totalEntries, " ", entrieLabel !== null && entrieLabel !== void 0 ? entrieLabel : "entradas", "."))), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("nav", {
            className: "relative z-0 inline-flex rounded-md -space-x-px",
            "aria-label": "Pagination"
        }, currentPage <= 1 ? "" : /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage - 1);
            },
            className: "cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "sr-only"
        }, "Previous"), /*#__PURE__*/ React.createElement("svg", {
            className: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, /*#__PURE__*/ React.createElement("path", {
            fillRule: "evenodd",
            d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
            clipRule: "evenodd"
        }))), getPages(), currentPage >= totalPages ? "" : /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage + 1);
            },
            className: "cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "sr-only"
        }, "Next"), /*#__PURE__*/ React.createElement("svg", {
            className: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, /*#__PURE__*/ React.createElement("path", {
            fillRule: "evenodd",
            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
            clipRule: "evenodd"
        }))))));
    };
    var getVertical = function getVertical() {
        return /*#__PURE__*/ React.createElement("div", {
            className: "bg-white px-4 py-3 flex flex-col items-center sm:px-6 gap-4",
            onClick: showEntries ? function() {
                return setshowEntries(!showEntries);
            } : function() {
                return "";
            }
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex relative"
        }, /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-gray-700"
        }, entrie, " ", entrieLabel !== null && entrieLabel !== void 0 ? entrieLabel : "Entradas"), /*#__PURE__*/ React.createElement("i", {
            className: "cursor-pointer fa-solid fa-caret-".concat(entrieOrientation, " text-primary pl-2"),
            onClick: function() {
                return setshowEntries(!showEntries);
            }
        }), getEntriesElement(entrieOrientation)), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("p", {
            className: "text-sm text-gray-700"
        }, showingLabel !== null && showingLabel !== void 0 ? showingLabel : "Exibindo", " ", currentPage * entrie - entrie + 1, " ", toLabel !== null && toLabel !== void 0 ? toLabel : "a", " ", currentPage * entrie, " ", ofLabel !== null && ofLabel !== void 0 ? ofLabel : "de", " ", totalEntries, " entries.")), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("nav", {
            className: "relative z-0 inline-flex rounded-md -space-x-px",
            "aria-label": "Pagination"
        }, currentPage <= 1 ? "" : /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage - 1);
            },
            className: "cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "sr-only"
        }, "Previous"), /*#__PURE__*/ React.createElement("svg", {
            className: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, /*#__PURE__*/ React.createElement("path", {
            fillRule: "evenodd",
            d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
            clipRule: "evenodd"
        }))), getPages(), currentPage >= totalPages ? "" : /*#__PURE__*/ React.createElement("a", {
            onClick: function() {
                return onChangePage(currentPage + 1);
            },
            className: "cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "sr-only"
        }, "Next"), /*#__PURE__*/ React.createElement("svg", {
            className: "h-5 w-5",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true"
        }, /*#__PURE__*/ React.createElement("path", {
            fillRule: "evenodd",
            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
            clipRule: "evenodd"
        }))))));
    };
    var variant = _param.variant, _entrieOrientation = _param.entrieOrientation, entrieOrientation = _entrieOrientation === void 0 ? "down" : _entrieOrientation, _currentPage = _param.currentPage, currentPage = _currentPage === void 0 ? 1 : _currentPage, totalPages = _param.totalPages, totalEntries = _param.totalEntries, entrieLabel = _param.entrieLabel, showingLabel = _param.showingLabel, ofLabel = _param.ofLabel, toLabel = _param.toLabel, onChangePage = _param.onChangePage, props = _objectWithoutProperties(_param, [
        "variant",
        "entrieOrientation",
        "currentPage",
        "totalPages",
        "totalEntries",
        "entrieLabel",
        "showingLabel",
        "ofLabel",
        "toLabel",
        "onChangePage"
    ]);
    var ref = _slicedToArray(useState(false), 2), showEntries = ref[0], setshowEntries = ref[1];
    var ref1 = _slicedToArray(useState(PaginationEntries.ten), 2), entrie = ref1[0], setEntrie = ref1[1];
    return "default" == variant ? getContent() : getVertical();
};
