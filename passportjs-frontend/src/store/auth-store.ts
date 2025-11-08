import { create } from "zustand";

interface AuthProps {
	loggedIn: boolean | null;
	setLoggedIn: (loggedIn: boolean) => void;
}

export const useAuthStore = create<AuthProps>((set) => ({
	loggedIn: null,
	setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
}));
