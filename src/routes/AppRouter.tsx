import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";


import ProtectedRoute from "./ProtectedRoute";


import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetails from "@/pages/ProductDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Wishlist from "@/pages/Wishlist";

import Login from "@/pages/Login";
import Register from "@/pages/Register";

import Profile from "@/pages/Profile";
import Orders from "@/pages/Orders";
import TrackOrder from "@/pages/TrackOrder";

import OrderSuccess from "@/pages/OrderSuccess";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";

import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

import NotFound from "@/pages/NotFound";


const AppRouter = () => {

  return (

    <BrowserRouter>

      <Routes>


        <Route
          element={<MainLayout />}
        >

          <Route
            path="/"
            element={<Home />}
          />


          <Route
            path="/shop"
            element={<Shop />}
          />


          <Route
            path="/product/:slug"
            element={<ProductDetails />}
          />


          <Route
            path="/cart"
            element={<Cart />}
          />


          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />


          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />


          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />


          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />


          <Route
            path="/track-order"
            element={
              <ProtectedRoute>
                <TrackOrder />
              </ProtectedRoute>
            }
          />


          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />


          <Route
            path="/login"
            element={<Login />}
          />


          <Route
            path="/register"
            element={<Register />}
          />


          <Route
            path="/about"
            element={<About />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />


          <Route
            path="/faq"
            element={<FAQ />}
          />


          <Route
            path="/privacy"
            element={<Privacy />}
          />


          <Route
            path="/terms"
            element={<Terms />}
          />


        </Route>


        <Route
          element={<AdminLayout />}
        >

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <div>
                  Admin Dashboard
                </div>
              </ProtectedRoute>
            }
          />

        </Route>


        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>

    </BrowserRouter>

  );

};


export default AppRouter;
