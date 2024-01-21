import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) return toast("Item already in cart");

        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCart;
