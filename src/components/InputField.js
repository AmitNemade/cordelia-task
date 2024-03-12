import classNames from "classnames";
import React from "react";

const InputField = ({
  placeholder,
  className,
  containerClass,
  error,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start w-full gap-1",
        containerClass
      )}
    >
      <input
        placeholder={placeholder}
        className={classNames(
          "h-11 lg:h-15 rounded-lg border p-6 w-full border-neutral-250",
          className
        )}
        {...props}
      />
      {error && <div className="text-sm font-medium text-red-500">{error}</div>}
    </div>
  );
};

export default InputField;
