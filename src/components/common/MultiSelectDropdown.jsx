"use client";

import React, { useState } from "react";
import { Controller } from "react-hook-form";

function MultiSelectDropdown({
  name,
  control,
  list,
  label,
  placeholder = "Select options",
  rules,
  onChangeHandler,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (value) => {
    const newSelection = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value) // Remove if already selected
      : [...selectedOptions, value]; // Add if not selected

    setSelectedOptions(newSelection);
    onChangeHandler?.(newSelection); // External handler
  };

  const handleRemove = (value) => {
    const newSelection = selectedOptions.filter((item) => item !== value);
    setSelectedOptions(newSelection);
    onChangeHandler?.(newSelection);
  };

  return (
    <div className="w-full max-w-sm">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="border border-input rounded-md p-2 bg-background focus-within:ring-ring focus-within:ring-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedOptions.map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-2 bg-muted text-foreground rounded-full px-3 py-1 text-sm"
                  >
                    <span>
                      {list.find((item) => item.value === option)?.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemove(option)}
                      className="text-destructive hover:text-destructive/80"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              <select
                id={name}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    handleSelect(value); // Update chip selection
                    field.onChange([...selectedOptions, value]); // Update form state
                  }
                }}
                className="w-full p-2 bg-background border-none focus:outline-none"
                value=""
              >
                <option value="" disabled>
                  {placeholder}
                </option>
                {list
                  .filter((item) => !selectedOptions.includes(item.value)) // Exclude selected
                  .map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
              </select>
            </div>
            {error && (
              <p className="mt-1 text-sm text-destructive">
                {error.message || "This field is required"}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}

export default MultiSelectDropdown;
