<template>
	<view>
		<view class="myself">
			个人中心
		</view>
		<!-- 自定义tabBar -->
			      <u-tabbar :list="$store.state.tabBarList"></u-tabbar>  
			
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

<style lang="scss">

</style>
