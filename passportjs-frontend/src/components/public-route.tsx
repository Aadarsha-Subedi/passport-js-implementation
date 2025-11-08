import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth-store";
import { Loader } from "./loader";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
	const loggedIn = useAuthStore((state) => state.loggedIn);

	if (loggedIn === null) return <Loader />; // still validating
	if (loggedIn) return <Navigate to="/user" replace />; // already logged in

	return children;
};
