<template>
  <div class="trending-item">
    <img
      :src="'http://image.tmdb.org/t/p/original' + movie.backdrop_path"
      :alt="movie.title + 'poster image'"
    />
    <div class="trending-item-content">
      <p>
        <span>{{ transformedDate }}</span
        ><span class="dot">&middot;</span
        ><span class="inline-flex"
          ><i class="ri-film-fill"></i> {{ movie.media_type }}</span
        >
        <span class="dot" v-if="movie.adult">&middot;</span>
        <span v-if="!movie.adult">PG</span>
        <span v-else>18+</span>
      </p>
      <h1 class="movie-title">{{ movie.title }}</h1>
    </div>

    <BookmarkBtn @bookmark-movie="bookmarks" />
  </div>
</template>

<script>
export default {
  name: "TrendingItem",
  props: {
    movie: {
      type: Object,
      required: true,
      default() {
        return {
          adult: false,
          backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
          genre_ids: [16, 10751, 35, 14],
          id: 508947,
          original_language: "en",
          original_title: "Turning Red",
          overview:
            "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
          popularity: 6038.256,
          poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
          release_date: "2022-03-01",
          title: "Turning Red",
          video: false,
          vote_average: 7.5,
          vote_count: 1242,
        };
      },
    },
  },
  methods: {
    bookmarks() {
      this.$store.commit("addOrRemoveBoomarkMovie", this.movie);
    },
  },
  computed: {
    transformedDate() {
      return this.movie.release_date.match(/[0-9][0-9][0-9][0-9]/)[0];
    },
  },
};
</script>

<style scoped>
.trending-item {
  position: relative;
  width: max-content;
}
.trending-item:last-child {
  margin-right: 30px;
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
  border-radius: 8px;
}
.trending-item > img {
  display: block;
  position: relative;
  width: 350px;
  height: 180px;
  border-radius: 8px;
  z-index: 0;
}

.trending-item-content {
  position: absolute;
  bottom: 25px;
  left: 20px;
}
span {
  vertical-align: middle;
  margin-right: 5px;
  color: #f8fcfe91;
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

.bookmark-btn {
  position: absolute;
  top: 5px;
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

@media screen and (max-width: 450px) {
  .trending-item > img {
    width: 280px;
    height: 160px;
  }
}
</style>
