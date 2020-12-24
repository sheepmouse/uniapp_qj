<template>
	<view>
		<view class="home">
			<view class="main">
				<image class="index_banner_2" src="/static/images/index/index_card.png" mode=""></image>
				<view class="index_title">
					<view class="row_1">通用额度可用(元)</view>
					<view class="row_2">40000</view>
					<view class="row_3">立即申请</view>
					<view class="row_4">
						<view class="col_1"><u-icon label-size="25" label-color="#999" label="日息低至0.02%" size="36" name="rmb-circle"></u-icon></view>
						<view class="col_2"><u-icon label-size="25" label-color="#999" label="最长可借36期" size="36" name="coupon"></u-icon></view>
					</view>
				</view>
			</view>
			<view class="index_list">
				<!-- 卡片 -->
				<view class="list_card" v-for="(item, index) in index_list" :key="index">
					<u-row>
					<u-image height="44upx" width="44upx" :src="item.file"></u-image>
					<view class="product_title">{{item.productName}}</view>
					<u-tag v-for="(item1,index1) in item.labelList" :color="index1 === 0 ? '#77A1D6' : '#FFA100'" :bg-color="index1 ===0 ? '#EBF4FF' : '#FFFCDC' " mode="light" :type="index1 === 0 ? 'primary' : 'warning'" shape="circle"  size="mini" :text="item1" :key1="index1"/>
					</u-row>
					<u-row>
						<view class="">
							额度范围(元)
						</view>
						<view class="">
							月利率{{item.monthRate/10000}}%
						</view>
					</u-row>
					
				</view>
				<u-loadmore :status="status" />
			</view>
		</view>
		<!-- 自定义tabBar -->
		<u-tabbar :list="$store.state.tabBarList" @change="changetab"></u-tabbar>
	</view>
</template>

<script>
import { findIndexList } from '../../utils/api.js';
export default {
	data() {
		return {
			index_list: [],
			status: 'loading'
		};
	},
	methods: {
		//请求首页产品列表
		async getIndexlist() {
			this.status = 'loading';
			const data = {
				limit: 7,
				page: 1
			};
			let result = await findIndexList(data);
			this.index_list = result.data.data;
			console.log(this.index_list);
			this.status = 'nomore';
		}
	},
	mounted() {
		this.getIndexlist();
	},
	created() {}
};
</script>

<style lang="scss">
.home {
	.main {
		background: url(/static/images/index/index_banner.png) no-repeat;
		background-size: 100% 100%;
		height: 320upx;
		padding: 10upx 40upx;
		position: relative;
		top: 0;
		left: 0;
		.index_banner_2 {
			width: 100%;
			height: 340upx;
		}
		.index_title {
			text-align: center;
			width: 90%;
			position: absolute;
			top: 0;
			left: 50%;
			margin-left: -45%;
			.row_4 {
				display: flex;
				justify-content: space-around;
			}
			.row_1 {
				font-size: 25upx;
				margin-top: 40upx;
			}
			.row_2 {
				font-size: 60upx;
				margin-top: 10upx;
			}
			.row_3 {
				display: inline-block;
				background: linear-gradient(175deg, #53cac3 0%, #36bab2 100%);
				padding: 8upx 40upx;
				border-radius: 30upx;
				color: #fff;
				font-size: 30upx;
				margin-top: 20upx;
			}
			.row_4 {
				margin-top: 40upx;
				view {
					color: #999;
				}
			}
		}
	}
	.index_list {
		margin-top: 60upx;
		.list_card {
			padding: 10upx 20upx;
			background-color: #fff;
			width: 92%;
			margin: 20upx auto;
			height: 120upx;
			border-radius: 10upx;
			// box-shadow: ;
			.u-mode-light-primary{
				border: none;
			}	.u-mode-light-warning{
				border: none;
			}
			.u-tag{
				margin-left: 10upx;
			}
			.product_title{
				margin-left: 10upx;
				font-weight: bold;
			}
		}
	}
}
</style>
