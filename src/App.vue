<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <navbar @search="search"></navbar>
    <br>
    <div class="container">
      <div class="row">
      <div class="col-md-9">
        <div class="main-content">
          <router-view></router-view>
          <!-- <inventory @newItemAdded="addCartItem" :items="items" ></inventory> -->
        </div>
      </div>
      <div class="col-md-3">
        <div class="aside">
          <cart @removeProduct="removeProduct" :items="cart"></cart>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
// import Inventory from './components/Inventory'
import data from './data'

export default {
  components : {
    Navbar,
    Cart
  },
  data(){
    return{
      items : [],
      cart : [],
    }
  },
  mounted(){
    this.items = data;
  },
  methods : {
    search(keyward){
        this.items = data.filter(item => {
          return  item.title.toLowerCase().indexOf(keyward.toLowerCase()) !== -1
        });
    },
    addCartItem(item){
      this.cart.push(item);
    },
    removeProduct(id){
      this.cart.splice(id, 1);
    }
  }
}
</script>

<style>

</style>
