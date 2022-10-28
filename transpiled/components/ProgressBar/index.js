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
import classNames from "classnames";
export var ProgressBar = function(_param) {
    var progress = _param.progress, type = _param.type, isFinished = _param.isFinished, props = _objectWithoutProperties(_param, [
        "progress",
        "type",
        "isFinished"
    ]);
    var getProgress = function() {
        if (progress < 0) {
            return "0%";
        } else if (progress >= 100) {
            return "100%";
        } else {
            return progress + "%";
        }
    };
    if (type === "kanban") {
        return /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "w-40 md:w-80 lg:w-80 h-2 bg-white rounded-md mr-2"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "h-2 rounded-l-md bg-primaryD1 rounded-r-md",
            style: {
                "width": getProgress()
            }
        })), /*#__PURE__*/ React.createElement("i", {
            className: classNames({
                "fa-regular fa-circle-check text-gray-700 self-center": true,
                "text-dark": isFinished == "progress",
                "text-successD1": isFinished === "success",
                "text-warningD1": isFinished === "error"
            })
        }));
    }
    var isSimple = function() {
        if (type === "simple") {
            return /*#__PURE__*/ React.createElement("div", null);
        } else {
            if (progress >= 100) {
                return /*#__PURE__*/ React.createElement("i", {
                    className: "fa-regular fa-circle-check text-successD1 self-center\\"
                });
            } else {
                return /*#__PURE__*/ React.createElement("p", {
                    className: "text-xs -translate-y-[0.01em] text-darkD2 font-bold"
                }, progress, "%");
            }
        }
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "w-40 md:w-80 lg:w-80 h-2 bg-white rounded-md mr-2"
    }, /*#__PURE__*/ React.createElement("div", {
        className: classname({
            "h-2 rounded-l-md": true,
            "bg-primaryD1": progress <= 30,
            "bg-warningD1": progress > 30 && progress <= 70,
            "bg-successD1": progress > 70,
            "rounded-r-md": progress >= 100
        }),
        style: {
            "width": getProgress()
        }
    })), isSimple());
};
