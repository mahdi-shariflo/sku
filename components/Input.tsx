import { ErrorMessage, Field } from "formik";
import React from "react";

type Props = {
  name: string;
  title: string;
  placeholder: string;
  type?: string;
};

const Input = ({
  title,
  placeholder,
  name,
  type = "text",
}: Props) => {
  return (
    <div>
      <label className="text-xs block text-black">
        {title}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage className="text-red-500" name={name} />
    </div>
  );
};

export default Input;
