"use client";
import { useCurrencyStore } from "@/store/useCurrencyStore";

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrencyStore();

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="text-xs">
      <select
        id="currency"
        className="outline-none"
        value={currency}
        onChange={handleCurrencyChange}
      >
        <option value="USD">🇺🇸 USD</option>
        <option value="EUR">🇪🇺 EUR</option>
        <option value="KOR">🇰🇷 KOR</option>
        <option value="JPY">🇯🇵 JPY</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
