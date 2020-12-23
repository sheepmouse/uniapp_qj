<template>
	<view>
		<view class="product">
			产品界面
		</view>
		<!-- 自定义tabBar -->
			<u-tabbar v-model="current" :list="$store.state.userInfo.tabbarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
