import { create } from "zustand";


export interface ModalStoreInterface {
    vintageId?: string;
    isOpen: boolean;
    openModal: (vintageId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStoreInterface>((set) => ({
    vintageId: undefined,
    isOpen: false,
    openModal: (vintageId: string) => set({ isOpen: true, vintageId }),
    closeModal: () => set({ isOpen: false, vintageId: undefined }),
}));

export default useInfoModal;