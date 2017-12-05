<template>
	<footer>
		<mt-tabbar fixed v-model="selected">
			<mt-tab-item id="首页">
				<router-link to='/home'>
					<i class="iconfont icon-shouye"></i>
					<p>首页</p>
				</router-link>
			</mt-tab-item>
			<mt-tab-item id="分类">
				<router-link to='/classs'>
					<i class="iconfont icon-leimupinleifenleileibie"></i>
					<p>分类</p>
				</router-link>
			</mt-tab-item>
			<mt-tab-item id="我的">
				<router-link to='/me'>
					<i class="iconfont icon-home"></i>
					<p>我的</p>
				</router-link>
				
			</mt-tab-item>
		</mt-tabbar>

	</footer>
</template>

<script>
export default{
	data(){
		return {
			selected:"首页"
		}
	}
}
</script>

<style>
	.mint-tabbar{
		background: white;
		color: #2ca7d8;
	}
	.mint-tabbar>.mint-tab-item.is-selected{
		background: white;
	}
	footer{
		margin-top: 4rem;
	}
	p{
		margin: 0;
		margin-top:0.5rem;
		color: #000;
	}
	
	a{
		color:#999;
	}
	a:hover{
		color: #2ca7d8;
		background: #fff;
	}
</style>