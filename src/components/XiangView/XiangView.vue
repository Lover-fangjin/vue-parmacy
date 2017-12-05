<template>
	<div>
		<!--头部-->
		<mt-header fixed title="分类" @click='returns'>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">最新资讯</mt-tab-item>
				<mt-tab-item id="2">健康咨询</mt-tab-item>
				<mt-tab-item id="3">最新专题</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1" v-show='true'>
					<div class="item">
						<div class="items clearfix">
							<h2>乙肝的共识和误区(上)</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<a href="" class="f-right">专题</a>
								</div>
								
							</div>
						</div>
					</div>
					
					<div class="item">
						<div class="items clearfix">
							<h2>乙肝的共识和误区(上)</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<a href="" class="f-right">专题</a>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>乙肝的共识和误区(上)</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<a href="" id="green" class="f-right">推荐</a>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>乙肝的共识和误区(上)</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<a href="" class="f-right">专题</a>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>乙肝的共识和误区(上)</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<a href="" class="f-right">专题</a>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>乙肝的共识和误区(上)</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<a href="" class="f-right">专题</a>
								</div>
								
							</div>
						</div>
					</div>
					
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					<div class="item">
						<div class="items clearfix">
							<h2>【专题】 男性&女性</h2>
							<div class="items-yigan clearfix">
								<div class="pic f-left">
									<img src="./img/pic.png" alt="" />
								</div>
								<div class="item-text">
									<p>两性健康误区多，搜索引擎太坑爹，电
									视广告瞎忽悠，信谁？</p>
									<span href="" class="f-right">2014-08-13</span>
								</div>
								
							</div>
						</div>
					</div>
					
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
					<div class="conta">
						
							<img src="./img/picc.jpg" alt="" />
						
					</div>
				</mt-tab-container-item>
			</mt-tab-container>

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
				selected:'1'
			}
		},
		watch: {
			$route(a) {
				console.log(a)
//				var path = a.path;
//				if(path == '/home') {
//					this.title = '首页';
//					this.bool = false;
//				}
		}
	}
		}
</script>

<style scoped lang='less'>
	.content{
		height: 100%;
		margin-top: 3rem;
		.item{
			width: 100%;
			background: #ecf1f0;
			padding:0.5rem 0 0;
			.items{
				width: 90%;
				border-bottom: 1px solid #d4dadc;
				margin:0 auto;
				padding: 0.6rem 0;
				h2{
					font-size: 1.6rem;
					color: #1a1d1d;
					margin: 0;
					margin-bottom: 0.5rem;
				}
			
				.items-yigan{
					.pic{
						width: 7rem;
						height: 5rem;
						margin-right: 0.7rem;
						img{
							width: 100%;
							height: 100%;
						}
					}
					#green{
						background: #6dba42;
					}
					.item-text{
						padding-top: 0.5rem;
						p{
							font-size: 1.3rem;
							color: #626368;
							margin: 0;
							line-height: 1.8rem;
						}
						a{
							padding: 0.3rem 0.7rem;
							background: #f08c34;
							color: #fff;
							margin-top: 0.4rem;
							text-decoration: none;
							border-radius: 0.5rem;
						}
						span{
							font-size: 1.3rem;
							color: #8c8c8c;
							margin-top: 0;
						}
					}
					
				}
				
			}
		}
		.conta{
			width: 100%;
			height: 100%;
			background:#f5f5f5;
			padding-bottom: 5rem;
			padding-top: 8rem;
			img{
				width: 80%;
				height: 60%;
				margin-left: auto;
				margin-right: auto;
				display: block;
			}
		}
		
	}
</style>