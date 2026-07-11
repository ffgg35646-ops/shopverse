import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";


const NotFound = () => {

  return (

    <>

      <PageHeader
        title="404"
        description="The page you're looking for doesn't exist."
      />

      <section className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-16">

        <div className="max-w-xl text-center">

          <h1 className="mb-4 text-8xl font-extrabold text-gray-200">
            404
          </h1>

          <h2 className="mb-4 text-4xl font-bold">
            Page Not Found
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Sorry, the page you are looking for may have been moved,
            deleted, or never existed.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link to="/">

              <Button>

                <div className="flex items-center gap-2">

                  <Home size={18} />

                  Back to Home

                </div>

              </Button>

            </Link>

            <Link to="/shop">

              <Button variant="outline">

                <div className="flex items-center gap-2">

                  <Search size={18} />

                  Browse Products

                </div>

              </Button>

            </Link>

          </div>

        </div>

      </section>

    </>

  );

};


export default NotFound;
