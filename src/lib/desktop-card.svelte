<script>
	// @ts-nocheck

	export let id = 0;
	const href = `/${id}`;
	export let imageData = '';
	export let name = 'Loading...';
	export let price = 'price';
	export let description = 'Lorem ipsum dolor sit amet, consectetur';
	export let data;
</script>

<div class="card">
	<a {href}>
		<img src={`data:image/jpeg;base64,${data}`} alt={name} />
		<div class="container">
			<span
				><h4>{name}</h4>
				{price} Kč</span
			>
			<p>{description}</p>
		</div>
	</a>
</div>

<style>
	a {
		text-decoration: none;
	}
	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.25rem 1.96rem;
		width: 30rem;
		height: 20rem;
		border-radius: 0.9375rem;
		border: 1px solid rgba(0, 0, 0, 0.3);
		background: #fff;
	}
	.card img {
		width: 26rem;
		height: 10rem;
		border-radius: 0.5rem;
	}
	.container span h4 {
		color: #f45d3c;
		font-family: Open Sans;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		margin: 0;
	}
	.container span {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		color: #4bb75a;
		font-family: Open Sans;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.container p {
		width: 26rem;
		height: 3.75rem;
		color: #676767;
		font-family: Open Sans;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 300;
		line-height: normal;
	}
</style>
