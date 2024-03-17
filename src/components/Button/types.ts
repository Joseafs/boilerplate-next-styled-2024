import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
    type?: ButtonHTMLAttributes<undefined>['type'];
    text?: string;
    disabled?: boolean;
  }