import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Container } from "../components/container";
import { useLoadingStore } from "../store/loading-store";
import { url } from "../utils/url";
import { useUserStore } from "../store/user-store";
import { Loader } from "../components/loader";
import { useAuthStore } from "../store/auth-store";

export const User = () => {
	const loading = useLoadingStore((state) => state.loading);
	const setLoading = useLoadingStore((state) => state.setLoading);

	const setLoggedIn = useAuthStore((state) => state.setLoggedIn);

	const name = useUserStore((state) => state.name);
	const setName = useUserStore((state) => state.setName);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		const getUserData = async () => {
			try {
				const response = await axios({
					url: `${url}/user`,
					method: "GET",
					withCredentials: true,
				});
				setName(response.data.user.displayName);
			} catch (error) {
				console.log(error);
				return null;
			} finally {
				setLoading(false);
			}
		};
		getUserData();
	}, []);

	async function handleLogout() {
		try {
			await axios({
				url: `${url}/auth/logout`,
				method: "GET",
				withCredentials: true,
			});
			navigate("/login");
			setLoggedIn(false);
		} catch (error) {
			console.error("Logout failed");
		}
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<Container>
			<div className="flex flex-col gap-y-4">
				<h1 className="text-5xl font-bold">Welcome {name}</h1>
				<button
					onClick={handleLogout}
					className="cursor-pointer rounded-xl bg-white px-4 py-1 font-bold text-black hover:bg-neutral-200"
				>
					Logout{" "}
				</button>
			</div>
		</Container>
	);
};
