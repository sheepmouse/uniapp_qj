<template>
	<view>
		<view class="home">
			首页
		</view>
		<!-- 自定义tabBar -->
			<!-- <u-tabbar v-model="current" :list="$store.state.tabBarList" :mid-button="true"></u-tabbar> -->
			<u-button type="primary">主要按钮</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current:''
			}
		},
		methods: {
			
		},
		mounted() {
			var a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none';
		},
		created() {
			console.log(this.$u.config.v);
		}
	}
</script>

<style>

</style>
