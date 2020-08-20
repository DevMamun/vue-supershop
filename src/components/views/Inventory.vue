<template>
    <div v-if="!loading" class="row">
        <div class="col-md-4" v-for="(item, id ) in items" :key="id">
          <div class="card mb-3">
            <!-- <img :src="item.photo" class="card-img-top" > -->
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">${{ item.price }}</p>
              <a href="#" @click.prevent="addCartItem(item)" class="btn btn-primary">+ Add</a>
            </div>
          </div>
        </div>
    </div>
    <h1 v-else>Loading...</h1>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      loading : true,
      items : []
    }
  },
  methods : {
    addCartItem(item){
      this.$emit('newItemAdded', item);
    },
    fatchInventory(){
      let self = this
      axios.get('http://localhost:3000/items')
      .then(res => {
        setTimeout( function(){
           self.items = res.data
            self.loading = false
        }, 2000);

      });
    }
  },
  created(){
    this.fatchInventory();
  }
}

</script>

<style>

</style>
