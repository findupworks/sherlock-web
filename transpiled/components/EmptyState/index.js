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
import classNames from "classnames";
import { Button } from "../Button";
export var EmptyState = function(_param) {
    var getDefault = function getDefault() {
        return /*#__PURE__*/ React.createElement("div", {
            className: classNames({
                "rounded shadow-lg bg-white": true,
                "max-w-[250px] min-w-[200px]": "sm" == size,
                "max-w-[450px] min-w-[400px]": "md" == size,
                "max-w-[700px] min-w-[650px]": "lg" == size
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "text-center items-center flex flex-col justify-between mx-5"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "mt-5"
        }, /*#__PURE__*/ React.createElement("img", {
            className: classNames({
                "w-28 h-28": "sm" == size,
                "w-40 h-40": "md" == size,
                "w-64 h-64": "lg" == size
            }),
            src: image ? image : "https://i.ibb.co/86F18Qg/Dataset.png"
        })), /*#__PURE__*/ React.createElement("div", {
            className: "space-y-2 mt-4"
        }, /*#__PURE__*/ React.createElement("h2", {
            className: "text-2xl font-medium"
        }, title), /*#__PURE__*/ React.createElement("p", {
            className: "mt-4 text-gray-500"
        }, bodyMessage)), /*#__PURE__*/ React.createElement("div", {
            className: "my-4",
            onClick: onClickButton
        }, /*#__PURE__*/ React.createElement(Button, {
            label: buttonLabel ? buttonLabel : "New collection",
            outlined: true,
            variant: buttonVariant
        }))));
    };
    var getNoImage = function getNoImage() {
        return /*#__PURE__*/ React.createElement("div", {
            className: classNames({
                "rounded shadow-lg bg-white justify-content items-center flex flex-col": true,
                "max-w-[350px] min-w-[300px]": "sm" == size,
                "max-w-[450px] min-w-[400px]": "md" == size,
                "max-w-[700px] min-w-[650px]": "lg" == size
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: "flex flex-col justify-between mx-5 w-60"
        }, /*#__PURE__*/ React.createElement("div", {
            className: "space-y-2 mt-4"
        }, /*#__PURE__*/ React.createElement("h2", {
            className: "text-1xl font-medium"
        }, title), /*#__PURE__*/ React.createElement("p", {
            className: "mt-4 text-gray-500"
        }, bodyMessage)), /*#__PURE__*/ React.createElement("div", {
            className: "my-4"
        }, /*#__PURE__*/ React.createElement(Button, {
            leftIcon: "plus",
            label: buttonLabel ? buttonLabel : "New collection",
            variant: buttonVariant
        }))));
    };
    var image = _param.image, _title = _param.title, title = _title === void 0 ? "Place your title here" : _title, _bodyMessage = _param.bodyMessage, bodyMessage = _bodyMessage === void 0 ? "Please, fill this text box with your content" : _bodyMessage, buttonLabel = _param.buttonLabel, _buttonVariant = _param.buttonVariant, buttonVariant = _buttonVariant === void 0 ? "primary" : _buttonVariant, _size = _param.size, size = _size === void 0 ? "sm" : _size, _variant = _param.variant, variant = _variant === void 0 ? "default" : _variant, onClickButton = _param.onClickButton, props = _objectWithoutProperties(_param, [
        "image",
        "title",
        "bodyMessage",
        "buttonLabel",
        "buttonVariant",
        "size",
        "variant",
        "onClickButton"
    ]);
    return "default" === variant ? getDefault() : getNoImage();
};
