import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "../pages/landing";
import { Login } from "../pages/login";
import { User } from "../pages/user";
import { ProtectedRoute } from "./protected-route";
import { PublicRoute } from "./public-route";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../utils/url";
import { useAuthStore } from "../store/auth-store";

export const App = () => {
	const setLoggedIn = useAuthStore((state) => state.setLoggedIn);

	useEffect(() => {
		const validateUser = async () => {
			try {
				await axios.get(`${url}/user`, { withCredentials: true });
				setLoggedIn(true);
			} catch {
				setLoggedIn(false);
			}
		};
		validateUser();
	}, [setLoggedIn]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route
						index
						element={
							<PublicRoute>
								<Landing />
							</PublicRoute>
						}
					/>
					<Route
						path="login"
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path="user"
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
