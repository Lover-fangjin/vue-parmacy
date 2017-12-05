<template>
	<div>
		<mt-header title="进药申请" fixed @click='returns'>
			<router-link to="/me" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="content">
			<img src="./img/pic.png" alt="" />
			<p> 邀请码：2345</p>
			<div class="tuijian">
				<p><i class="iconfont icon-tongji"></i>推荐地址</p>
			</div>
			<div class="wangzhi">http://123.56.102.141/hlc/webapp/index</div>
			<a href="#" class="tuijian1">推荐</a>
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
		margin-top: 3rem;
		padding-top: 3rem;
		img{
			margin-left: auto;
			margin-right: auto;
			width:15rem;
			height: 15rem;
			display: block;
		}
		p{
			text-align: center;	
			margin-top: 2rem;
			font-size: 2rem;
			color: #767577;

		}
		.tuijian{
			margin-top: 5rem;
			width: 90%;
			margin: 0 auto;
		}
		.tuijian p{
			text-align: left;
			font-size:1.2rem;
			i{
				margin-right: 1rem;
			}
		}
		.wangzhi{
			width: 90%;
			padding: 1rem 0 1rem 1rem;
			margin: 0 auto;
			background:#eeeeee;
			color: #118df0;
			margin-top: 2rem;
		}
		.tuijian1{
			width: 90%;
			padding: 1rem 0 1rem 1rem;
			margin: 0 auto;
			background:#f08c34;
			color: #fff;
			margin-top: 2rem;
			display: block;
			text-align: center;
			border-radius:0.5rem;
		}
	}
</style>