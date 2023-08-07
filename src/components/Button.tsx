import React, { ReactNode } from "react";

function Button({
  children,
  variant,
  onClick,
  ...props
}: {
  children: ReactNode;
  variant: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      {...props}
      className={`px-2 py-1 rounded-md border-${variant} bg-${variant} hover:bg-${variant}-light text-base`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
