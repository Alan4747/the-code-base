export interface IconProps {
  width?: number;
  height?: number;
}
export const useIcons = () => {
  const BackIcon = () => {
    return (
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.33333 12.3333L1 6.99998M1 6.99998L6.33333 1.66665M1 6.99998L17 6.99998"
          stroke="url(#paint0_linear_204_189)"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_204_189"
            x1="17"
            y1="13.0912"
            x2="7.40672"
            y2="-2.32115"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#374FC7" />
            <stop offset="1" stopColor="#6B4BCC" />
          </linearGradient>
        </defs>
      </svg>
    );
  };
  const EpostIcon = ({ width, height }: IconProps) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 15 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.49999 4.33333L6.0208 6.01387C6.91653 6.61102 8.08346 6.61102 8.9792 6.01387L11.5 4.33333M3.49999 13H11.5C12.9728 13 14.1667 11.8061 14.1667 10.3333V3.66667C14.1667 2.19391 12.9728 1 11.5 1H3.49999C2.02724 1 0.833328 2.19391 0.833328 3.66667V10.3333C0.833328 11.8061 2.02724 13 3.49999 13Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  const PhoneIcon = ({ width, height }: IconProps) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 11.6667V10.5694C12.5 10.0242 12.1681 9.53389 11.6619 9.33141L10.3058 8.78897C9.66191 8.53143 8.92813 8.81041 8.61801 9.43066L8.5 9.66667C8.5 9.66667 6.83333 9.33333 5.5 8C4.16667 6.66667 3.83333 5 3.83333 5L4.06934 4.88199C4.68959 4.57187 4.96857 3.83809 4.71103 3.19424L4.16859 1.83815C3.96611 1.33194 3.47583 1 2.93062 1H1.83333C1.09695 1 0.5 1.59695 0.5 2.33333C0.5 8.22437 5.27563 13 11.1667 13C11.903 13 12.5 12.403 12.5 11.6667Z"
          stroke="white"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  const EyeOffIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        width="22"
        height="18"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
        />
      </svg>
    );
  };

  const EyeOnIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        width="22"
        height="18"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    );
  };

  const AppleIcon = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.94 5.19C15.318 4.75428 15.6063 4.24817 15.7882 3.70074C15.9701 3.1533 16.0421 2.57533 16 2C14.8394 2.09369 13.762 2.63956 13 3.52C12.6351 3.94198 12.3586 4.43288 12.1868 4.96364C12.015 5.49441 11.9515 6.05424 12 6.61C12.5661 6.61472 13.1258 6.4891 13.6356 6.24286C14.1454 5.99662 14.5917 5.63637 14.94 5.19ZM17.46 12.63C17.4667 11.8637 17.6685 11.1118 18.0465 10.4452C18.4244 9.77859 18.9659 9.21926 19.62 8.82C19.2072 8.22524 18.6615 7.73483 18.0262 7.38767C17.3909 7.04052 16.6835 6.84615 15.96 6.82C14.4 6.66 12.96 7.73 12.13 7.73C11.3 7.73 10.13 6.84 8.83 6.86C7.98013 6.888 7.15202 7.13578 6.42645 7.57919C5.70088 8.02259 5.10261 8.64648 4.69 9.39C2.93 12.45 4.24 17 6 19.47C6.8 20.68 7.8 22.05 9.12 22C10.44 21.95 10.87 21.18 12.4 21.18C13.93 21.18 14.4 22 15.7 21.97C17 21.94 17.92 20.73 18.76 19.52C19.355 18.6415 19.8199 17.6816 20.14 16.67C19.3475 16.332 18.6713 15.7693 18.195 15.0513C17.7188 14.3333 17.4632 13.4916 17.46 12.63Z"
          fill="#7E8085"
        />
      </svg>
    );
  };

  const FacebookIcon = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 4.5V7.5H14.25C13.7325 7.5 13.5 8.1075 13.5 8.625V10.5H15.75V13.5H13.5V19.5H10.5V13.5H8.25V10.5H10.5V7.5C10.5 6.70435 10.8161 5.94129 11.3787 5.37868C11.9413 4.81607 12.7044 4.5 13.5 4.5H15.75Z"
          fill="#7E8085"
        />
      </svg>
    );
  };

  const GoogleIcon = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4.00008"
          y="4.00002"
          width="15.75"
          height="15.75"
          fill="white"
          fillOpacity="0.01"
        />
        <path
          d="M7.82437 13.564L7.30223 15.5131L5.39383 15.5535C4.8235 14.4957 4.5 13.2854 4.5 11.9993C4.5 10.7557 4.80247 9.58287 5.33861 8.5502H5.33902L7.03803 8.86168L7.78229 10.5504C7.62652 11.0046 7.54162 11.492 7.54162 11.9993C7.54168 12.5499 7.6414 13.0773 7.82437 13.564Z"
          fill="#7E8085"
        />
        <path
          d="M19.369 10.5984C19.4551 11.0521 19.5 11.5207 19.5 11.9995C19.5 12.5365 19.4436 13.0602 19.336 13.5654C18.9709 15.2846 18.0169 16.7858 16.6953 17.8482L16.6949 17.8478L14.5549 17.7386L14.2521 15.8479C15.129 15.3337 15.8143 14.5289 16.1753 13.5654H12.1648V10.5984H16.2338H19.369Z"
          fill="#7E8085"
        />
        <path
          d="M16.6948 17.8484L16.6952 17.8488C15.4099 18.8819 13.7772 19.5 11.9998 19.5C9.14361 19.5 6.66034 17.9036 5.39355 15.5543L7.82409 13.5648C8.45747 15.2552 10.0881 16.4585 11.9998 16.4585C12.8215 16.4585 13.5913 16.2363 14.2519 15.8486L16.6948 17.8484Z"
          fill="#7E8085"
        />
        <path
          d="M16.7876 6.22661L14.3579 8.21571C13.6742 7.78839 12.8661 7.54154 12.0003 7.54154C10.0453 7.54154 8.38416 8.80002 7.78251 10.551L5.3392 8.55074H5.33879C6.58703 6.1442 9.10162 4.5 12.0003 4.5C13.8201 4.5 15.4887 5.14821 16.7876 6.22661Z"
          fill="#7E8085"
        />
      </svg>
    );
  };

  const CloseAlertIcon: React.FC<React.SVGAttributes<{}>> = ({
    width,
    height,
    color
  }) => {
    return (
      <svg
        className=" cursor-pointer"
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1213 10.1213L5.87868 5.87868M5.87868 10.1213L10.1213 5.87868M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return {
    BackIcon,
    EpostIcon,
    PhoneIcon,
    EyeOnIcon,
    EyeOffIcon,
    AppleIcon,
    GoogleIcon,
    FacebookIcon,
    CloseAlertIcon,
  };
};

export default useIcons;
