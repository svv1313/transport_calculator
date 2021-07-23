import React, { FormEventHandler } from "react";
import TextField from "@material-ui/core/TextField";

interface InputFieldProps {
  fullWidth?: boolean;
  id: string;
  name: string;
  label: string;
  type: string;
  value: string | number;
  onChange: FormEventHandler;
  error?: boolean;
  helperText?: React.ReactNode;
}

export const InputField = ({
  fullWidth = true,
  id,
  name,
  label,
  type,
  value,
  onChange,
  error = false,
  helperText = null,
}: InputFieldProps) => {
  return (
    <TextField
      fullWidth={fullWidth}
      id={id}
      name={name}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      variant="outlined"
    />
  );
};
