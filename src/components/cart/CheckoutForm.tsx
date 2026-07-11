import { useState, type FormEvent } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


export interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  notes: string;
}


interface CheckoutFormProps {
  initialValues?: Partial<CheckoutFormData>;
  loading?: boolean;
  onSubmit: (data: CheckoutFormData) => void;
}


const CheckoutForm = ({
  initialValues,
  loading = false,
  onSubmit
}: CheckoutFormProps) => {

  const [form, setForm] = useState<CheckoutFormData>({
    firstName: initialValues?.firstName ?? "",
    lastName: initialValues?.lastName ?? "",
    email: initialValues?.email ?? "",
    phone: initialValues?.phone ?? "",
    company: initialValues?.company ?? "",
    address: initialValues?.address ?? "",
    city: initialValues?.city ?? "",
    state: initialValues?.state ?? "",
    postalCode: initialValues?.postalCode ?? "",
    country: initialValues?.country ?? "",
    notes: initialValues?.notes ?? ""
  });


  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

  };


  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    onSubmit(form);

  };


  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border bg-white p-6"
    >

      <h2 className="text-2xl font-semibold">
        Billing Details
      </h2>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <Input
          name="firstName"
          label="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />

        <Input
          name="lastName"
          label="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />

        <Input
          name="email"
          type="email"
          label="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <Input
          name="phone"
          type="tel"
          label="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <Input
          name="company"
          label="Company (Optional)"
          value={form.company}
          onChange={handleChange}
        />

        <Input
          name="country"
          label="Country"
          value={form.country}
          onChange={handleChange}
          required
        />

        <div className="md:col-span-2">

          <Input
            name="address"
            label="Street Address"
            value={form.address}
            onChange={handleChange}
            required
          />

        </div>

        <Input
          name="city"
          label="City"
          value={form.city}
          onChange={handleChange}
          required
        />

        <Input
          name="state"
          label="State / Region"
          value={form.state}
          onChange={handleChange}
          required
        />

        <Input
          name="postalCode"
          label="Postal Code"
          value={form.postalCode}
          onChange={handleChange}
          required
        />

      </div>


      <div>

        <label className="mb-2 block text-sm font-medium text-gray-700">
          Order Notes
        </label>

        <textarea
          name="notes"
          rows={5}
          value={form.notes}
          onChange={handleChange}
          placeholder="Additional information about your order..."
          className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-black"
        />

      </div>


      <Button
        type="submit"
        fullWidth
        size="lg"
        disabled={loading}
      >
        {loading ? "Processing..." : "Continue"}
      </Button>

    </form>

  );

};


export default CheckoutForm;
