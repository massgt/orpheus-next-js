export default function Background() {
	return (
		<div className=" bg-fixed absolute inset-0 inline-block h-full">
			{/* <div className="flex mx-[111px] h-full relative">
				<div className="w-4/12 bg-red-1  opacity-10 h-full " />
				<div className="w-4/12 mx-4 bg-red-1 opacity-10 h-full" />
				<div className="w-4/12 bg-red-1 opacity-10 h-full" />
			</div> */}
			<img src="./bg-hero.svg" className="absolute top-0 h-screen w-full " />
		</div>

		// <div className="flex-col">
		// 	<div class="grid grid-cols-3 gap-4 absolute inset-0 mx-[111px]">
		// 		<div className="  bg-red-1 opacity-10" />
		// 		<div className=" bg-red-1 opacity-10" />
		// 		<div className="  bg-red-1 opacity-10" />
		// 	</div>
		// </div>
	);
}
