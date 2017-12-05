<template>
	<div>
		<mt-header title="药品统计" fixed @click='returns'>
			<router-link to="/me" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="content">
			<div class="item">
				<div class="items">
					<p class="f-left"></p>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			returns() {
				window.history.go(-1);
			}
		}
	}
</script>

<style scoped lang='less'>
.content{
	margin-top: 3.5rem;
	border-top: 1.8rem solid #f5f4f9;
	border-bottom: 8rem solid #f5f4f9;
}
.item{
	width: 100%;
	border-top:1px solid #e1e1e1;
	padding: 0.5rem 0;
}
</style>