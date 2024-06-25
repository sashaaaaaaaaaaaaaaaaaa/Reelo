import { create } from "zustand";
import movieId from "@/pages/watch/[movieId]";

export interface ModalStoreInterface {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;

