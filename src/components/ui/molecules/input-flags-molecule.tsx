import React, { forwardRef, InputHTMLAttributes } from "react";
import Input from "../atoms/input";
export interface InputFlagsProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: any;
  wrapperClass?: string | undefined;
  type?: string | undefined;
  register?: any;
  value?: string;
  defaultValue?: string;
  error?: any;
}
export const InputFlagsMolecule = forwardRef<HTMLInputElement, InputFlagsProps>((props, ref) => {
  const {
    register,
    value,
    error,
    type,
    label,
    defaultValue,
    placeholder,
    ...rest
  } = props;
  const flags = [
    {
      id: 0,
      name: "Türkiye",
      dial_code: "+90",
      flag: "🇹🇷",
      code: "TR",
    },
  ];
  return (
    <>
      <div className="flex w-full">
        
        <Input label={label} type="text" wrapperClass="w-full" value={value} />
      </div>
    </>
  );
});

export default React.memo(InputFlagsMolecule);
