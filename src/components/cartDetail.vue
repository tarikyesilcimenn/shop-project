<template>
  <div class="container">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Category</th>
          <th scope="col">Product Image</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart[0]" :key="item">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.category }}</td>
          <td><img id="littleImg" :src="item.image" ></td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}$</td>
          <td><div class="btn btn-danger" @click="removeFromCart(item)">Remove</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cart: [JSON.parse(localStorage.getItem("Sepet"))],
    };
  },
  computed: {
    ...mapGetters({
      getCart: "getCart",
    }),
  },
  methods: {
    removeFromCart(product){
      let newCart=this.cart[0];
      let index=newCart.indexOf(product);
      newCart.splice(index,1);
      
      localStorage.setItem("Sepet",JSON.stringify(newCart));
      let clear=JSON.parse(localStorage.getItem("Sepet"));
      console.log( clear);
      if(clear.length===0){
        localStorage.clear();
      }
      }
  },
  created(){
    
  }
  
};
</script>
<style>
#littleImg{
  width: 50px;
  height: 50px;
}
</style>
