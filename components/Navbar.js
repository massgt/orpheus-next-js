export default function Navbar({ OnClickTheme, imgTheme, Logo }) {
	return (
		<div className="flex pt-[30px] justify-between items-center relative">
			<img src={Logo} className="w-[162px] h-[44px] -ml-[12px]" />
			<nav className="flex justify-center items-center space-x-10 -mr-[14px]">
				<a className="text-white font-Montserrat text-[16px] font-medium hover:text-red-3 cursor-pointer">
					Works
				</a>
				<a className="text-white font-Montserrat text-[16px] font-medium  hover:text-red-3 cursor-pointer">
					Contribution
				</a>
				<a className="text-white font-Montserrat text-[16px] font-medium  hover:text-red-3 cursor-pointer">
					Community
				</a>
				<a className="text-white font-Montserrat text-[16px] font-medium  hover:text-red-3 cursor-pointer">
					Get in Touch
				</a>
				<button onClick={OnClickTheme}>
					<img src={imgTheme} />
				</button>
			</nav>
		</div>
	);
}
