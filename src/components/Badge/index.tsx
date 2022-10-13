import React from "react";
import classname from "classnames";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ColorVariant, BadgeVariant } from "../../types";
export interface IProps {
  label: string;
  variant?: BadgeVariant;
  color?: ColorVariant;
}
export const Badge: React.FC<IProps> = ({ label, color = "default", variant = "default", ...props }) => {
  function getDefault() {
    return (
      <span
        className={classname({
          "text-xs font-semibold inline-block py-px px-1 uppercase last:mr-0 mr-1 rounded-full": true,
          // Outline none
          "bg-secondary text-secondaryL3": "default" == color,
          "bg-primary text-white": "primary" == color,
          "bg-secondaryL3 text-secondary": "secondary" == color,
          "bg-success text-white": "success" == color,
          "bg-info text-white": "info" == color,
          "bg-warning text-white": "warning" == color,
          "bg-danger text-white": "danger" == color,
        })}
      >
        {label}
      </span>
    );
  }

  function getKanban() {
    return (
      <span
        className={classname({
          "text-xs font-semibold inline-block py-px px-1 uppercase last:mr-0 mr-1 rounded-lg pl-8 pr-8 pt-2 pb-2": true,
          // Outline none
          "bg-secondary text-secondaryL3": "default" == color,
          "bg-primary text-white": "primary" == color,
          "bg-secondaryL3 text-secondary": "secondary" == color,
          "bg-success text-white": "success" == color,
          "bg-info text-white": "info" == color,
          "bg-warning text-white": "warning" == color,
          "bg-danger text-white": "danger" == color,
        })}
      >
        {label}
      </span>
    );
  }

  return variant === "default" ? getDefault() : getKanban();
};
