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
            <form
              @submit.prevent="search"
              class="form-inline my-2 my-lg-0 ml-auto"
            >
              <input
                v-model="keyword"
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
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
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    search() {
      axios.get("http://localhost:3000/search/" + this.keyword).then(res => {
        console.log(res.data);
      });
      // this.$emit('search', this.keyword)
    }
  }
};
</script>

<style></style>
