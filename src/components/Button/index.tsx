import { FC } from "react";
import { Props } from "./types";

export const Button: FC<Props> = ({ children, type,  disabled }) => {
  return (
    <button type={type}  disabled={disabled}>
      {children}
    </button>
  );
};


