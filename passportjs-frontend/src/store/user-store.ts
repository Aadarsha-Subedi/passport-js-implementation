import { create } from "zustand";

interface UserProps {
	id: string;
	name: string;
	email: string;
	avatar: string;
	provider: string;
	setId: (id: string) => void;
	setName: (name: string) => void;
	setEmail: (email: string) => void;
	setAvatar: (avatar: string) => void;
	setProvider: (provider: string) => void;
}

export const useUserStore = create<UserProps>((set) => ({
	id: "",
	name: "user",
	email: "",
	avatar: "",
	provider: "",
	setId: (id: string) => set({ id }),
	setName: (name: string) => set({ name }),
	setEmail: (email: string) => set({ email }),
	setAvatar: (avatar: string) => set({ avatar }),
	setProvider: (provider: string) => set({ provider }),
}));
