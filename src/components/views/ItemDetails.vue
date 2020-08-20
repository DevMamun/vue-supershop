<template>
  <div>
    <div v-if="!loading" class="card mb-3">
      <div class="card-body d-flex">
        <img class="w-200 mr-4" :src="item.photo" alt="" />
        <div class="right flex-1">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            <b>${{ item.price }}</b>
          </p>
          <p class="card-text">{{ item.description }}</p>
          <a href="#" @click.prevent="addCartItem(item)" class="btn btn-primary"
            >+ Add</a
          >
        </div>
      </div>
    </div>
    <h1 v-else>Loading...</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: true,
      item: null
    };
  },
  methods: {
    fatchInventory() {
      let self = this;
      axios
        .get("http://localhost:3000/item/" + this.$route.params.id)
        .then(res => {
          self.item = res.data;
          self.loading = false;
        });
    }
  },
  created() {
    this.fatchInventory();
  }
};
</script>

<style>
.flex-1{
  flex: 1;
}
.w-200{
  width: 200px;
}
</style>
