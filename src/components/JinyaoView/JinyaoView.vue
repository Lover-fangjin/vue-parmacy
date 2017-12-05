<template>
	<div>
		<mt-header title="进药申请" fixed @click='returns'>
			<router-link to="/me" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="content">
			<div class="item"> <!--百分百的盒子-->
				<div class="items clearfix">
					<img src="./img/pic.jpg" alt="" class="f-left"/>
					<div class="item-right f-left">
						<h2>白云山伤风感冒胶囊 </h2>
						<p class="tim">购买时间：2015-12-15<span class="span">两个疗程</span></p>
						<div class="p1 clearfix">
							<p class="f-left">药品疗程</p>
							<div class="num f-left">
								<button @click='jian'>-</button>
								<input type="text" v-model="num"/>
								<button @click='add'>+</button>
							</div>
						</div>
					</div>
				</div>
				<div class="zong cl clearfix">
					<p class="f-left" v-model='num'>总价：<span class=" zong-p">￥{{num*800}}</span></p>
					<a href="#" class="f-right que">确认</a>
				</div>
			</div>
			
			<div class="item"> <!--百分百的盒子-->
				<div class="items clearfix">
					<div class="pict">
						<img src="./img/pic.jpg" alt="" class="f-left"/>
					</div>
					<div class="item-right f-left">
						<h2>白云山伤风感冒胶囊 </h2>
						<p class="tim">购买时间：2015-12-15<span class="span">两个疗程</span></p>
						<div class="p1 clearfix">
							<p class="f-left">药品疗程</p>
							<div class="num f-left">
								<button @click='jian'>-</button>
								<input type="text" v-model="num"/>
								<button @click='add'>+</button>
							</div>
						</div>
					</div>
				</div>
				<div class="zong cl clearfix">
					<p class="f-left" v-model='num'>总价：<span class=" zong-p">￥{{num*800}}</span></p>
					<a href="#" class="f-right que">确认</a>
				</div>
			</div>
			
			<div class="item"> <!--百分百的盒子-->
				<div class="items clearfix">
					<img src="./img/pic.jpg" alt="" class="f-left"/>
					<div class="item-right f-left">
						<h2>白云山伤风感冒胶囊 </h2>
						<p class="tim">购买时间：2015-12-15<span class="span">两个疗程</span></p>
						<div class="p1 clearfix">
							<p class="f-left">药品疗程</p>
							<div class="num f-left">
								<button @click='jian'>-</button>
								<input type="text" v-model="num"/>
								<button @click='add'>+</button>
							</div>
						</div>
					</div>
				</div>
				<div class="zong cl clearfix">
					<p class="f-left" v-model='num'>总价：<span class=" zong-p">￥{{num*800}}</span></p>
					<a href="#" class="f-right que">确认</a>
				</div>
			</div>
			<div class="item"> <!--百分百的盒子-->
				<div class="items clearfix">
					<img src="./img/pic.jpg" alt="" class="f-left"/>
					<div class="item-right f-left">
						<h2>白云山伤风感冒胶囊 </h2>
						<p class="tim">购买时间:2015-12-15<span class="span">两个疗程</span></p>
						<div class="p1 clearfix">
							<p class="f-left">药品疗程</p>
							<div class="num f-left">
								<button @click='jian'>-</button>
								<input type="text" v-model="num"/>
								<button @click='add'>+</button>
							</div>
						</div>
					</div>
				</div>
				<div class="zong cl clearfix">
					<p class="f-left" v-model='num'>总价：<span class=" zong-p">￥{{num*800}}</span></p>
					<a href="#" class="f-right que">确认</a>
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
	margin-top:3.5rem;
}
.pict{
	/*width: 20%;*/
}
	.item{
		width: 100%;
		border-top:0.8rem solid #f5f4f9;
		
		.items{
			width: 90%;
			margin: 0 auto;
			padding:1.5rem 0;
			border-bottom:1px solid #e1e1e1;
			img{
				width: 22%;
				height: 38%;
			}
		}

		.num{
			padding:1rem 0;
			margin-left: 1rem;
			input{
				width: 2rem;
				outline: none;
				border:none;
				text-align: center;
			}
		}
		.item-right{
			width: 78%;
			h2{
				font-size:1.5rem;
				margin: 0;
				color: #333333;
				margin-left: 1rem;
			}
			p{
				font-size: 1rem;
				color: #626368;
				margin: 0;
				margin-left:1rem;
				margin-top: 1rem;
				.span{
					margin-left:1rem;
					display: inline-block;
				}
			}
		}
		.zong{
			width: 90%;
			margin: 0 auto;
			font-size: 1.5rem;
			padding: 1rem 0;
			.zong-p{
				color: #ff6b3d;
			}
			.que{
				padding: 0.8rem 1.5rem;
				background: #f08c34;
				color: #fff;
				margin-top: 0.5rem;
				border-radius: 1rem;
			}
		}
	}
	
</style>