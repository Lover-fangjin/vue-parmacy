<template>
	<div class="container">
		<!--头部-->
		<mt-header title="医生档案" @click='returns'>
			<router-link to="/me" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<div class="content">
			<!--1-->
			<div class="list-item ">
				<div class="list-item1 clearfix">
					<span class="f-left">头像</span>
					<div class="f-right tu">
						<img src="./img/ren.png" alt="" class="f-left"/>
						<router-link to='' class="iconfont icon-gengduo1 f-left" tag='i'></router-link>
					</div>
				</div>
				
			</div>
			
			<!--1-->
			<div class="list-item1 clearfix">
				<span class="f-left">姓名</span>
				<div class="f-right tu">
					<span class="f-left">张大大</span>
					<i class="iconfont icon-gengduo1 f-left"></i>
				</div>
			</div>
			<!--1-->
			<div class="list-item1 clearfix none">
				<span class="f-left">昵称</span>
				<div class="f-right tu">
					<span class="f-left">静居雅士</span>
					<i class="iconfont icon-gengduo1 f-left"></i>
				</div>
			</div>
			
			
			<div class="list-item">
				<div class="list-item1 clearfix">
					<span class="f-left">性别</span>
					<div class="f-right tu">
						<span class="f-left">男</span>
						<i class="iconfont icon-gengduo1 f-left"></i>
					</div>
				</div>
				<!--1-->
				<div class="list-item1 clearfix none">
					<span class="f-left">出生年月</span>
					<div class="f-right tu">
						<span class="f-left">1988.8.28</span>
						<i class="iconfont icon-gengduo1 f-left"></i>
					</div>
				</div>
			</div>
		</div>
		
		<div class="di">
			<a href="">保存</a>
		</div>
	</div>
</template>

<script>
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

<style scoped lang="less">

	.content{
		.list-item{
			width: 100%;
			border-top: 2rem solid #f5f4f9;
		}
		.list-item1{
			border-bottom: 1px solid #e5e5e5;
			width: 90%;
			margin: 0 auto;
			padding: 0.4rem 0;
		}
		span{
			font-size: 1.8rem;
			color: #333;
			line-height: 3.5rem;
		}
		.none{
			border-bottom: 0;
		}
		.tu{
			img{
				width: 3rem;
				height: 3rem;
				margin: 0.5rem;
			}
			i{
				line-height: 3.7rem;
			}
			span{
				font-size: 1.8rem;
				color: ;
				margin-right: 0.5rem;
			}
		}
		
	}
		.di{	
			overflow: hidden;
			background: #f5f4f9;
			padding: 1rem 0 7rem 0;
			a{
				display: block;
				width: 80%;
				padding: 0.8rem;
				height: 2rem;
				margin: 0.7rem auto;
				background: #f08c34;
				text-align: center;
				line-height: 2rem;
				border-radius: 0.5rem;
				text-decoration: none;
				color: #fff;
				letter-spacing: 0.5rem;
			}
		}
</style>