import React from "react";
import cn from "classnames";

interface Props {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode | any;
}

type Variant = "subTitle";

const Text: React.FC<Props> = ({ className, variant = "subTitle", children }) => {
  return (
    <span
      className={cn(
        "text-skin-muted text-sm leading-7",
        variant === 'subTitle' ? 'text-[#BABDC2]' : '',
        className
      )}
    >
      {children}
    </span>
  );
};

export default Text;
