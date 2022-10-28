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
export var VerticalBar = function(_param) {
    var icons = _param.icons, iconsColor = _param.iconsColor, hasLogo = _param.hasLogo, barColor = _param.barColor, onClickLogout = _param.onClickLogout, onClickEdit = _param.onClickEdit, props = _objectWithoutProperties(_param, [
        "icons",
        "iconsColor",
        "hasLogo",
        "barColor",
        "onClickLogout",
        "onClickEdit"
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("aside", {
        className: "h-full"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "py-4 px-3 rounded align flex flex-col h-screen border-r",
        style: {
            background: barColor ? barColor : "white"
        }
    }, hasLogo ? /*#__PURE__*/ React.createElement("div", {
        className: "h-16 mt-2 justify-start flex flex-col"
    }, /*#__PURE__*/ React.createElement("svg", {
        width: "40",
        height: "20",
        viewBox: "0 0 70 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M45.4 28.3842L43.8126 26.7967L41.0336 24.0175C40.7566 23.7405 40.7566 23.2905 41.0336 23.0136L43.2984 20.7486C43.5753 20.4717 44.0253 20.4717 44.3022 20.7486L47.0813 23.5279L48.6686 25.1153L49.4499 25.8967C52.8471 29.2941 58.3558 29.2941 61.758 25.8967C65.1453 22.5091 65.1453 16.9704 61.758 13.5829L60.9816 12.8065L59.3943 11.219L56.9119 8.73646C53.5147 5.33904 48.001 5.33904 44.6038 8.73646L26.5448 26.7967L24.9574 28.3842L23.2811 30.0705C18.6031 34.7784 10.9928 34.7883 6.3 30.0952L4.3764 28.1715C-0.276829 23.4834 -0.257049 15.9121 4.41102 11.2437L6.11209 9.54255L7.69943 7.9551L14.4048 1.24927C14.746 0.908043 15.3048 0.908043 15.646 1.24927L17.6735 3.27684C18.0147 3.61807 18.0147 4.17689 17.6735 4.51812L10.9681 11.224L9.38072 12.8114L8.60436 13.5878C5.21705 16.9753 5.21705 22.5141 8.60436 25.9016C12.0016 29.2991 17.5103 29.2991 20.9124 25.9016L21.6937 25.1203L23.2811 23.5328L42.3341 4.47855C46.9873 -0.17498 54.5334 -0.17498 59.1866 4.47855L62.6629 7.9551L64.2503 9.54255L65.9859 11.2833C70.654 15.9714 70.6441 23.5526 65.9662 28.2309L64.1167 30.0903C59.4388 34.7982 51.8285 34.8081 47.1357 30.12L45.4049 28.3891L45.4 28.3842Z",
        fill: "url(#paint0_linear_11739_141534)"
    }), /*#__PURE__*/ React.createElement("defs", null, /*#__PURE__*/ React.createElement("linearGradient", {
        id: "paint0_linear_11739_141534",
        x1: "-23.4688",
        y1: "-29.4561",
        x2: "78.1016",
        y2: "54.9933",
        gradientUnits: "userSpaceOnUse"
    }, /*#__PURE__*/ React.createElement("stop", {
        offset: "0.18",
        stopColor: "#3CDBC0"
    }), /*#__PURE__*/ React.createElement("stop", {
        offset: "0.32",
        stopColor: "#38D5C1"
    }), /*#__PURE__*/ React.createElement("stop", {
        offset: "0.49",
        stopColor: "#2DC5C5"
    }), /*#__PURE__*/ React.createElement("stop", {
        offset: "0.69",
        stopColor: "#1AABCC"
    }), /*#__PURE__*/ React.createElement("stop", {
        offset: "0.9",
        stopColor: "#0188D5"
    }), /*#__PURE__*/ React.createElement("stop", {
        offset: "0.91",
        stopColor: "#0086D6"
    }))))) : "", /*#__PURE__*/ React.createElement("div", {
        className: "h-full"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "space-y-2"
    }, icons.map(function(icon, key) {
        /*#__PURE__*/ return React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("li", {
            onClick: icon === null || icon === void 0 ? void 0 : icon.onClick,
            key: key
        }, /*#__PURE__*/ React.createElement("a", {
            className: "flex items-center justify-center p-2 text-base font-normal rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
            style: {
                color: iconsColor ? iconsColor : "white"
            }
        }, /*#__PURE__*/ React.createElement("i", {
            className: "fa fa-".concat(icon.iconType)
        }))));
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "flex justify-end flex-col space-y-2"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "space-y-2 border-t border-gray-200 dark:border-gray-700"
    }), /*#__PURE__*/ React.createElement("a", {
        onClick: onClickEdit,
        className: "flex items-center p-2 text-base font-normal justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
        style: {
            color: iconsColor ? iconsColor : "gray"
        }
    }, /*#__PURE__*/ React.createElement("i", {
        className: "fa fa-sliders text-red}"
    })), /*#__PURE__*/ React.createElement("a", {
        onClick: onClickLogout,
        className: "flex items-center p-2 text-base font-normal justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",
        style: {
            color: iconsColor ? iconsColor : "gray"
        }
    }, /*#__PURE__*/ React.createElement("i", {
        className: "fa fa-power-off text-red}"
    }))))));
};
