import { useState } from "react";

import { Link } from "react-router-dom";

import {
  Menu,
  X
} from "lucide-react";

import { navigation } from "@/data";


const MobileMenu = () => {

  const [open, setOpen] = useState(false);


  return (

    <>

      <button
        onClick={() => setOpen(true)}
        className="p-2"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>



      {open && (

        <div className="fixed inset-0 z-50">


          {/* Overlay */}

          <div

            className="
              absolute
              inset-0
              bg-black/40
            "

            onClick={() => setOpen(false)}

          />



          {/* Drawer */}

          <div

            className="
              absolute
              right-0
              top-0
              h-full
              w-72
              bg-white
              p-6
              shadow-xl
            "

          >


            <div className="flex justify-between items-center mb-8">


              <h2 className="text-xl font-bold">
                Shopverse
              </h2>


              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >

                <X size={24} />

              </button>


            </div>



            <nav className="flex flex-col gap-5">


              {navigation.map(
                (item) => (

                  <Link

                    key={item.id}

                    to={item.path}

                    onClick={() =>
                      setOpen(false)
                    }

                    className="
                      text-gray-700
                      hover:text-black
                    "

                  >

                    {item.label}

                  </Link>

                )
              )}


            </nav>



            <div className="border-t mt-8 pt-6">


              <Link

                to="/login"

                onClick={() =>
                  setOpen(false)
                }

                className="block mb-4"

              >
                Login
              </Link>



              <Link

                to="/register"

                onClick={() =>
                  setOpen(false)
                }

              >
                Create Account
              </Link>


            </div>


          </div>


        </div>

      )}


    </>

  );

};


export default MobileMenu;
