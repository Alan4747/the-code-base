import { forwardRef, InputHTMLAttributes, useState } from "react";
import useIcons from "../../icons/use-icons";
import { size } from "lodash";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register?: any;
  value?: string;
  defaultValue?: string;
  error?: any;
  type: "number" | "email" | "text" | "password";
  label: string;
  mask?: "none" | "phone";
  showSelect?: boolean;
  isBorder?: boolean;
  isIcon?: boolean;
  disabled?: boolean;
  wrapperClass?: string | undefined;
  placeholder?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    register,
    value,
    error,
    type,
    label,
    isBorder = true,
    isIcon = true,
    defaultValue,
    disabled = false,
    wrapperClass = "",
    placeholder,
    showSelect = false,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const { EyeOffIcon, EyeOnIcon } = useIcons();
  const id = Math.random();
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
    <div className={`relative ${wrapperClass}`}>
      {showSelect && (
        <select
          name="flags"
          className="rounded-tl-xl rounded-bl-xl w-[4.875rem] h-[3.125rem] bg-[#292929] focus:border-none"
        >
          {flags?.map((opt: any, index: any) => (
            <option className="text-center text-[1rem]" key={index}>
              {opt.flag}
            </option>
          ))}
        </select>
      )}
      <input
        autoComplete="off"
        ref={ref}
        disabled={disabled}
        value={value}
        {...register}
        type={type === "password" ? (showPassword ? "text" : type) : type}
        id={`floating_${id + 1}`}
        className={`h-[3.125rem] bg-[#212121] rounded-[12px] ${
          isBorder ? "border-[#212121]" : ""
        } rounded block z-10 px-4 pb-2.5 pt-5 w-full text-white outline-none peer ${
          error && "border border-[#FB2929]"
        } disabled:cursor-not-allowed`}
        placeholder={""}
        {...rest}
        name="email"
      />
      <label
        htmlFor={`floating_${id + 1}`}
        className={`absolute text-[#606266] text-[0.875rem]  duration-150 transform top-4 z-10 origin-[0] left-4  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 ${
          size(value) > 0 && "top-5 scale-[.9] -translate-y-4"
        } ${
          showSelect ? " left-20" : ""
        } peer-focus:top-5 peer-focus:scale-[.9] peer-focus:-translate-y-4 peer-focus-visible:text-[#D5D7DB]`}
      >
        {label}
      </label>
      {isIcon && (
        <div className="flex items-center gap-1 absolute top-1/2 right-[0.625rem] translate-y-[-50%]">
          {type === "password" && (
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className=" opacity-[0.45] text-[#606266]"
            >
              {showPassword ? <EyeOnIcon /> : <EyeOffIcon />}
            </button>
          )}
        </div>
      )}
    </div>
  );
});

export default Input;
