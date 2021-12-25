<template>
  <div class="container">
    <ul>
      <li
        class="d-flex flex-row flex-wrap justify-content-space-between align-items-center"
      >
        <div class="mt-5" v-for="item in getProduct" :key="item">
          <div id="card" class="card">
            <img
              id="cardImg"
              class="card-img-top"
              :src="item.image"
              alt="Card image cap"
            />
            <div id="cardBody" class="card-body">
              <h5 id="title" class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.description }}
              </p>
              <a id="button" class="btn btn-success" @click="addToCart(item)"
                >Add To Cart</a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      products: [],
    };
  },
  computed: {
    ...mapGetters({
      getProduct: "getProduct",
    }),
  },
  methods: {
    ...mapActions({
      productFetch: "productFetch",
    }),
    ...mapMutations({
      addToCart: "addToCart",
    }),
  },
  created() {
    this.productFetch();
  },
};
</script>
<style>
#card {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-right: 70px;
  margin-bottom: 70px;
  width: 300px;
  height: 600px;
  transition: 1s;
  
}
#card:hover{
    transition-property: background-color;
  transition-duration: 500ms;
  background-color:skyblue ;
  margin-top: -70px;
  transform:scale(1.3);
  background-color:#43cd80;

}
#cardBody{
  width: 300px;

    word-break: break-word;
}
#cardImg {
  width: 300px;
  height: 400px;
}
#button{
  
  border-radius: 70px;
}
#title{
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
  word-break: break-word;
}
.card-text{
      overflow: hidden; /* taşanları gizle */
    white-space: nowrap; /* alt satıra hiç inme */
    text-overflow: ellipsis; /* eğer uzunsa üç nokta koy */
}
</style>
