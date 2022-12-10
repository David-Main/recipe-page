import Image from "next/image";
import React, { ReactNode } from "react";

import heroImage from "../public/photo1.png";

const index = () => {
	return (
		<div className="max-w-screen-lg mx-auto pb-24">
			<header className="grid ">
				<h1>Classic Cheesecake Recipe</h1>
				<article className="lrtop_layout mt-4 lg:w-4/6">
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

			<div className="mt-8 grid gap-12 lg:col-span-2">
				<aside className="lg:col-start-2 lg:ring-1 lg:ring-neutral-200 rounded-lg lg:shadow-xl lg:shadow-gray-300 lg:self-start lg:p-6">
					<div className="flex items-center gap-1 lg:gap-3 justify-start">
						🍴
						<small>
							<p className="text-gray-400 uppercase -mb-2 text-[9px] font-semibold lg:font-medium lg:mt-0 ">
								YIELDS
							</p>
							<p className=" lg:text-base text-[#f2884a] font-medium">12 servings</p>
						</small>
					</div>

					<section className="flex justify-between max-w-xs my-4 lg:flex-col lg:gap-4">
						<Duration time="Prep time" duration="45 minutes" />
						<Duration time="cook time" duration="1 hour" />
						<Duration time="total time" duration="7,75 hours" />
					</section>
				</aside>

				<main className=" grid gap-12 col-start-1 lg:row-start-1 lg:w-4/6">
					<h2>Ingredients</h2>
					<section className="grid gap-8">
						<h3 className="">Graham Cracker Crust</h3>

						<section className="grid gap-4">
							<label className="list-style">
								<>
									1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong> (about 10 full sheet
									graham crackers)
								</>
							</label>
							<label className="list-style">
								<>
									5 Tablespoons (70g) <strong>unsalted butter</strong>, melted
								</>
							</label>
							<label className="list-style">
								<>
									1/4 cup (50g) <strong>granulated sugar</strong>
								</>
							</label>
						</section>
					</section>

					<section className="grid gap-8">
						<h3 className="">Cheesecake</h3>

						<section className="grid gap-4">
							<label className="list-style">
								four 8-ounce blocks (904g) full-fat <strong>cream cheese</strong>, softened to room
								temperature
							</label>
							<label className="list-style">
								1 cup (200g) <strong>granulated sugar</strong>
							</label>
							<label className="list-style">
								1 cup (240g) full-fat <strong>sour cream</strong>, at room temperature
							</label>

							<label className="list-style">
								1 teaspoon <strong>pure vanilla extract</strong>
							</label>

							<label className="list-style">
								2 teaspoons <strong>fresh lemon juice</strong> (optional, but recommended)
							</label>

							<label className="list-style">
								3 large <strong>eggs</strong>, at room temperature
							</label>

							<label className="list-style">
								topping suggestions:{" "}
								<i className="font-medium">
									salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine
									chocolate ganache, fresh fruit, whipped cream, or raspberry sauce
								</i>
								(recipe in notes)
							</label>
						</section>
					</section>

					<section className="grid gap-8">
						<h1>Instructions</h1>

						<div className="grid gap-6 text-base text-neutral-800 ">
							<Instruction number="1">
								<p>
									Adjust the oven rack to the lower-middle position and preheat oven to 350°F
									(177°C).
								</p>
							</Instruction>

							<Instruction number="2">
								<p>
									<strong>Make the crust:</strong> Using a food processor, pulse the graham crackers
									into crumbs. Pour into a medium bowl and stir in sugar and melted butter until
									combined. (You can also pulse it all together in the food processor.) Mixture will
									be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or
									10-inch springform pan. No need to grease the pan first. I use the bottom of a
									measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from
									the oven and place the hot pan on a large piece of aluminum foil. The foil will
									wrap around the pan for the water bath in step 4. Allow crust to slightly cool as
									you prepare the filling.
								</p>
							</Instruction>

							<Instruction number="3">
								<p>
									<strong>Make the filling:</strong> Using a handheld or stand mixer fitted with a
									paddle attachment, beat the cream cheese and granulated sugar together on
									medium-high speed in a large bowl until the mixture is smooth and creamy, about 2
									minutes. Add the sour cream, vanilla extract, and lemon juice then beat until
									fully combined. On medium speed, add the eggs one at a time, beating after each
									addition until just blended. After the final egg is incorporated into the batter,
									stop mixing. To help prevent the cheesecake from deflating and cracking as it
									cools, avoid over-mixing the batter as best you can.
								</p>
							</Instruction>

							<Instruction number="4">
								<p>
									<strong>Prepare the simple water bath (see note)</strong> Boil a pot of water. You
									need 1 inch of water in your roasting pan for the water bath, so make sure you
									boil enough. I use an entire kettle of hot water. As the water is heating up, wrap
									the aluminum foil around the springform pan. Pour the cheesecake batter on top of
									the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place
									the pan inside of a large roasting pan. Carefully pour the hot water inside of the
									pan and place in the oven. (Or you can place the roasting pan in the oven first,
									then pour the hot water in. Whichever is easier for you.)
								</p>
							</Instruction>

							<Instruction number="5">
								<p>
									Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s
									done, the center of the cheesecake will slightly wobble if you gently shake the
									pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in
									the oven in the water bath as it cools down for 1 hour. Remove from the oven and
									water bath, then cool cheesecake completely at room temperature. Then refrigerate
									the cheesecake for at least 4 hours or overnight.
								</p>
							</Instruction>

							<Instruction number="6">
								<p>
									Use a knife to loosen the chilled cheesecake from the rim of the springform pan,
									then remove the rim. Using a clean sharp knife, cut into slices for serving. For
									neat slices, wipe the knife clean and dip into warm water between each slice.
								</p>
							</Instruction>

							<Instruction number="7">
								<p>
									Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the
									refrigerator for up to 5 days.
								</p>
							</Instruction>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default index;

function Duration({ time, duration }: { time: string; duration: string }) {
	return (
		<div className="flex items-center gap-1 lg:gap-4 justify-start">
			<span className="lg:tex-xl">🕓️</span>
			<small className="grid lg:gap-1">
				<p className="text-gray-400 uppercase -mb-2 text-[9px]  lg:text-[10px] font-semibold lg:font-medium lg:mt-0">
					{time}
				</p>
				<p className="font-semibold lg:text-base lg:font-medium">{duration}</p>
			</small>
		</div>
	);
}

function Instruction({ number, children }: { number: string; children: ReactNode }) {
	return (
		<section className="lrtop_layout">
			<h4 className="text-white  flex justify-center items-center rounded text-2xl bg-[#f2884a] w-8 h-8">
				{number}
			</h4>
			<div>{children}</div>
		</section>
	);
}
