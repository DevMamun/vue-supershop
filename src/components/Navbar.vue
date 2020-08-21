<template>
 <div class="bg-dark">
    <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <router-link :to="{ name: 'HomePage' }" class="navbar-brand" href="#"
            >SuperStore</router-link
          >
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form @submit.prevent="" class="form-inline my-2 my-lg-0 ml-auto" >
              <input
                @keyup="search($event.target.value)"
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    search(value) {
      if(value){
        this.$router.push({ name : 'HomePage'});
      }
      let self = this

      setTimeout( function() {
        axios.get("http://localhost:3000/search/" + value).then(res => {
          self.$store.commit('setInventory', res.data);
        });
      }, 1);

    }
  }
};
</script>

<style></style>
