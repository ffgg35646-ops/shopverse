import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { useAppDispatch } from "@/store";
import { login } from "@/store/userSlice";


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setLoading(true);

    try {

      dispatch(
        login({
          email,
          password
        })
      );

      navigate("/");

    } finally {

      setLoading(false);

    }

  };


  return (

    <>

      <PageHeader
        title="Login"
        description="Sign in to your ShopVerse account."
      />

      <section className="container mx-auto flex justify-center px-4 py-16">

        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-center text-3xl font-bold">
            Welcome Back
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <Input
              type="email"
              label="Email Address"
              placeholder="john@example.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

            <Input
              type="password"
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm">

                <input type="checkbox" />

                Remember me

              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
            >
              {loading
                ? "Signing In..."
                : "Sign In"}
            </Button>

          </form>

          <p className="mt-6 text-center text-sm text-gray-600">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </section>

    </>

  );

};


export default Login;
