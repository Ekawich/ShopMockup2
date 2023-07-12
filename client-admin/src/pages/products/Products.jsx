import React from "react";

const Products = () => {
	return (
		<>
			<header className="bg-white">
				<div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">Products</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-screen-2xl py-6 sm:px-6 lg:px-8">
					<div class="flex flex-col">
						<div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
								<div class="overflow-hidden">
									<table class="min-w-full text-left text-sm font-light">
										<thead class="border-b font-medium dark:border-neutral-500">
											<tr>
												<th scope="col" class="px-6 py-4">
													#
												</th>
												<th scope="col" class="px-6 py-4">
													Album
												</th>
												<th scope="col" class="px-6 py-4">
													Artist
												</th>
												<th scope="col" class="px-6 py-4">
													Price
												</th>
											</tr>
										</thead>
										<tbody>
											<tr class="border-b dark:border-neutral-500">
												<td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
												<td class="whitespace-nowrap px-6 py-4">Mark</td>
												<td class="whitespace-nowrap px-6 py-4">Otto</td>
												<td class="whitespace-nowrap px-6 py-4">@mdo</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
												<td class="whitespace-nowrap px-6 py-4">Jacob</td>
												<td class="whitespace-nowrap px-6 py-4">Thornton</td>
												<td class="whitespace-nowrap px-6 py-4">@fat</td>
											</tr>
											<tr class="border-b dark:border-neutral-500">
												<td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
												<td class="whitespace-nowrap px-6 py-4">Larry</td>
												<td class="whitespace-nowrap px-6 py-4">Wild</td>
												<td class="whitespace-nowrap px-6 py-4">@twitter</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Products;
