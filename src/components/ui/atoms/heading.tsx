import React, { JSXElementConstructor, CSSProperties } from "react";
import cn from "classnames";

interface Props {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
}

type Variant = "title" | "titleMedium" | "titleLarge";

const Heading: React.FC<Props> = ({
  className,
  variant = "title",
  children,
}) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    title: "h1",
    titleMedium: "h3",
    titleLarge: "h2",
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!];

  return (
    <Component
      className={cn("text-skin-base", variant === "title" ? "text-[#E8EAED] text-[1.75rem] font-bold tracking-normal-[0.374px] leading-[2.563rem]" : "", className)}
    >
      {children}
    </Component>
  );
};

export default Heading;
