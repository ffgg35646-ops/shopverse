import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


interface NewsletterProps {
  loading?: boolean;
  onSubscribe?: (email: string) => void;
}


const Newsletter = ({
  loading = false,
  onSubscribe
}: NewsletterProps) => {

  const [email, setEmail] = useState("");


  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    const value = email.trim();

    if (!value) {
      return;
    }

    onSubscribe?.(value);

    setEmail("");

  };


  return (

    <section className="bg-black py-20 text-white">

      <div className="container mx-auto max-w-4xl px-4">

        <div className="rounded-3xl bg-gray-900 p-10">

          <div className="mb-8 flex justify-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">

              <Mail size={32} />

            </div>

          </div>


          <div className="mx-auto mb-8 max-w-2xl text-center">

            <h2 className="mb-4 text-4xl font-bold">
              Join Our Newsletter
            </h2>

            <p className="text-lg text-gray-300">
              Subscribe to receive exclusive offers, new arrivals,
              product updates, and special discounts directly in your inbox.
            </p>

          </div>


          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-2xl flex-col gap-4 sm:flex-row"
          >

            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              className="flex-1 bg-white"
            />

            <Button
              type="submit"
              size="lg"
              disabled={loading}
            >

              <div className="flex items-center gap-2">

                <Send size={18} />

                {loading
                  ? "Subscribing..."
                  : "Subscribe"}

              </div>

            </Button>

          </form>


          <p className="mt-6 text-center text-sm text-gray-400">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>

    </section>

  );

};


export default Newsletter;
