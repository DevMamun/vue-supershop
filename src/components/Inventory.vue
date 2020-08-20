<template>
    <div class="row">
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
</template>

<script>
export default {
  props : ['items'],
    methods : {
    addCartItem(item){
      this.$emit('newItemAdded', item);
    }
  }
}

</script>

<style>

</style>
