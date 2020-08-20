<template>
  <div id="app">
    <navbar></navbar>
    <br>
    <div class="container">
      <div class="row">
      <div class="col-md-9">
        <div class="main-content">
          <inventory @newItemAdded="addCartItem" :items="items" ></inventory>
        </div>
      </div>
      <div class="col-md-3">
        <div class="aside">
          <cart :items="cart"></cart>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import data from './data'

export default {
  components : {
    Navbar,
    Cart,
    Inventory
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
    addCartItem(item){
      this.cart.push(item);
    }
  }
}
</script>

<style>

</style>
