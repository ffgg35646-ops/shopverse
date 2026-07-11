import type {
  ButtonHTMLAttributes,
  ReactNode
} from "react";


interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  children: ReactNode;

  variant?: 
    | "primary"
    | "secondary"
    | "outline"
    | "danger";

  size?:
    | "sm"
    | "md"
    | "lg";

  fullWidth?: boolean;
}



const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {



  const variants = {

    primary:
      "bg-black text-white hover:bg-gray-800",

    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300",

    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700"

  };



  const sizes = {

    sm:
      "px-3 py-1.5 text-sm",

    md:
      "px-5 py-2.5",

    lg:
      "px-7 py-3 text-lg"

  };



  return (

    <button

      className={`
        rounded-lg
        font-medium
        transition
        duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}

      {...props}

    >

      {children}

    </button>

  );

};


export default Button;
