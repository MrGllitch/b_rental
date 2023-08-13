import prisma from '$lib/prisma';
import fs from 'fs/promises';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	add: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const price = data.get('price');
		const description = data.get('description');
		const images = data.getAll('images');

		//let imageBytes = await Promise.all(data.getAll("images").map((file) => (file as File).arrayBuffer()));
		//console.log(imageBytes);
		if (
			typeof name === 'string' &&
			typeof description === 'string' &&
			typeof price === 'string' &&
			images &&
			images.length > 0
		) {
			const item = await prisma.item.create({
				data: {
					name,
					price,
					description
				}
			});
			const itemId = item.id;

			for (const image of images) {
				console.log(image);
				if (image instanceof Blob) {
					const arrayBuffer = await image.arrayBuffer();
					const buffer = Buffer.from(arrayBuffer);
					const item_image = await prisma.image.create({
						data: {
							name: image.name,
							data: buffer,
							itemId,
							type: image.type
						}
					});
				}
				//imageData = await Promise.all(
				//	image.map(async (file) => {
				//		if (file instanceof File) {
				//			return await file.arrayBuffer();
				//		}
				//		return null; // Handle non-File objects if necessary
				//	})
				//);
				//console.log(imageData);
				//writeFileSync(`images/${image.name}`, Buffer.from(await image.arrayBuffer()))
				//const imageData = await fs.readFile(image);
				//const item_image = await prisma.image.create({
				//	data: {
				//		itemId,
				//		imageName: image.name,
				//		data: image.data
				//	}
				//
				//})
			}
		}
	}
};
