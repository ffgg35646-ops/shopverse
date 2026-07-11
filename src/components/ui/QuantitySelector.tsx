import { Minus, Plus } from "lucide-react";


interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}


const QuantitySelector = ({
  value,
  min = 1,
  max = 99,
  onChange
}: QuantitySelectorProps) => {

  const decrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increase = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="inline-flex items-center rounded-lg border border-gray-300 overflow-hidden">

      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Decrease quantity"
      >
        <Minus size={18} />
      </button>

      <span className="flex h-10 min-w-[48px] items-center justify-center border-x border-gray-300 px-3 font-medium">
        {value}
      </span>

      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Increase quantity"
      >
        <Plus size={18} />
      </button>

    </div>
  );

};


export default QuantitySelector;
