interface LoaderProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
}


const Loader = ({
  size = "md",
  fullScreen = false
}: LoaderProps) => {


  const sizes = {

    sm: "h-5 w-5",

    md: "h-10 w-10",

    lg: "h-16 w-16"

  };


  return (

    <div

      className={`
        flex
        items-center
        justify-center

        ${
          fullScreen
            ? "fixed inset-0 bg-white/70 z-50"
            : "py-10"
        }
      `}

    >

      <div

        className={`
          ${sizes[size]}
          rounded-full
          border-4
          border-gray-200
          border-t-black
          animate-spin
        `}

      />


    </div>

  );

};


export default Loader;
