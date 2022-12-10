import Image from "next/image";
import React from "react";
import heroImage from "../public/photo1.png";

const page = () => {
	return (
		<>
			<header className="grid ">
				<h1>Classic Cheesecake Recipe</h1>
				<article className="lrtop_layout mt-4">
					<Image src={"/6dots.svg"} width={20} height={10} alt="dots" className="" />
					<p className="italic -mt-1 font-medium">
						Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a
						buttery graham cracker crust, no one can deny its simple decadence. For the best
						results, bake in a water bath.
					</p>
				</article>
				<figure className="mt-6">
					<Image
						src={heroImage}
						alt="cheesecake"
						placeholder="blur"
						className="w-full rounded-xl aspect-[2/1]"
					/>
				</figure>
			</header>
		</>
	);
};

export default page;
