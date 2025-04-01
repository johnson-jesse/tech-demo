/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import React from "react";
import { Input } from "./Input";
import { Label } from "./Label";

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function InputField({
  label,
  error,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <Label htmlFor={props.name}>{label}</Label>
      )}
      <Input className={error ? "border-red-500" : ""} {...props} />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

export default InputField;
