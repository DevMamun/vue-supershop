<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <navbar></navbar>
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
          <cart></cart>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import data from './data'

export default {
  components : {
    Navbar,
    Cart
  }
}
</script>

<style>

</style>
