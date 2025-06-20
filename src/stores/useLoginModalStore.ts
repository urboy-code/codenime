import { create } from 'zustand';

type LoginModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// store
export const useLoginModalStore = create<LoginModalStore>((set) => ({
  isOpen: false, // nilai default: modal tertutup
  onOpen: () => set({ isOpen: true }), // fungsi untuk membuka modal
  onClose: () => set({ isOpen: false }), // fungsi untuk menutup modal
}));
