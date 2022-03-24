<template>
  <div class="trending-item">
    <img
      src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
    <!-- <img
      src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=360&h=300&dpr=1"
      alt=""
    /> -->
    <div class="trending-item-content">
      <p>
        <span>2019</span><span class="dot">&middot;</span
        ><span class="inline-flex"><i class="ri-film-fill"></i> Movie</span>
        <span class="dot">&middot;</span>
        <span>PG</span>
      </p>
      <h1 class="movie-title">Beyond Earth</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendingItem",
};
</script>

<style scoped>
.trending-item {
  position: relative;
  width: max-content;
}
.trending-item::after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4) ; */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1));
  z-index: 1;
  border-radius: 10px;
}
.trending-item > img {
  display: block;
  position: relative;
  width: 380px;
  height: 200px;
  border-radius: 10px;
  z-index: 0;
}

.trending-item-content {
  position: absolute;
  bottom: 30px;
  left: 20px;
}
span {
  vertical-align: middle;
  margin-right: 5px;
  color: #f8fcfe;
  font-size: 0.8rem;
  font-weight: 300;
  z-index: 2;
  position: relative;
}
.dot {
  font-size: 28px;
  line-height: 0;
  vertical-align: middle;
}
.movie-title {
  color: #f8fcfe;
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 5px;
  z-index: 2;
  position: relative;
}
</style>
