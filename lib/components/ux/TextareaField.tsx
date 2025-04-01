/// Copyright (c) 2025 Jesse A. Johnson (Fizzog)
/// Attribution required. See LICENSE.

import React from "react";
import { Label } from "./Label";
import { Textarea } from "./Textarea";

export type InputFieldProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
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
      {label && <Label htmlFor={props.name}>{label}</Label>}
      <Textarea className={error ? "border-red-500" : ""} {...props}/>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}

export default InputField;
