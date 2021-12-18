import api from "../../../services/api";
const state = {
  product: [],
  cart: [],
  category:[]
  
};

const getters = {
  getProduct(state) {
    return state.product;
  },
  getCart(state) {
    return state.cart;
    
    
  },
  getCategory(state){
      return state.category;
  }
};

const mutations = {
  SET_PRODUCT(state, item) {
    return(state.product=item)
  },
  
  
  addToCart(state, product) {
    state.cart.push(product);
    console.log("sepette " + state.cart.length + " ürün var");
    console.log(state.cart);
    localStorage.setItem("Sepet",JSON.stringify(state.cart));
  },
};

const actions = {
  async productFetch({ commit }) {
    api.get("products").then((res) => {
      commit("SET_PRODUCT", res.data);
      
    });
    
  },
  async productCategory({commit},payload){
    api.get(`products/category/${payload}`).then((res)=>{
      commit("SET_PRODUCT",res.data);
    })
  }
};

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions,
};
