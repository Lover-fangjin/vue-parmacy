<template>
	<div>
		<!--头部-->
		<mt-header fixed title="我的关注" @click='returns'>
			<router-link to="/me" slot="left">
				<mt-button icon="back">微信</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="content">
			<div class="item b">
				<div class="items clearfix">
					<img src="./img/g.jpg" alt="" class="f-left pic"/>
					<div class="item-text f-right">
						<h2>老吃太饱真会撑出十种甲方姜</h2>
						<span class="f-right">2015.05.01</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="items clearfix">
					<img src="./img/g2.png" alt="" class="f-left pic"/>
					<div class="item-text f-right">
						<h2>老吃太饱真会撑出十种甲方姜</h2>
						<span class="f-right">2015.05.01</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="items clearfix">
					<img src="./img/g3.png" alt="" class="f-left pic"/>
					<div class="item-text f-right">
						<h2>老吃太饱真会撑出十种甲方姜</h2>
						<span class="f-right">2015.05.01</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="items clearfix">
					<img src="./img/g1.png" alt="" class="f-left pic"/>
					<div class="item-text f-right">
						<h2>老吃太饱真会撑出十种甲方姜</h2>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="items clearfix">
					<img src="./img/g2.png" alt="" class="f-left pic"/>
					<div class="item-text f-right">
						<h2>老吃太饱真会撑出十种甲方姜</h2>
						<span class="f-right">2015.05.01</span>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="items clearfix">
					<img src="./img/g3.png" alt="" class="f-left pic"/>
					<div class="item-text f-right">
						<h2>老吃太饱真会撑出十种甲方姜</h2>
						<span class="f-right">2015.05.01</span>
					</div>
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
		height: 100%;
		/*background: #f5f4f9;*/
		margin-top: 3.3rem;
		.item{
			width: 100%;
			padding:0.8rem 0 0.5rem;
			border-top:1.5rem solid #f5f4f9;
			/*margin-top: 1.8rem;*/
			background: #fff;
			.items{
				width: 90%;
				margin: 0 auto;
				.pic{
					width: 7rem;
					display: inline-block;
					height: 5rem;
					margin-right: 1rem;
					margin-top: 0.3rem;
				}
				.item-text {
					/*margin-right: 1.7rem;*/
					margin-top: 1rem;
					margin-left: 12%;
					h2{
						font-size:1.2rem;
						color: #333333;
						margin-top: 0.4rem;
						margin-bottom: 0;
						text-align: center;
						width: 100%;
					}
					span{
						font-size:1rem;
						color: #999999;
						margin-top: 1rem;

					}
				}
		}
	}
	}
</style>