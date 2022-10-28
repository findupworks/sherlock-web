import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
export var TableHead = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("thead", {
        className: "border-b-2 border-grey"
    }, children);
};
export var Th = function(param) {
    var children = param.children, status = param.status;
    if (status) {
        return /*#__PURE__*/ React.createElement("td", {
            className: ""
        }, children);
    }
    return /*#__PURE__*/ React.createElement("td", {
        className: "p-3 text-xs text-dark font-semibold tracking-wide text-left"
    }, children);
};
export var TableBody = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("tbody", null, children);
};
export var Tr = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("tr", {
        className: "border-b-2 border-grey items-center"
    }, children);
};
export var Td = function(param) {
    var children = param.children, status = param.status, statusColor = param.statusColor;
    if (status) {
        return /*#__PURE__*/ React.createElement("td", {
            className: ""
        }, /*#__PURE__*/ React.createElement("div", {
            className: "w-2 pt-2 ml-1 pb-10 bg-".concat(statusColor)
        }));
    }
    return /*#__PURE__*/ React.createElement("td", {
        className: "p-3 text-xs text-dark"
    }, children);
};
export var Table = function(param) {
    var children = param.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "overflow-x-auto w-full"
    }, /*#__PURE__*/ React.createElement("table", {
        className: "table-auto bg-white rounded-lg w-full"
    }, children));
};
