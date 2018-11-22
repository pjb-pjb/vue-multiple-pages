<template>
	<div>
		page1
		<br />		
		<router-link to="/page1/test">test</router-link>
		<br />
		<router-link to="/page1/test1">test1</router-link>
		<br />
		<a href="/page2/test/2?a=3">page1</a>
		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style>
</style>