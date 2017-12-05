<template>
	<div>
		<mt-header fixed title="购买成功" @click='returns'>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="content">
			<img src="./img/yes.png" alt="" />
			<p>购买成功</p>
			<a href="#" class="aa">分享</a>
		</div>
	</div>
</template>


<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default {
		methods: {
			returns() {
				window.history.go(-1)
			}
		},
		data(){
			return{
				selected:''
			}
		}
	}
</script>

<style scoped lang='less'>

	.content img{
		width: 8rem;
		height:8rem;
		margin-left:auto;
		margin-right: auto;
		display: block;
		margin-top: 40%;
	}
	p{
		text-align: center;
		color: #646464;
		margin-top: 3rem;
		font-size: 1.8rem;
	}
	.aa{
		display: block;
		background: #f08c34;
		width: 90%;
		padding: 1.2rem 0;
		margin: 2.3rem auto;
		border-radius: 0.5rem;
		color: #fff;
		text-align: center;
	}
</style>