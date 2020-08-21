<template>
    <ul class="list-group">
      <li class="list-group-item bg-primary text-white">
        <span class="item-name">
          Name
        </span>
        <span class="item-price float-right">
          Price
        </span>
      </li>
      <hr>
      <li class="list-group-item" v-for="(item, id) in items" :key="id">
        <span class="item-name">
          {{ item.title }}
        </span>
        <span  @click="removeProduct(id)" class="btn btn-sm btn-danger">X</span>
        <span class="item-price float-right">
          ${{ item.price }}
        </span>
      </li>
      <hr>
      <li class="list-group-item  bg-info text-white">
        <span class="item-name">
          Total
        </span>
        <span class="item-price float-right">
          ${{ totalPrice.toFixed(2) }}
        </span>
      </li>
      <hr>
      <button v-if="items.length > 0" @click="checkout" class="btn btn-success btn-block">Checkout</button>
    </ul>
</template>

<script>
export default {
  computed : {
    items(){
      return this.$store.getters.getCart
    },
    totalPrice(){
      var total = 0
      this.items.forEach(item => {
        total += parseFloat(item.price)
      })
      return total
    }
  },
  methods : {
    removeProduct(id){
      this.$store.commit('removeItem', id)
    },
    checkout(){
      if(confirm('Are you sure want to checkout !!!')){
        this.$store.commit('clearCart')
      }
    }
  }

}
</script>

<style>

</style>
