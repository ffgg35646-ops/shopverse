import { useState, type ChangeEvent, type FormEvent } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


export interface PaymentFormData {
  paymentMethod: "card" | "paypal" | "cash";
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}


interface PaymentFormProps {
  loading?: boolean;
  initialValues?: Partial<PaymentFormData>;
  onSubmit: (data: PaymentFormData) => void;
}


const PaymentForm = ({
  loading = false,
  initialValues,
  onSubmit
}: PaymentFormProps) => {

  const [form, setForm] = useState<PaymentFormData>({
    paymentMethod: initialValues?.paymentMethod ?? "card",
    cardHolder: initialValues?.cardHolder ?? "",
    cardNumber: initialValues?.cardNumber ?? "",
    expiryDate: initialValues?.expiryDate ?? "",
    cvv: initialValues?.cvv ?? ""
  });


  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {

    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value
    }));

  };


  const handleMethodChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {

    setForm((previous) => ({
      ...previous,
      paymentMethod: event.target.value as PaymentFormData["paymentMethod"]
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
        Payment Method
      </h2>


      <div className="space-y-3">

        <label className="flex items-center gap-3 rounded-lg border p-4">

          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={form.paymentMethod === "card"}
            onChange={handleMethodChange}
          />

          <span>Credit / Debit Card</span>

        </label>


        <label className="flex items-center gap-3 rounded-lg border p-4">

          <input
            type="radio"
            name="paymentMethod"
            value="paypal"
            checked={form.paymentMethod === "paypal"}
            onChange={handleMethodChange}
          />

          <span>PayPal</span>

        </label>


        <label className="flex items-center gap-3 rounded-lg border p-4">

          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={form.paymentMethod === "cash"}
            onChange={handleMethodChange}
          />

          <span>Cash on Delivery</span>

        </label>

      </div>


      {form.paymentMethod === "card" && (

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          <div className="md:col-span-2">

            <Input
              name="cardHolder"
              label="Card Holder"
              value={form.cardHolder}
              onChange={handleChange}
              required
            />

          </div>


          <div className="md:col-span-2">

            <Input
              name="cardNumber"
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={form.cardNumber}
              onChange={handleChange}
              required
            />

          </div>


          <Input
            name="expiryDate"
            label="Expiry Date"
            placeholder="MM / YY"
            value={form.expiryDate}
            onChange={handleChange}
            required
          />


          <Input
            name="cvv"
            label="CVV"
            placeholder="123"
            value={form.cvv}
            onChange={handleChange}
            required
          />

        </div>

      )}


      <Button
        type="submit"
        fullWidth
        size="lg"
        disabled={loading}
      >
        {loading ? "Processing..." : "Complete Order"}
      </Button>

    </form>

  );

};


export default PaymentForm;
