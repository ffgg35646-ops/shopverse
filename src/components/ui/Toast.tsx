import {
  CheckCircle,
  XCircle,
  AlertCircle,
  X
} from "lucide-react";


import type {
  ReactNode
} from "react";


interface ToastProps {

  message: string;

  type?:
    | "success"
    | "error"
    | "warning";

  onClose: () => void;

}



const Toast = ({
  message,
  type = "success",
  onClose
}: ToastProps) => {



  const icons: Record<
    string,
    ReactNode
  > = {

    success: (
      <CheckCircle size={20} />
    ),

    error: (
      <XCircle size={20} />
    ),

    warning: (
      <AlertCircle size={20} />
    )

  };



  const styles = {

    success:
      "bg-green-50 text-green-700 border-green-200",

    error:
      "bg-red-50 text-red-700 border-red-200",

    warning:
      "bg-yellow-50 text-yellow-700 border-yellow-200"

  };



  return (

    <div

      className={`
        fixed
        top-5
        right-5
        z-50
        flex
        items-center
        gap-3
        rounded-lg
        border
        px-4
        py-3
        shadow-lg

        ${styles[type]}
      `}

    >

      {icons[type]}


      <p className="text-sm font-medium">
        {message}
      </p>


      <button

        onClick={onClose}

        className="ml-2"

      >

        <X size={18} />

      </button>


    </div>

  );

};


export default Toast;
