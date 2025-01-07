import React from "react";
import PropTypes from "prop-types";
import { BUTTON_CLASSNAMES, BUTTON_SIZES } from "./variants";
import useAppearance from "@/commons/appearance/useAppearance";

// variant: primary, secondary, tertiary
const Button = ({
  disabled,
  type,
  onClick,
  variant,
  className,
  children,
  kit,
  size = "md",
}) => {
  const interfaceKit = useAppearance();
  const buttonStyle = (kit ?? interfaceKit).button[variant];
  const buttonVariant = BUTTON_CLASSNAMES[buttonStyle];
  const buttonSize = BUTTON_SIZES[size];

  return (
    <button
      className={`btn ${buttonVariant} ${className} ${buttonSize}`}
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "neutral"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  kit: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
