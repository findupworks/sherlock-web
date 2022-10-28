function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
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
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import classname from "classnames";
export var DatePicker = function(param) {
    var label = param.label, _type = param.type, type = _type === void 0 ? "datetime" : _type, onChange = param.onChange, value = param.value;
    var ref = _slicedToArray(useState({
        dateFormat: '"d-m-Y H:i',
        noCalendar: false,
        enableTime: true,
        placeholder: "YYYY-MM-DD   --:--"
    }), 2), options = ref[0], setOptions = ref[1];
    var changeCalendar = function() {
        if (type == "datetime") {
            setOptions(_objectSpreadProps(_objectSpread({}, options), {
                dateFormat: "d-m-Y H:i",
                noCalendar: false,
                enableTime: true,
                placeholder: "YYYY-MM-DD   --:--"
            }));
        }
        if (type == "date") {
            setOptions(_objectSpreadProps(_objectSpread({}, options), {
                dateFormat: "d-m-Y H:i",
                noCalendar: false,
                enableTime: false,
                placeholder: "YYYY-MM-DD"
            }));
        }
        if (type == "time") {
            setOptions(_objectSpreadProps(_objectSpread({}, options), {
                dateFormat: "H:i",
                noCalendar: true,
                enableTime: true,
                placeholder: "--:--"
            }));
        }
    };
    useEffect(function() {
        changeCalendar();
    }, [
        type
    ]);
    var CalendarComponent = /*#__PURE__*/ React.memo(function(param) {
        var noCalendar = param.noCalendar, enableTime = param.enableTime, dateFormat = param.dateFormat, placeholder = param.placeholder;
        var options = {
            dateFormat: dateFormat,
            noCalendar: noCalendar,
            enableTime: enableTime,
            locale: {
                weekdays: {
                    shorthand: [
                        "D",
                        "S",
                        "T",
                        "Q",
                        "Q",
                        "S",
                        "S",
                        "D"
                    ],
                    longhand: [
                        "Domingo",
                        "Segunda-Feira",
                        "Ter\xe7a-Feira",
                        "Quarta-Feira",
                        "Quinta-Feira",
                        "Sexta-Feira",
                        "S\xe1bado",
                        "Domingo"
                    ]
                },
                months: {
                    shorthand: [
                        "Jan",
                        "Fev",
                        "Mar",
                        "Abr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Ago",
                        "Set",
                        "Out",
                        "Nov",
                        "Dez"
                    ],
                    longhand: [
                        "Janeiro",
                        "Fevereiro",
                        "Mar\xe7o",
                        "Abril",
                        "Maio",
                        "Junho",
                        "Julho",
                        "Agosto",
                        "Setembro",
                        "Outubro",
                        "Novembro",
                        "Dezembro"
                    ]
                }
            }
        };
        return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Flatpickr, {
            onChange: function(param) {
                var _param = _slicedToArray(param, 1), date = _param[0];
                return onChange(date);
            },
            "data-enable-time": true,
            value: value,
            className: classname({
                "py-2	px-4 border-[1px] border-dark rounded ": true,
                "w-44": type == "datetime" || type == "date",
                "text-center w-20": type == "time"
            }),
            options: options,
            placeholder: placeholder
        }));
    });
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "text-dark text-sm font-semibold mb-1"
    }, label), /*#__PURE__*/ React.createElement(CalendarComponent, {
        noCalendar: options === null || options === void 0 ? void 0 : options.noCalendar,
        enableTime: options === null || options === void 0 ? void 0 : options.enableTime,
        dateFormat: options === null || options === void 0 ? void 0 : options.dateFormat,
        placeholder: options === null || options === void 0 ? void 0 : options.placeholder
    }));
};
