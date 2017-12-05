<template>
  <div id="app">
  	
    <router-view></router-view>
    
    <FooterView></FooterView>
  </div>
</template>

<script>
import  FooterView from './common/FooterView';

export default{
  components:{
  	FooterView
  }
}

</script>

<style>
#app{tab-size:   inherit;
	overflow: hidden;
}
</style>
