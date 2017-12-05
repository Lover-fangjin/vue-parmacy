<template>
	<div>
		<!--头部-->
		<mt-header title="账户设置" @click='returns'>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<div class="item">
				<div class="items clearfix">
					<img src='./img/ren.png' alt="" class="f-left tu1"/>
					<div class="text">
						<span>13666666666</span>
						<p>三聚药业</p>
					</div>
					<img src="./img/er.png" alt="" class="tu2 f-right"/>
				</div>
			</div>
			
			<div class="item1 none">
				<router-link to='/ge' class="list f-right" tag='div'>
					<img src="./img/rs.png" alt="" class="f-left"/>
					<span>个人信息</span>
					<router-link to='/ge' class="iconfont icon-gengduo1 f-right" tag='i'></router-link>
				</router-link>
				<router-link to='/guan' class="list f-right" tag='div'>
					<img src="./img/rs1.png" alt="" class="f-left"/>
					<span>我的关注</span>
					<router-link to='/guan' class="iconfont icon-gengduo1 f-right" tag='i'></router-link>
				</router-link>
				<router-link to='/class' class="list f-right" tag='div'>
					<img src="./img/rs2.png" alt="" class="f-left"/>
					<span>进口设备</span>
					<router-link to='/class' class="iconfont icon-gengduo1 f-right" tag='i'></router-link>
				</router-link>	
			</div>
			
			<div class="item2">
				<router-link to='/jin' class="list f-right" tag='div'>
					<img src="./img/rs.png" alt="" class="f-left"/>
					<span>进药申请</span>
					<router-link to='/jin' class="iconfont icon-gengduo1 f-right" tag='i'></router-link>
				</router-link>
				<router-link to='/shezhi' class="list f-right" tag='div'>
					<img src="./img/rs1.png" alt="" class="f-left"/>
					<span>设置</span>
					<router-link to='/shezhi' class="iconfont icon-gengduo1 f-right" tag='i'></router-link>
				</router-link>

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

	.item{
		background: #fff;
		padding: 1rem 0;
		border-top: 1.8rem solid #f5f4f9;
		border-bottom: 1.8rem solid #f5f4f9;
		.items{
			width: 90%;
			margin: 0 auto;
			position:relative;
			.tu1{
				width: 4rem;
				height: 4rem;
				margin-right: 0.5rem;
			}
		}
		.text{
			font-size:1.5rem;
			span{
				color: #333333;
			}
			p{
				color: #626368;
				margin-top:0.7rem;
				margin-bottom: 0;
			}
			
		}
		.tu2{
				width: 3rem;
				height: 3rem;
				position: absolute;
				top: 0.5rem;
				right: 0;
			}
		
	}
	.none{
			border-top:0;
		}	
	.item1{
		background: #fff;
	}
	.item-n{
		border-top: 1.8rem solid #f5f4f9;
		background: #f5f4f9;
	}
	.list{
		width: 90%;
		border-bottom: 1px solid #e5e5e5;
		padding: 1.2rem 0;
		padding-right: 1rem;
		img{
			width: 2.5rem;
			height: 2.5rem;
		}
		span{
			font-size: 1.4rem;
			color: #646464;
			margin-top: 0.4rem;
			display: inline-block;
			margin-left: 0.5rem;
		}
		i{
			margin-top: 0.5rem;
		}
	}
</style>


