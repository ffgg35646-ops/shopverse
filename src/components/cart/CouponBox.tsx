import { useState, type FormEvent } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


interface CouponBoxProps {
  loading?: boolean;
  appliedCoupon?: string;
  onApplyCoupon: (code: string) => void;
  onRemoveCoupon?: () => void;
}


const CouponBox = ({
  loading = false,
  appliedCoupon,
  onApplyCoupon,
  onRemoveCoupon
}: CouponBoxProps) => {

  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    const code = couponCode.trim();

    if (!code) {
      return;
    }

    onApplyCoupon(code);

    setCouponCode("");

  };


  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-5 text-lg font-semibold">
        Discount Coupon
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:flex-row"
      >

        <Input
          value={couponCode}
          onChange={(event) =>
            setCouponCode(event.target.value)
          }
          placeholder="Enter coupon code"
          className="flex-1"
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Applying..."
            : "Apply"}
        </Button>

      </form>

      {appliedCoupon && (

        <div className="mt-5 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">

          <div>

            <p className="font-medium text-green-700">
              Coupon Applied
            </p>

            <p className="text-sm text-green-600">
              {appliedCoupon}
            </p>

          </div>

          {onRemoveCoupon && (
            <Button
              type="button"
              variant="outline"
              onClick={onRemoveCoupon}
            >
              Remove
            </Button>
          )}

        </div>

      )}

    </div>

  );

};
export default CouponBox;
