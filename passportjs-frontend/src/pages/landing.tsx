import { NavLink } from "react-router-dom";
import { Container } from "../components/container";

export const Landing = () => {
	return (
		<Container>
			<div className="flex flex-col items-center gap-y-4">
				<h1 className="text-3xl font-bold italic">
					Welcome to the landing page
				</h1>
				<NavLink to="/login">
					<button className="cursor-pointer rounded-xl bg-white px-4 py-1 font-bold text-black hover:bg-neutral-200">
						Go to the login page
					</button>
				</NavLink>
			</div>
		</Container>
	);
};
