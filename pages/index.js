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

				<div className="flex justify-end items-center ">
					<img src="./txt-recent.svg" className="h-[50px] w-[193px]" />
					<img src="./line.svg" className="mx-[22px]" />
					<a className="font-Montserrat text-[16px] font-light opacity-80 cursor-pointer">
						VIEW MORE
					</a>
				</div>
				<div class="flex overflow-x-scroll mt-[30px]">
					<img src="./frame1.svg" className="h-[237px] mr-[50px]" />
					<img src="./frame2.svg" className="h-[237px] mr-[50px]" />
					<img src="./frame3.svg" className="h-[237px] mr-[50px]" />
					<img src="./frame4.svg" className="h-[237px] mr-[50px]" />
					<img src="./frame5.svg" className="h-[237px] mr-[50px]" />
					<img src="./view-all.svg" />
				</div>

				<div className="flex items-center mt-[80px]">
					<img src="./txt-contribution.svg" className="h-[50px] w-[193px]" />
					<img src="./line.svg" className="mx-[22px]" />
					<a className="font-Montserrat text-[16px] font-light opacity-80 cursor-pointer">
						VIEW MORE
					</a>
				</div>
				<div>
					<img
						src="./banner-contribution.svg"
						className="h-[434px] -mt-[30px]"
					/>
					<img
						src="./banner-contribution2.svg"
						className="h-[434px] -mt-[50px]"
					/>
				</div>

				<div className="flex justify-center w-auto mt-[150px]">
					<img src="./lets-connect.svg" />
				</div>
				<p className="text-center my-[30px] font-Montserrat text-[18px]">
					Get in touch for opportunities or just to say hi! 👋
				</p>
				<div className="flex justify-center gap-[43px] pb-[100px] ">
					<img src="./linkedin.svg" />
					<img src="./web.svg" />
					<img src="./instagram.svg" />
					<img src="./medium.svg" />
					<img src="./email.svg" />
				</div>
			</div>
		</>
	);
}
