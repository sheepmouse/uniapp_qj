<template>
	<view>
		<view class="isvip">
			会员
		</view>
		<!-- 自定义tabBar -->
			<u-tabbar v-model="current" :list="$store.state.userInfo.tabbarlist" :mid-button="true"></u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">

</style>
