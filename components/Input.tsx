import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { Field } from "formik";
import { FC } from "react";

type InputProps = {
  label: string;
  id: string;
  error?: string;
  touched?: boolean;
  type?: string;
  hidden?: boolean;
};

const Input: FC<InputProps> = ({
  label,
  id,
  error,
  touched,
  type = "text",
  hidden = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <Field
          type={type}
          name={id}
          id={id}
          className="block w-full pr-10 text-gray-900 placeholder-gray-300 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder={label}
          aria-invalid="true"
          aria-describedby="email-error"
          hidden={hidden}
        />
        {error && touched && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ExclamationCircleIcon
              className="w-5 h-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {error && touched && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
