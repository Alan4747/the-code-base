import cn from "classnames";
import { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?:
    | "login"
    | "withIcon"
    | "social";
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "none",
    type = "button",
    children,
    disabled = false,
    ...rest
  } = props;

  const rootClassName = cn(
    variant === "login"
      ? "flex justify-center items-center px-[0.75rem] py-[1rem] w-full text-white not-italic font-medium text-sm leading-6 rounded-[1rem]"
      : "",
    variant === "withIcon"
      ? "flex justify-center items-center w-[10.688rem] h-[2.375rem] not-italic font-semibold text-xs leading-6 text-white rounded-[1rem] gap-[0.375rem]"
      : "",
    variant === "social"
      ? "flex justify-center items-center w-[7.125rem] h-[3rem]  border-2 border-[#2C2D30] rounded-[1rem]"
      : "",
    className
  );

  return (
    <button
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
