import { create } from "zustand";

interface LoadingStoreProps {
	loading: boolean;
	setLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingStoreProps>((set) => ({
	loading: false,
	setLoading: (loading: boolean) => set({ loading }),
}));
