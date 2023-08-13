<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form method="post" action="?/add" enctype="multipart/form-data">
	<label
		>Nazev
		<input name="name" type="text" />
	</label>
	<label>
		Obrazky
		<input name="images" type="file" accept="image/*" />
	</label>
	<label>
		Cena
		<input name="price" />
	</label>
	<label>
		Popis
		<textarea name="description" cols="30" rows="10" />
	</label>
	<button type="submit">submit</button>
</form>
