import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { Container } from "../components/container";
import { url } from "../utils/url";

export const Login = () => {
	function handleGoogleLogin() {
		window.location.href = `${url}/auth/google`;
	}

	function handleGithubLogin() {
		window.location.href = `${url}/auth/github`;
	}

	return (
		<Container>
			<div className="flex flex-col gap-y-4">
				<button
					onClick={handleGoogleLogin}
					className="flex cursor-pointer items-center gap-x-2 rounded-xl bg-white px-4 py-1 font-bold text-black hover:bg-neutral-200"
				>
					<IconBrandGoogle />
					<p>Login with Google</p>
				</button>
				<button
					onClick={handleGithubLogin}
					className="flex cursor-pointer items-center gap-x-2 rounded-xl bg-white px-4 py-1 font-bold text-black hover:bg-neutral-200"
				>
					<IconBrandGithub />
					<p>Login with Github</p>
				</button>
			</div>
		</Container>
	);
};
