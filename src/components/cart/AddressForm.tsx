import { useState, type ChangeEvent, type FormEvent } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


export interface AddressFormData {
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}


interface AddressFormProps {
  initialValues?: Partial<AddressFormData>;
  loading?: boolean;
  submitText?: string;
  onSubmit: (data: AddressFormData) => void;
}


const AddressForm = ({
  initialValues,
  loading = false,
  submitText = "Save Address",
  onSubmit
}: AddressFormProps) => {

  const [form, setForm] = useState<AddressFormData>({
    firstName: initialValues?.firstName ?? "",
    lastName: initialValues?.lastName ?? "",
    company: initialValues?.company ?? "",
    addressLine1: initialValues?.addressLine1 ?? "",
    addressLine2: initialValues?.addressLine2 ?? "",
    city: initialValues?.city ?? "",
    state: initialValues?.state ?? "",
    postalCode: initialValues?.postalCode ?? "",
    country: initialValues?.country ?? "",
    phone: initialValues?.phone ?? "",
    isDefault: initialValues?.isDefault ?? false
  });


  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <Input
          name="firstName"
          label="First Name"
          value={form.firstName}
          onChange={handleInputChange}
          required
        />

        <Input
          name="lastName"
          label="Last Name"
          value={form.lastName}
          onChange={handleInputChange}
          required
        />

        <Input
          name="company"
          label="Company"
          value={form.company}
          onChange={handleInputChange}
        />

        <Input
          name="phone"
          type="tel"
          label="Phone Number"
          value={form.phone}
          onChange={handleInputChange}
          required
        />

        <div className="md:col-span-2">
          <Input
            name="addressLine1"
            label="Address Line 1"
            value={form.addressLine1}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="md:col-span-2">
          <Input
            name="addressLine2"
            label="Address Line 2"
            value={form.addressLine2}
            onChange={handleInputChange}
          />
        </div>

        <Input
          name="city"
          label="City"
          value={form.city}
          onChange={handleInputChange}
          required
        />

        <Input
          name="state"
          label="State / Province"
          value={form.state}
          onChange={handleInputChange}
          required
        />

        <Input
          name="postalCode"
          label="Postal Code"
          value={form.postalCode}
          onChange={handleInputChange}
          required
        />

        <Input
          name="country"
          label="Country"
          value={form.country}
          onChange={handleInputChange}
          required
        />

      </div>


      <label className="flex items-center gap-3">

        <input
          type="checkbox"
          name="isDefault"
          checked={form.isDefault}
          onChange={handleInputChange}
          className="h-4 w-4"
        />

        <span className="text-sm text-gray-700">
          Set as default address
        </span>

      </label>


      <Button
        type="submit"
        fullWidth
        size="lg"
        disabled={loading}
      >
        {loading ? "Saving..." : submitText}
      </Button>

    </form>

  );

};


export default AddressForm;
