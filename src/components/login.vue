<template>
  <div>
    <div class="column">
      <div class="d-flex flex-column  align-items-center">
        <div id="box" class="row shadow p-3 mb-5 bg-white rounded">
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
<style>
#btn {
  width: 189px;
  border-radius: 20px;
}
#box {
    
   
}
h5{
    display: flex;
    justify-content: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
