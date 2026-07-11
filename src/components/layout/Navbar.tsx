import { Link } from "react-router-dom";

import {
  ShoppingCart,
  Heart,
  User,
  Search
} from "lucide-react";

import { navigation } from "@/data";

import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";


import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";


const Navbar = () => {

  const {
    totalItems
  } = useCart();


  const {
    count: wishlistCount
  } = useWishlist();



  return (

    <header className="bg-white border-b sticky top-0 z-50">


      <div className="container mx-auto px-4">


        <div className="h-20 flex items-center justify-between">


          {/* Logo */}

          <Link
            to="/"
            className="text-2xl font-bold"
          >
            Shopverse
          </Link>



          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            {navigation.map(
              (item) => (

                <Link
                  key={item.id}
                  to={item.path}
                  className="text-gray-700 hover:text-black transition"
                >
                  {item.label}
                </Link>

              )
            )}

          </nav>



          {/* Actions */}

          <div className="flex items-center gap-5">


            <div className="hidden md:block">
              <SearchBar />
            </div>


            <Link
              to="/wishlist"
              className="relative"
            >

              <Heart size={22}/>

              {wishlistCount > 0 && (

                <span className="absolute -top-2 -right-2 text-xs">

                  {wishlistCount}

                </span>

              )}

            </Link>



            <Link
              to="/cart"
              className="relative"
            >

              <ShoppingCart size={22}/>


              {totalItems > 0 && (

                <span className="absolute -top-2 -right-2 text-xs">

                  {totalItems}

                </span>

              )}

            </Link>



            <Link
              to="/profile"
            >

              <User size={22}/>

            </Link>


            <div className="lg:hidden">

              <MobileMenu />

            </div>


          </div>


        </div>


      </div>


    </header>

  );

};


export default Navbar;
