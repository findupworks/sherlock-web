import React, { useState, InputHTMLAttributes } from "react";
import classNames from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, InputTypeVariant } from "../../types";

export interface SelectorItem {
  label?: string;
  value?: string;
}

export type IProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  inputType: InputTypeVariant;
  selectorItems?: SelectorItem[];
  colorVariant?: ColorVariant;
  tag?: boolean;
  icon?: string;
  isVisible?: boolean;
  onClickIcon?: () => void;
};

export const Input: React.FC<IProps> = ({
  label,
  inputType = "default",
  colorVariant,
  selectorItems,
  tag,
  icon,
  isVisible,
  onClickIcon,
  ...props
}) => {
  const [toggleIcon, setToggleIcon] = useState("eye-slash");
  const [typeInput, setTypeInput] = useState("password");

  function changleToggleIcon() {
    if (toggleIcon == "eye") {
      setTypeInput("password");
      setToggleIcon("eye-slash");
    } else {
      setTypeInput("text");
      setToggleIcon("eye");
    }
  }

  function getTag() {
    return colorVariant == "success" || colorVariant == "danger" || colorVariant == "warning" ? (
      <div className="flex items-center">
        <i
          className={classNames("fa", {
            "fa-circle-check text-success": "success" == colorVariant,
            "fa-warning text-warning": "warning" == colorVariant,
            "fa-circle-exclamation text-danger": "danger" == colorVariant,
          })}
        ></i>
        <label className="block mb-2 pl-2 pt-2 text-sm font-medium text-gray-900 dark:text-dark">
          {"success" == colorVariant ? "Sucesso" : ""}
          {"danger" == colorVariant ? "Erro" : ""}
          {"warning" == colorVariant ? "Cuidado" : ""}
        </label>
      </div>
    ) : (
      ""
    );
  }

  function getContentType() {
    if (inputType === "textarea") {
      return (
        <>
          <div className="flex flex-col justify-center">
            <div>
              {label ? (
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{label}</label>
              ) : (
                ""
              )}
              <textarea
                className={classNames(
                  "resize w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding border border-solid rounded transition ease-in-out m-0",
                  {
                    "bg-gray-50 border border-gray-300": "default" == colorVariant,
                    "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                    "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                    "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                    "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                    "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                    "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant,
                  }
                )}
              ></textarea>
            </div>
            {tag ? getTag() : ""}
          </div>
        </>
      );
    }

    if (inputType === "icon") {
      return (
        <>
          <div className="relative">
            {label ? (
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{label}</label>
            ) : (
              ""
            )}
            <div className="flex  justify-between">
              <input
                type="text"
                className={classNames("border text-gray-900 text-sm rounded-md block w-full p-3", {
                  "bg-gray-50 border border-gray-300": "default" == colorVariant,
                  "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                  "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                  "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                  "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                  "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                  "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant,
                })}
                {...props}
              />
              <i
                onClick={onClickIcon}
                className={classNames(`absolute  right-4 top-11 text-gray-600 fa fa-${icon}`, {})}
              ></i>
            </div>
            {tag ? getTag() : ""}
          </div>
        </>
      );
    }

    if (inputType === "selector") {
      return (
        <>
          <div>
            {label ? (
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{label}</label>
            ) : (
              ""
            )}
            <select
              className={classNames("text-gray-900 text-sm border rounded-lg block w-full p-2.5", {
                "bg-gray-50 border border-gray-300": "default" == colorVariant,
                "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant,
              })}
            >
              <option defaultValue={"-"} className="text-xs">
                -
              </option>
              {selectorItems ? selectorItems.map((item) => <option value={item.value}>{item.label}</option>) : ""}
            </select>
          </div>
        </>
      );
    }

    if (inputType === "password") {
      return (
        <div>
          {label ? <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark">{label}</label> : ""}
          <div className="flex relative justify-between">
            <input
              type={typeInput}
              className={classNames("border text-dark text-sm rounded-lg block w-full p-3", {
                "bg-gray-50 border border-gray-300": "default" == colorVariant,
                "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
                "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
                "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
                "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
                "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
                "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant,
              })}
              {...props}
            />
            {isVisible ? (
              <i
                onClick={changleToggleIcon}
                className={`fa fa-${toggleIcon} right-3 top-3 text-lg absolute text-gray-600`}
              ></i>
            ) : (
              ""
            )}
          </div>
          {tag ? getTag() : ""}
        </div>
      );
    }

    return <></>;
  }

  function getContentDefault() {
    return (
      <div>
        {label ? <label className="block text-xs font-medium text-gray-900 dark:text-dark">{label}</label> : ""}
        <div className="flex relative justify-between">
          <input
            className={classNames("border text-dark text-xs rounded-lg block w-full p-2", {
              "bg-gray-50 border border-gray-300": "default" == colorVariant,
              "border-success bg-successL1 bg-opacity-10": "success" == colorVariant,
              "border-warning bg-warningL1 bg-opacity-10": "warning" == colorVariant,
              "border-danger bg-dangerL1 bg-opacity-10": "danger" == colorVariant,
              "border-info bg-infoL1 bg-opacity-10": "info" == colorVariant,
              "border-primary bg-primaryL1 bg-opacity-10": "primary" == colorVariant,
              "border-secondary bg-secondaryL1 bg-opacity-10": "secondary" == colorVariant,
            })}
            {...props}
          />
        </div>
        {tag ? getTag() : ""}
      </div>
    );
  }

  return "default" == inputType ? getContentDefault() : getContentType();
};
