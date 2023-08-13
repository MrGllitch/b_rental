<script>
	import DesktopCard from '$lib/desktop-card.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	//
</script>

<section class="products">
	{#each data.items as item}
		<DesktopCard
			id={item.id}
			name={item.name}
			price={item.price}
			description={item.description}
			data={item.images[0].data}
		/>
	{/each}
</section>

<style>
	.products {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		column-gap: 2rem;
	}
</style>
