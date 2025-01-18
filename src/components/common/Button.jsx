import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired, // Button text or elements
  onClick: PropTypes.func, // Click handler
  className: PropTypes.string, // Tailwind classes
  type: PropTypes.oneOf(["button", "submit", "reset"]), // Button type
  disabled: PropTypes.bool, // Disabled state
};

export default Button;
