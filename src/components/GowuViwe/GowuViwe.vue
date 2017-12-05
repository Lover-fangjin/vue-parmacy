<template>
	<div>
		<!--头部-->
		<mt-header title="扫码购物" fixed @click='returns'>
			<router-link to="/" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<div class="content">
			<div class="go-items">
				<div class="g-top clearfix">
					<img src="./img/pic.png" alt="" class="f-left"/>
					<div class="g-text f-left">
						<p><span>范佳盈</span> 副主任医师</p>
						<p>中国人民解放军第四--医院</p>
					</div>
				</div>
			</div>
			<div class="go-items">
				<div class="go-items-class clearfix">
					<div class="f-left first"><p>姓名: <span>陆远飞</span></p></div>
					<div class="f-left"><p>姓别: <span>男</span></p></div>
				</div>
				<div class="go-items-class clearfix">
					<div class="f-left first"><p>姓名: <span>陆远飞</span></p></div>
					<div class="f-left"><p>姓别: <span>男</span></p></div>
				</div>
				<div class="go-items-class f">
					<p>住院时间：2015-01-06  15:22:02</p>
					<p>检查服务号：4389012</p>
				</div>
			</div>
			
			<div class="go-items">
				<mt-swipe :auto="4000">
				  <mt-swipe-item>
				  	<img src="./img/yao.png" alt="" />
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="./img/yao.png" alt="" />
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<img src="./img/yao.png" alt="" />
				  </mt-swipe-item>
				</mt-swipe>
			</div>
			
			<div class="go-items clearfix f-s">
				<div class="go-center">
					<p class="f-left ">风热感冒颗粒</p>
					<p class="f-right">
					<span>￥28.5</span>
					￥25.00
				</p>
				</div>
				
			</div>
			<div class="go-items">
				<h2 class="h2">药品详情</h2>
				<div class="go-text1">
					<p>
						药品名称 :<span>风热感冒颗粒</span>
					</p>
					<p>
						批准文号 :<span>风热感冒颗粒</span>
					</p>
					<p>
						生产企业 :<span>风热感冒颗粒</span>
					</p>
					<p>
						规格 :<span>10g*8袋</span>
					</p>
					<p>
					
							性状:<span>风热感冒颗粒，疏风清热，利咽解毒。用于风热
						感冒，发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
						风热感冒颗粒，疏风清热，利咽解毒。用于风热感冒，
						发热，有汗，鼻塞，头痛，咽痛，咳嗽，多痰。
						</span>
					</p>
				</div>
			</div>
			
			<div class="goumais">
				<p class="goumai">
					<i class="iconfont icon-leimupinleifenleileibie"></i>
					去附近药店购买
				</p>
				<p class="goumai">
					<i class="iconfont icon-leimupinleifenleileibie"></i>
					资讯厂家药剂师购买
				</p>
			</div>
			
			<div class="go-items">
				<div class="yaoping clearfix">
					<p class="f-left">药品疗程</p>
					<div class="f-right num">
						<button @click='jian'>-</button>
						<input type="text" v-model="num"/>
						<button @click='add'>+</button>
					</div>
				</div>
				<div class="yaoping clearfix">
					<p class="f-left zong">
						总价:
						<s v-model="num1">￥{{num*num1}}</s>
					</p>
					<p class="f-left zong">
						折扣价:
						<s v-model='num2'>￥{{num*num2}}</s>
					</p>
					<router-link tag='a' to='/yes' class='yes f-right'>确认购买</router-link>
				</div>
			</div>
			
		</div>
	</div>
	
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		methods: {
			returns() {
				window.history.go(-1);
			},
			add(){
				this.num++;
			},
			jian(){
				this.num--;
				if(this.num==1){
					this.num=1
				}else{
					this.num=1
				}
			}
		},
		data(){
			return {
				num:0,
				num1:800,
				num2:600
			}
		}
		
}
	
</script>

<style scoped lang='less'>
	.content{
		margin-top: 3.5rem;
	}
	.go-items{
		width: 100%;
		border-bottom:0.8rem solid #f5f5f5;
	}
	.go-items h2{
		border-bottom: 1px solid #e1e1e1;
		padding: 0.5rem 0;
		width: 90%;
		margin: 0 auto;
	}
	.g-top{
		width: 90%;
		margin:0 auto;
		padding: 1rem 0;
		
		img{
			width: 5rem;
			height: 5rem;
			margin-right:1rem;
		}
		.g-text{
			p{
				span{
					font-size:1.5rem;
					font-weight: bold;
				}
				color: #626368;
			}
		}
	}
	.go-items-class{
		width: 90%;
		margin: 0 auto;
		padding: 0.7rem 0;
		.first{
			width: 65%;
		}
		p{
			font-size: 1.5rem;	
			color: #333333;
			margin: 0;
		}
		span{
			font-size: 1.5rem;	
			color: #f08c34;
		}
	}
	.f{
		p{
			color: #626368;
			margin-top: 0.5rem;
		}
	}
	.mint-swipe{
		height: 15rem;
		width: 100%;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.go-center{
		width: 90%;
		margin: 0 auto;
		p{
			font-size: 1.8rem;
			span{
				text-decoration: line-through;
				color: #c1c1c1;
			}
		}
	}
	.h2{
		font-size:2rem;
		font-weight:500;
	}
	.go-text1{
		padding: 0 1.5rem;
		p{
			font-size:2rem;
			color: #333333;
			span{
				color: #626368;
				font-size: 1.6rem;
				/*display: inline-block;*/
				margin-left: 1rem;
			}
		}
	}
	.goumais{
		width: 100%;
		/*padding: 0 1rem;*/
	}
	.goumai{
		padding:1rem 1rem;
		border-bottom: 1px solid #e1e1e1;
		font-size: 2rem;
		margin: 0;
		/*border-bottom:0.8rem solid #f5f5f5;*/
		.iconfont{
				color: #ffa94c;
				font-size: 2.4rem;
				margin-right: 0.2rem;
			}	
	}
	.yaoping{
		width: 90%;
		margin: 0 auto;
		padding: 0.5rem 0;
		border-bottom: 1px solid #e1e1e1;
		font-size: 1.8rem;
		.num{
			padding:0.5rem 0;
			input{
				width: 2rem;
				outline: none;
				border:none;
			}
		}
		.zong{
				color: #333333;
				margin-right: 0.5rem;
				font-size: 1.5rem;
				s{
					color: #ff6b3d;
					/*margin-left: 0.2rem;*/
				}
		}
		.yes{
			display: inline-block;
			padding: 0.5rem 1rem;
			background: #f08c34;
			color: #fff;
			margin-top: 0.8rem;
			border-radius: 0.5rem;
			font-size: 1.3rem;
		}
	}
</style>