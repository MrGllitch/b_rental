<script>
	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<section><a href="/">Tomáto Půjčovna</a></section>
<slot />

<style>
	section {
		width: 100vw;
		height: 3.75rem;
		background: #222;
	}
	section a {
		text-decoration: none;
		color: #fff;
		font-family: Leckerli One;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>
