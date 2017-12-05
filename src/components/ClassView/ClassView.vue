<template>
	<div>
		<!--头部-->
		<mt-header fixed title="眼科医疗设备进口替代将...">
			<router-link to="/me" slot="left">
				<mt-button icon="back">微信</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<div class="content">
			<h4>眼科医疗设备进口替代将提速,进口化替代步伐正在加快</h4>
			<div class="clearfix t-text">
				<span class="f-left">发布日期：2015-12-21</span>
				<span class="f-right">阅读量：1000</span>
			</div>
			
			<div class="yiyao-text">
				<p>
					医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以及临床眼科等，为眼科医疗设备技术的发展起到重要作用。另外，随着电子产品的普及、老龄化加剧以及青少年近视等，导致相关眼疾患病率呈上升趋势，促使患者对眼科医疗服务的需求逐年增加。我国目前患有视力损害的大约为3亿人，其中有4500万例盲症，视力损害患者较多，约占68%。市场需求不断扩大将带动眼科医疗器械快速发展。
				</p>
				<p  class="p1">
					全球医疗器械市场规模正逐年扩大，眼科器械占比有望快速增长。据欧盟医疗器械委员会的统计显示，全球医疗器械市场销售总额已从2006 年的2900亿美元迅速上升至2014年的5591亿美元，年复合增速达8.82%。目前，美国、日本等国占据了超过80%的全球医疗器械市场。其中，美国是世界上最大的医疗器械生产国和消费国，其消费量占全球市场的40%左右。
				</p>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="less">
	.content{
		width: 90%;
		margin: 4rem auto;
		h4{
			color: #333;
			font-size:2rem;
			margin: 0;
			margin-top: 1rem;
			text-align: justify;
			color: #333;
			line-height: 2.3rem;
		}
		.t-text{
			span{
				color: #999999;
				font-size: 1.6rem;
				margin-top: 1rem;
			}
		}
		.yiyao-text{
			margin-top: 1rem;
			p{
				text-indent: 1.5rem;
				line-height: 2.5rem;
				font-size: 1.7rem;
				color: #444;
				margin-bottom: 0;
			}
			.p1{
				margin-top: 0;
			}

		}
	}
</style>