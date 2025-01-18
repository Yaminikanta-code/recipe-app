import React from "react";

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md bg-primary text-primary-foreground shadow hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
