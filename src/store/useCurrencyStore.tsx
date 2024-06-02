import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CurrencyState {
  currency: string;
  setCurrency: (currency: string) => void;
  exchangeRates: { [key: string]: number };
  setExchangeRates: (rates: { [key: string]: number }) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "",
      setCurrency: (currency) => set({ currency }),
      exchangeRates: {
        USD: 1,
        EUR: 0.85,
        JPY: 110,
        KOR: 1200,
      },
      setExchangeRates: (rates) => set({ exchangeRates: rates }),
    }),
    {
      name: "currency",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ currency: state.currency }),
    }
  )
);
