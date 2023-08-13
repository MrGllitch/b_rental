import prisma from '$lib/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const items = await prisma.item.findMany({
		include: {
			images: {
				take: 1,
				orderBy: {
					id: 'asc'
				}
			}
		}
	});
	//item.images[0].data = new Blob([ArrayBuffer], {type: "image/jpeg"})
	items.forEach((item) => {
		if (item && item.images && item.images.length > 0 && item.images[0].data) {
			const imageDataString = item.images[0].data.toString('base64'); // Convert Buffer to base64-encoded string
			item.images[0].data = imageDataString;
			console.log(typeof item.images[0].data);
		}
	});
	return { items };
}
