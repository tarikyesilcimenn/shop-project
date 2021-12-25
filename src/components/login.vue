<template>
  <div>
    <div class="column">
      <div class="d-flex flex-column  align-items-center">
        <div id="box" class="row shadow-lg p-3 mb-5 bg-white rounded">
          <div class="container">
            <h3>Email</h3>

            <input type="text" />
            <h3>Password</h3>
            <input type="text" />
            <br />
            <hr />
            <button id="btn" class="btn btn-success">Sign In</button>
            <br />
            <h5>OR</h5>
            <button id="btn" class="btn btn-success">Sign Up</button>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  computed:{
  ...mapGetters({
      getUsers:"getUsers"
    }),
    
  },
  methods:{
    ...mapActions({
      usersFetch:"usersFetch"
    }),
    
  },
  created(){
    this.usersFetch();
    this.getUsers;
  }
}
</script>
<style>
#btn {
  width: 189px;
  border-radius: 20px;
}
h5{
    display: flex;
    justify-content: center;
    font-family: 'Times New Roman', Times, ;
    margin-top: 5px;
}
h3{
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
}
</style>
