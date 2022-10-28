function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
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
import React from "react";
import classname from "classnames";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export function SlideNextButton(_param) {
    var children = _param.children, onClick = _param.onClick, props = _objectWithoutProperties(_param, [
        "children",
        "onClick"
    ]);
    var swiper = useSwiper();
    return /*#__PURE__*/ React.createElement("button", _extends({}, props, {
        onClick: function() {
            onClick && onClick(), swiper.slideNext();
        }
    }), children);
}
//bg-blue
export function SlidePreviosButton(_param) {
    var children = _param.children, onClick = _param.onClick, props = _objectWithoutProperties(_param, [
        "children",
        "onClick"
    ]);
    var swiper = useSwiper();
    return /*#__PURE__*/ React.createElement("button", _extends({}, props, {
        onClick: function() {
            onClick && onClick(), swiper.slidePrev();
        }
    }), children);
}
export var MultiStep = function(_param) {
    var steps = _param.steps, stepCurrent = _param.stepCurrent, type = _param.type, children = _param.children, props = _objectWithoutProperties(_param, [
        "steps",
        "stepCurrent",
        "type",
        "children"
    ]);
    var StepItem = function(param) {
        var stepName = param.stepName, step = param.step;
        var contentText = function() {
            if (stepCurrent > step) return /*#__PURE__*/ React.createElement("i", {
                className: "fa-solid fa-check"
            });
            return step;
        };
        if (type == "stepCircleCondensed") {
            return /*#__PURE__*/ React.createElement("div", {
                className: "min-w-[25%]"
            }, /*#__PURE__*/ React.createElement("div", {
                className: classname({
                    "font-semibold text-sm text-secondary h-14 break-words pr-2": true
                })
            }, stepName), /*#__PURE__*/ React.createElement("div", {
                className: classname({
                    "flex items-center": true,
                    "after:w-full after:h-1": type == "stepCircleCondensed",
                    "after:w-0 after:h-0 scale-x-100": type == "stepCircleCondensed" && step == (steps === null || steps === void 0 ? void 0 : steps.length) && (steps === null || steps === void 0 ? void 0 : steps.length) > 1,
                    //colors
                    "before:bg-secondary after:bg-secondary": stepCurrent > step || stepCurrent == (steps === null || steps === void 0 ? void 0 : steps.length),
                    "before:bg-secondaryL3 after:bg-secondaryL3": stepCurrent < step,
                    "before:bg-secondary after:bg-secondaryL3": stepCurrent == 1 || stepCurrent == step && step != steps.length
                })
            }, /*#__PURE__*/ React.createElement("div", {
                className: classname({
                    "min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center z-50 abo ": true,
                    "bg-primary text-white": stepCurrent == step,
                    "bg-secondary text-white": stepCurrent > step,
                    "bg-secondaryL3 text-secondary": stepCurrent < step,
                    "before:bg-secondary after:bg-secondaryL3": stepCurrent == 1
                })
            }, contentText())));
        }
        return /*#__PURE__*/ React.createElement("div", {
            className: "w-1/4"
        }, /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "font-semibold text-sm text-secondary h-14 break-words pr-2": true,
                "text-center": step == 1 && type == "stepCircle"
            })
        }, stepName), /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "flex items-center": true,
                "after:w-full after:h-1": type == "stepCircle",
                "before:w-full before:h-1 before:bg-secondary": type == "stepCircle" && step == 1,
                //colors
                "before:bg-secondary after:bg-secondary": stepCurrent > step || stepCurrent == (steps === null || steps === void 0 ? void 0 : steps.length),
                "before:bg-secondaryL3 after:bg-secondaryL3": stepCurrent < step,
                "before:bg-secondary after:bg-secondaryL3": stepCurrent == 1 || stepCurrent == step && step != steps.length
            })
        }, /*#__PURE__*/ React.createElement("div", {
            className: classname({
                "min-w-[32px] min-h-[32px] rounded-full flex items-center justify-center z-50 abo ": true,
                "bg-primary text-white": stepCurrent == step,
                "bg-secondary text-white": stepCurrent > step,
                "bg-secondaryL3 text-secondary": stepCurrent < step,
                "before:bg-secondary after:bg-secondaryL3": stepCurrent == 1
            })
        }, contentText())));
    };
    var content = function() {
        if (type == "stepBar") {
            var ref;
            return /*#__PURE__*/ React.createElement("div", {
                className: "bg-white w-full border-secondaryL3 border-[1px] text-secondary text-sm flex justify-between py-1.5 px-6"
            }, /*#__PURE__*/ React.createElement("div", {
                className: "mr-4"
            }, (ref = steps[--stepCurrent]) === null || ref === void 0 ? void 0 : ref.stepName), ++stepCurrent, " de  ", steps === null || steps === void 0 ? void 0 : steps.length);
        }
        if (type == "stepCircleCondensed") {
            return /*#__PURE__*/ React.createElement("div", {
                className: "w-full h-full"
            }, /*#__PURE__*/ React.createElement(Swiper, {
                modules: [
                    Navigation,
                    Pagination
                ],
                spaceBetween: 1,
                initialSlide: stepCurrent,
                slidesPerView: 5,
                allowTouchMove: false,
                centeredSlides: true,
                onSwiper: function(swiper) {
                    swiper.slideTo(--stepCurrent);
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }, steps === null || steps === void 0 ? void 0 : steps.map(function(step, index) {
                /*#__PURE__*/ return React.createElement(SwiperSlide, null, /*#__PURE__*/ React.createElement(StepItem, {
                    stepName: step === null || step === void 0 ? void 0 : step.stepName,
                    step: ++index
                }));
            }), children));
        }
        return /*#__PURE__*/ React.createElement("div", {
            className: "flex items-center z-index w-full"
        }, steps === null || steps === void 0 ? void 0 : steps.map(function(step, index) {
            /*#__PURE__*/ return React.createElement(StepItem, {
                stepName: step === null || step === void 0 ? void 0 : step.stepName,
                step: ++index
            });
        }));
    };
    return content();
};
