import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "terminal";
}

export const Button = (props: IButtonProps): JSX.Element => {
  const { theme: themeProp, className, ...ButtonHTMLAttributes } = props;
  const theme = themeProp ?? "primary";

  return (
    <button
      className={[styles.button, styles[theme], className].join(" ")}
      {...ButtonHTMLAttributes}
    />
  );
};
