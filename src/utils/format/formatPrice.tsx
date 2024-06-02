import { useCurrencyStore } from "@/store/useCurrencyStore";

export const formatPrice = (price: number) => {
  const { currency, exchangeRates } = useCurrencyStore.getState();
  if (price === 0) {
    return "Free";
  }

  const exchangeRate = exchangeRates[currency];
  const convertedPrice = price * exchangeRate;

  const fractionDigits = currency === "KOR" || currency === "JPY" ? 0 : 2;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });

  return formatter.format(convertedPrice);
};
