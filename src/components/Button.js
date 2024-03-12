import classNames from "classnames";
import React from "react";

const Button = ({ className, buttonStyle, children, ...props }) => {
  const getStyles = () => {
    switch (buttonStyle) {
      case "solid":
        return "bg-primary text-white text-lg font-bold";
      case "outline":
        return "bg-white border border-primary text-primary text-lg font-bold";

      default:
        break;
    }
  };

  return (
    <button
      className={classNames("rounded", getStyles(), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
