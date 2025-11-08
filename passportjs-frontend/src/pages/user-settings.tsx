import { NavLink } from "react-router-dom";
import { Container } from "../components/container";
import { useUserStore } from "../store/user-store";

export const Settings = () => {
	const avatar = useUserStore((state) => state.avatar);
	return (
		<Container>
			<div className="flex flex-col gap-y-4">
				<img src={avatar} alt="avatar" />
				<NavLink to="..">
					<button className="cursor-pointer rounded-xl bg-white px-4 py-1 font-bold text-black hover:bg-neutral-200">
						Go back to user page
					</button>
				</NavLink>
			</div>
		</Container>
	);
};
