import api from "../../../services/api";

const state={
    users:[]
};
const getters={
    getUsers(state){
        return state.users;
    }
};
const mutations={
    SET_USERS(state,item){
        return (state.users=item)
    }
};
const actions={
    async usersFetch({commit}){
        api.get("users").then((res)=>{
            commit("SET_USERS",res.data);
        })
    },
    
};
export default {
    namespace:true,
    state,
    getters,
    mutations,
    actions,
};
