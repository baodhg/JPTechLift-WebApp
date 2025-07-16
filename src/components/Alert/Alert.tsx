import React from "react";

type AlertProps = {
  type: "success" | "error";
  message: string;
};

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const baseClass = "border px-4 py-2 rounded mt-4 font-medium";
  const style = {
    success: "bg-green-100 text-green-800 border-green-400",
    error: "bg-red-100 text-red-800 border-red-400",
  };

  return (
    <div
      className={`${baseClass} ${style[type]}`}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;
