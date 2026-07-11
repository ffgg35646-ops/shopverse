import { Link, useLocation } from "react-router-dom";

import { ChevronRight } from "lucide-react";


interface BreadcrumbProps {
  title?: string;
}


const Breadcrumb = ({
  title
}: BreadcrumbProps) => {


  const location = useLocation();


  const paths = location.pathname
    .split("/")
    .filter(Boolean);



  return (

    <div className="bg-gray-50 border-b">

      <div className="container mx-auto px-4 py-4">


        <div className="flex items-center gap-2 text-sm">


          <Link
            to="/"
            className="text-gray-500 hover:text-black"
          >
            Home
          </Link>



          {paths.map(
            (path, index) => {


              const route =
                "/" +
                paths
                  .slice(0, index + 1)
                  .join("/");



              const label =
                path
                  .replace("-", " ")
                  .replace(/\b\w/g, char =>
                    char.toUpperCase()
                  );



              return (

                <div
                  key={route}
                  className="flex items-center gap-2"
                >

                  <ChevronRight
                    size={16}
                    className="text-gray-400"
                  />


                  {index === paths.length - 1 ? (

                    <span className="text-black font-medium">

                      {title || label}

                    </span>

                  ) : (

                    <Link

                      to={route}

                      className="
                        text-gray-500
                        hover:text-black
                      "

                    >

                      {label}

                    </Link>

                  )}


                </div>

              );

            }
          )}


        </div>


      </div>

    </div>

  );

};


export default Breadcrumb;
