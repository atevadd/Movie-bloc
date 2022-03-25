<template>
  <div class="recommended-item">
    <div class="movie-image">
      <img
        src="https://images.pexels.com/photos/1383834/pexels-photo-1383834.jpeg?auto=compress&cs=tinysrgb&w=260&h=750&dpr=1"
        alt="recommended movie image"
      />
    </div>
    <div class="movie-details">
      <p class="movie-info">
        <span>2019</span><span class="dot">&middot;</span
        ><span class="inline-flex"><i class="ri-film-fill"></i> Movie</span>
        <span class="dot">&middot;</span>
        <span>PG</span>
      </p>
    </div>
    <h1 class="movie-title">Beyond Earth</h1>

    <button type="button" class="bookmark-btn">
      <i class="ri-bookmark-line"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "RecommendedItem",
};
</script>

<style scoped>
.recommended-item {
  position: relative;
  width: 100%;
}

.movie-image {
  position: relative;
  height: 200px;
}

.movie-image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
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
.bookmark-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 3;
}
.bookmark-btn:active {
  background-color: rgba(0, 0, 0, 0.8);
}

.bookmark-btn i {
  color: #f8fcfe;
}
</style>
