import React from "react";
import { Controller } from "react-hook-form";

const Textarea = ({
  id,
  label = "",
  placeholder = "",
  className = "",
  control,
  name,
  rules = {},
  defaultValue = "",
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue} // Ensure defaultValue is handled correctly
      render={({ field }) => (
        <div className={`flex flex-col ${className}`}>
          {label && (
            <label
              htmlFor={id}
              className="block text-sm font-medium text-foreground mb-2"
            >
              {label}
            </label>
          )}
          <textarea
            id={id}
            placeholder={placeholder}
            className={`w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`}
            {...field}
            {...props}
          />
        </div>
      )}
    />
  );
};

export default Textarea;
