import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";


const Hero = () => {

  return (

    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">

      <div className="container mx-auto grid min-h-[650px] grid-cols-1 items-center gap-12 px-4 py-16 lg:grid-cols-2">

        <div>

          <span className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm">
            New Summer Collection 2026
          </span>

          <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
            Premium Fashion &
            <br />
            Smart Electronics
          </h1>

          <p className="mb-8 max-w-xl text-lg text-gray-300">
            Discover thousands of premium products from the world's top
            brands. Shop fashion, electronics, accessories, beauty, and
            lifestyle essentials with fast delivery and secure payments.
          </p>

          <div className="flex flex-wrap gap-4">

            <Link to="/shop">

              <Button size="lg">

                <div className="flex items-center gap-2">

                  Shop Now

                  <ArrowRight size={18} />

                </div>

              </Button>

            </Link>

            <Link to="/categories">

              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Browse Categories
              </Button>

            </Link>

          </div>

        </div>


        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900"
            alt="Shopverse Hero"
            className="rounded-3xl object-cover shadow-2xl"
          />

          <div className="absolute -left-8 top-10 rounded-xl bg-white p-5 text-black shadow-xl">

            <p className="text-sm text-gray-500">
              Orders
            </p>

            <h3 className="text-3xl font-bold">
              25K+
            </h3>

          </div>

          <div className="absolute -bottom-8 right-8 rounded-xl bg-white p-5 text-black shadow-xl">

            <p className="text-sm text-gray-500">
              Happy Customers
            </p>

            <h3 className="text-3xl font-bold">
              50K+
            </h3>

          </div>

        </div>

      </div>

    </section>

  );

};


export default Hero;
