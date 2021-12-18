<template>
  <nav class="navbar navbar-expand-lg navbar-light" >
    <a class="navbar-brand" href="http://localhost:8080/">
      <img id="img" src="./logo.png"
    /> </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse d-flex justify-content-end"
      id="navbarNavDropdown"
    >
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Your-Cart-{{ this.getCart().length }}
          </a>
          <div id="dropdown" class="dropdown-menu mr-5" aria-labelledby="navbarDropdownMenuLink">
            <ul>
              <li v-for="item in getCart()" :key="item">
                <a id="cartList" class="dropdown-item" href="#">{{ item.title }}</a>
              </li>
              <a href="http://localhost:8080/cart"
                >GO TO CART
                <router-link to="http://localhost:8080/cart"></router-link>
              </a>
            </ul>
          </div>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Login</a>
        </li>
        
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import logo from "./logo.png";
export default {
  data() {
    return {
      logo: logo,
    };
  },

  methods: {
    ...mapActions({
      addToCart: "addToCart",
    }),
    ...mapState({
      cart: () => {
        state.cart;
      },
    }),
    ...mapGetters({
      getCart: "getCart",
    }),
  },
};
</script>
<style>
#img{
  margin-left: 20px;
  width: 130px;
  height:90px;
}
#cartList{
  
    overflow: hidden; /* taşanları gizle */
    white-space: nowrap; /* alt satıra hiç inme */
    text-overflow: ellipsis; /* eğer uzunsa üç nokta koy */
}
#dropdown{
  width:200px; 
   word-break: break-word;
   

}
</style>
