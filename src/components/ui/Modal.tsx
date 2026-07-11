import {
  X
} from "lucide-react";


import type {
  ReactNode
} from "react";


interface ModalProps {

  isOpen: boolean;

  onClose: () => void;

  title?: string;

  children: ReactNode;

  size?:
    | "sm"
    | "md"
    | "lg";

}



const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md"
}: ModalProps) => {


  if (!isOpen) {
    return null;
  }



  const sizes = {

    sm: "max-w-sm",

    md: "max-w-md",

    lg: "max-w-2xl"

  };



  return (

    <div

      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        px-4
      "

    >


      {/* Overlay */}

      <div

        className="
          absolute
          inset-0
          bg-black/50
        "

        onClick={onClose}

      />



      {/* Modal Box */}

      <div

        className={`
          relative
          bg-white
          rounded-xl
          shadow-xl
          w-full
          ${sizes[size]}
          z-10
        `}

      >


        {/* Header */}

        <div

          className="
            flex
            items-center
            justify-between
            border-b
            px-6
            py-4
          "

        >


          {title && (

            <h2 className="
              text-lg
              font-semibold
            ">

              {title}

            </h2>

          )}



          <button

            onClick={onClose}

            className="
              text-gray-500
              hover:text-black
            "

          >

            <X size={20}/>

          </button>


        </div>



        {/* Content */}

        <div className="p-6">

          {children}

        </div>


      </div>


    </div>

  );

};


export default Modal;
