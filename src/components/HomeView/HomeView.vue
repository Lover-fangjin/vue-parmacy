<template>

	<div class="home1">
		<!--头部-->
		<mt-header title="销售记录" fixed>
			<mt-button slot="right" class='iconfont icon-icon1460189708222' @click='adds'>
			</mt-button>
		</mt-header>
		<transition enter-active-class='animated tada' leave-active-class='animated bounceOutRight'>
			<div class="mask" id="mask" v-if="add">
			<div class="mask-item">
				<router-link to='/gouwu' class=" a" tag='p'><i class="iconfont icon-home"></i>扫码购物</router-link>
				<router-link to='/shezhi' class=" a" tag='p'><i class="iconfont icon-home"></i>输入医生邀请码</router-link>
			</div>
		</div>
		</transition>

		<!--轮播-->
		<mt-swipe :auto="4000">
			<mt-swipe-item>
				<img src="./img/banner.png" alt="" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="./img/banner1.png" alt="" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="./img/banner.png" alt="" />
			</mt-swipe-item>
		</mt-swipe>

		<!--切换-->
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">本周</mt-tab-item>
			<mt-tab-item id="2">历史</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected" >

			<mt-tab-container-item id="1" v-show='true'>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/red.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周日 <span>2015.6.23</span></p>
							<div class="long1" id="red"></div>
						</div>
						<div class="he f-right">
							<p>30盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周二<span>2015.6.22</span></p>
							<div class="long2"></div>
						</div>
						<div class="he f-right">
							<p>65盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周四 <span>2.15.6.21</span></p>
							<div class="long3"></div>
						</div>
						<div class="he f-right">
							<p>58盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周三<span>2.15.6.23</span></p>
							<div class="long4"></div>
						</div>
						<div class="he f-right">
							<p>87盒<i>></i></p>

						</div>
					</div>
				</div>

			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周一<span>2015.6.23</span></p>
							<div class="long4"></div>
						</div>
						<div class="he f-right">
							<p>40盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周二<span>2015.6.22</span></p>
							<div class="long1"></div>
						</div>
						<div class="he f-right">
							<p>60盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周三 <span>2.15.6.21</span></p>
							<div class="long2"></div>
						</div>
						<div class="he f-right">
							<p>128盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周一<span>2.15.6.23</span></p>
							<div class="long1"></div>
						</div>
						<div class="he f-right">
							<p>87盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周三<span>2.15.6.23</span></p>
							<div class="long3"></div>
						</div>
						<div class="he f-right">
							<p>87盒<i>></i></p>

						</div>
					</div>
				</div>
				<!--1-->
				<div class="items">
					<div class="items-a clearfix">
						<img src="./img/more.png" alt="" class="tu f-left"/>
						<div class="xingqi f-left">
							<p>周日<span>2.15.6.27</span></p>
							<div class="long2"></div>
						</div>
						<div class="he f-right">
							<p>105盒<i>></i></p>

						</div>
					</div>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	export default {
		methods: {
/*			tan() {
//				alert(1)
				mask.style.display='block';
				let timer=null;
				timer=setInterval( ()=>{
					mask.style.display='none'
					timer=null;
				},10000)
			},*/
			adds(){
				if(!this.add){
					this.add=true
				}else{
					this.add=false
				}
			}
		},
		data(){
			return{
				selected:'1',
				add:false
			}

		}
	}
</script>

<style scoped>
	.mask{
		position: absolute;
		top: 4rem;
		left: 64%;
		z-index: 10;
		padding: 0.5rem 0.5rem;
		background: #fff;
		border-radius: 0.5rem;
	}
	.mask-item{
			width: 100%;
			.a{
				padding: 1rem 0;
				border-bottom: 1px solid #e6e6e6;
				font-size: 0.8rem;
				margin-left: 0.5rem;
			}
		}
	.mint-swipe {
		overflow: hidden;
		position: relative;
		height: 13rem;
		width: 100%;
	}

	.mint-swipe img {
		width: 100%;
		height: 100%;
	}
	p{
		margin: 0;
	}
	.mint-navbar {
    	border-bottom: 10px solid #f5f5f5;
	}
	.home1{
		margin-top: 3.2rem;
	}
	.items{
		/*width: 90%;*/
		margin: 0 auto;
	}
	.items-a{
		padding: 1rem;
		border-bottom: 1px solid #e1e1e1;
	}
	.tu{
		width: 4rem;
		height: 4rem;
	}
	.xingqi{
		margin-left:1rem;
		margin-top:0.5rem;
		 p{
			font-size:2rem;
			color: #333333;
		}
		span{
			font-size:.8rem;
			color: #666666;
			margin-left: 0.3rem;
		}

	}
	.xingqi div{
			height: 1rem;
			border-radius: 3rem;
			background: #cdcdcd;
			margin-top:0.5rem;
		}
	.he p{
		margin: 0;
		font-size: 2rem;
		color: #666;
		margin-top:0.8rem;

	}
	.he p i{
		color: #cacaca;
		margin-left: 0.5rem;
	}
	.long1{
		width: 12rem;

	}
	#red{
		background: #ff6b3d;
	}
	.long2{
		width: 6rem;
	}
	.long3{
		width: 8rem;
	}
	.long4{
		width: 10rem;
	}
</style>
