<template>
  <main>
    <Navbar />
    <section class="page-content">
      <Searchbar />

      <section class="trending">
        <header>Trending</header>
        <div class="trending-container">
          <TrendingItem />
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style scoped>
main {
  position: relative;
  display: grid;
  grid-template-columns: 8% 92%;
}
.page-content {
  border: 1px solid red;
  padding-top: 25px;
}
</style>
