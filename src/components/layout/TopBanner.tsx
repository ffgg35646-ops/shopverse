import { X } from "lucide-react";

import { useState } from "react";


const TopBanner = () => {

  const [visible, setVisible] = useState(true);


  if (!visible) {
    return null;
  }


  return (

    <div className="bg-black text-white">


      <div className="container mx-auto px-4 py-2 flex items-center justify-center relative">


        <p className="text-sm text-center">

          Free shipping on orders over $100.
          Limited time offers available.

        </p>



        <button

          onClick={() => setVisible(false)}

          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
          "

          aria-label="Close banner"

        >

          <X size={16} />

        </button>


      </div>


    </div>

  );

};


export default TopBanner;
