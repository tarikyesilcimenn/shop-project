<template>
  <div class="row mt-5">
    <div>
      <ul class="list-group">
        <li id="li"
          @click="selectCategory(item)"
          class="list-group-item"
          v-for="item,index in categories[0]"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import api from "../../services/api";
export default {
  data() {
    return {
      categories: [],
    };
  },
  computed:{
    ...mapGetters({
      getProduct:"getProduct"
    })
  },

  methods: {
    ...mapMutations({
      setProduct : "SET_PRODUCT"
    }),
    selectCategory(item) {
     
     this.productCategory(item);
      
    },

    getCategories() {
      api.get("products/categories").then((response) => {
        this.categories.push(response.data);
        this.categories[0].map((item) => {
          console.log(item);
        });
      });
    },
 
    ...mapActions({
      productFetch: "productFetch",
      categoryFetch: "categoryFetch",
      productCategory:"productCategory"
    }),
    ...mapState({
      product: () => {
        state.product;
      },
    }),
  },

  created() {
    this.getCategories();
  },
  computed: {
    ...mapGetters({
      getProduct: "getProduct",
    }),
  },
};
</script>
<style >
#li{
  width: 150px;
  
  margin-bottom:10px ;
  
  background-color:#43cd80;
  transition: 500ms;
}
#li:hover{
  transition-property: background-color;
  transition-duration: 500ms;
  transform:scale(1.3);
  position: relative;
  margin-left: 20px;
}
</style>
