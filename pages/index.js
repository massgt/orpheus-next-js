import Background from "../components/Background";
import Navbar from "../components/Navbar";
import { useTheme } from "next-themes";

export default function Page() {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<div className="bg-white-1 dark:bg-black-1 h-full px-[111px] bg-fixed">
				<Background />
				<Navbar
					Logo={theme === "light" ? "logo-light.svg" : "./logo-orpheus.svg"}
					imgTheme={theme === "light" ? "./moon.svg" : "./sun.svg"}
					OnClickTheme={() => {
						setTheme(theme === "light" ? "dark" : "light");
					}}
				/>
				<div className="flex justify-between items-center py-[70px]">
					<div className="mt-[70px]">
						<img src="./txt-header.svg " className="w-[447px]" />
						<p className=" text-black-2  dark:text-grey-1 font-Montserrat font-normal text-lg max-w-[447px] py-[40px] leading-relaxed ">
							Product & Graphic Designer, with Experience In Delivering
							End-To-End UX/UI Design For Software Products.
						</p>
						<div className="flex relative">
							<a>
								<img src="./btn-works.svg" className="mr-[50px] w-[150px] " />
							</a>
							<a className="cursor-pointer mr-[50px] w-[150px]">
								<img src="./btn-freestuf.svg" className="w-[140px]" />
							</a>
						</div>
					</div>
					<img src="./full-hero.svg" className="w-[635px] " />
				</div>
			</div>
		</>
	);
}
