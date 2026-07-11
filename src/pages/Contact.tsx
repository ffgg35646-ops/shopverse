import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState, type FormEvent } from "react";

import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


const Contact = () => {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    setLoading(true);

    console.log(form);

    setTimeout(() => {

      setLoading(false);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    }, 1000);

  };


  return (

    <>

      <PageHeader
        title="Contact Us"
        description="We're here to help. Get in touch with our team."
      />

      <section className="container mx-auto px-4 py-14">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <h2 className="mb-6 text-3xl font-bold">
              Let's Talk
            </h2>

            <p className="mb-10 text-gray-600">
              Have a question about your order, products, shipping,
              or anything else? Our support team is ready to help.
            </p>


            <div className="space-y-6">

              <div className="flex gap-4">

                <MapPin className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Office
                  </h3>

                  <p className="text-gray-600">
                    245 Madison Avenue
                    <br />
                    New York, NY 10016
                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <Phone className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +1 (800) 555-0199
                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <Mail className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@shopverse.com
                  </p>

                </div>

              </div>


              <div className="flex gap-4">

                <Clock className="mt-1 text-blue-600" />

                <div>

                  <h3 className="font-semibold">
                    Business Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Friday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <Input
                label="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value
                  })
                }
                required
              />

              <Input
                type="email"
                label="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value
                  })
                }
                required
              />

              <Input
                label="Subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({
                    ...form,
                    subject: e.target.value
                  })
                }
                required
              />

              <div>

                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value
                    })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-black"
                />

              </div>

              <Button
                type="submit"
                fullWidth
                size="lg"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </Button>

            </form>

          </div>

        </div>

      </section>

    </>

  );

};


export default Contact;
