import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import PageHeader from "@/components/layout/PageHeader";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { useAppDispatch } from "@/store";
import { register } from "@/store/userSlice";


const Register = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {

      dispatch(
        register({
          firstName,
          lastName,
          email,
          phone,
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
        title="Create Account"
        description="Register and start shopping today."
      />

      <section className="container mx-auto flex justify-center px-4 py-16">

        <div className="w-full max-w-xl rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-center text-3xl font-bold">
            Create Your Account
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div className="grid gap-5 md:grid-cols-2">

              <Input
                label="First Name"
                value={firstName}
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
                required
              />

              <Input
                label="Last Name"
                value={lastName}
                onChange={(e) =>
                  setLastName(e.target.value)
                }
                required
              />

            </div>

            <Input
              type="email"
              label="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <Input
              type="tel"
              label="Phone Number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
            />

            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
            />

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <Button
              type="submit"
              fullWidth
              size="lg"
              disabled={loading}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </Button>

          </form>

          <p className="mt-6 text-center text-sm text-gray-600">

            Already have an account?{" "}

            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign In
            </Link>

          </p>

        </div>

      </section>

    </>

  );

};


export default Register;
