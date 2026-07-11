import { Link } from "react-router-dom";

import {
  footerSections,
  paymentMethods,
  socialLinks
} from "@/data";


const Footer = () => {

  return (

    <footer className="bg-gray-900 text-white mt-16">


      <div className="container mx-auto px-4 py-12">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">


          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold mb-4">
              Shopverse
            </h2>


            <p className="text-gray-400 text-sm leading-6">
              Your trusted online store for
              quality products, fast delivery,
              and a smooth shopping experience.
            </p>


          </div>



          {/* Footer Links */}

          {footerSections.map(
            (section) => (

              <div
                key={section.id}
              >

                <h3 className="font-semibold mb-4">
                  {section.title}
                </h3>


                <ul className="space-y-3">

                  {section.links.map(
                    (link) => (

                      <li
                        key={link.id}
                      >

                        <Link
                          to={link.path}
                          className="text-gray-400 hover:text-white transition"
                        >
                          {link.label}
                        </Link>

                      </li>

                    )
                  )}

                </ul>


              </div>

            )
          )}


        </div>



        {/* Bottom Section */}


        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-5">


          {/* Social */}

          <div className="flex gap-5">

            {socialLinks.map(
              (social) => (

                <a
                  key={social.id}
                  href={social.url}
                  className="text-gray-400 hover:text-white"
                >
                  {social.name}
                </a>

              )
            )}

          </div>



          {/* Payment */}

          <div className="flex gap-4">

            {paymentMethods.map(
              (method) => (

                <span
                  key={method}
                  className="text-sm text-gray-400"
                >
                  {method}
                </span>

              )
            )}

          </div>


        </div>



        {/* Copyright */}

        <div className="text-center text-gray-500 text-sm mt-6">

          © {new Date().getFullYear()} Shopverse.
          All rights reserved.

        </div>


      </div>


    </footer>

  );

};


export default Footer;
