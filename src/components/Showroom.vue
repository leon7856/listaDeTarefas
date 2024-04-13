<template>
	<div class="card first-card">
		<img :src="`${this.imagePath}`" class="card-img-top" alt="testando 123">
		<div class="card-body">
			<h5 class="card-title">{{ this.title }}</h5>
			<p class="card-text">{{ this.description }}</p>
			<router-link class="d-grid gap-2" :to="`${this.destiny}`">
				<button href="#" class="btn btn-light">{{ this.button }}</button>
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		image: String,
		title: String,
		description: String,
		destiny: String,
		button: String
	},
	data() {
		return {
			imagePath: require('@/assets/' + this.image)
		}
	}
}

</script>
