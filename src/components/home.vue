<template>
     <div  class="row">
      <div class="col-1">
        <categoryList/>
      </div>
      <div class="col-10">
        <productList />
      </div>
      </div>
</template>
<script>
import categoryList from "./categoryList.vue";
import productList from "./productList.vue";
export default {
    components:{
        categoryList,
        productList
    }
}
</script>
<style >
.row{
  margin-right: 0;
}
</style>