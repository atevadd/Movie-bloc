<template>
  <div class="searchbar">
    <input
      type="text"
      id="search"
      placeholder="Search for movies or TV series"
      autocomplete="off"
      inputmode="text"
      v-model="searchText"
      @keyup="getSearchText"
    />
    <i class="ri-search-line" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    getSearchText() {
      this.$emit("search-text", this.searchText);
    },
  },
};
</script>

<style scoped>
.searchbar {
  position: relative;
  width: 40%;
}
.searchbar input {
  font-family: inherit;
  font-size: 0.9rem;
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 0 0 30px;
  background: #10141f;
  color: #f8fcfe;
  border: none;
  outline: none;
  font-weight: 500;
}
.searchbar i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color: #fff;
}

@media screen and (max-width: 450px) {
  .searchbar {
    margin-left: 10px;
    width: 90%;
  }
}
@media screen and (min-width: 451px) and (max-width: 900px) {
  .searchbar {
    margin-left: 10px;
    width: 90%;
  }
}
</style>
