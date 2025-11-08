import { Navigate } from "react-router-dom";

import { useAuthStore } from "../store/auth-store";
import { Loader } from "./loader";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const loggedIn = useAuthStore((state) => state.loggedIn);

	if (loggedIn === null) return <Loader />;
	if (!loggedIn) return <Navigate to="/login" />;

	return children;
};
