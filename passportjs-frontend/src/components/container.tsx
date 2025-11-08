export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen min-w-full items-center justify-center bg-zinc-500">
			{children}
		</div>
	);
};
