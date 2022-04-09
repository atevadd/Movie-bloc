<template>
  <div class="recommended-item">
    <div class="movie-image">
      <img
        :src="'http://image.tmdb.org/t/p/original' + movie.backdrop_path"
        :alt="movie.title + 'image poster'"
      />
    </div>
    <div class="movie-details">
      <p class="movie-info">
        <span v-if="movie.release_date">{{ transformedDate }}</span>
        <span v-else>{{ seriesDate }}</span>
        <span class="dot">&middot;</span
        ><span class="inline-flex"><i class="ri-film-fill"></i> Movie</span>
        <span class="dot" v-if="!movie.adult">&middot;</span>
        <span v-if="!movie.adult">PG</span>
        <span v-else>18+</span>
      </p>
    </div>
    <h1 class="movie-title" v-if="movie.title">{{ movie.title }}</h1>
    <h1 class="movie-title" v-else>{{ movie.name }}</h1>

    <BookmarkBtn @bookmark-movie="bookmarks" />
  </div>
</template>

<script>
export default {
  name: "RecommendedItem",
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
    data() {
      return {
        checked: false,
      };
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
    seriesDate() {
      return this.movie.first_air_date.match(/[0-9][0-9][0-9][0-9]/)[0];
    },
  },
};
</script>

<style scoped>
.recommended-item {
  position: relative;
  width: 100%;
}

.movie-image {
  position: relative;
  height: 150px;
}

.movie-image img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
span {
  vertical-align: middle;
  margin-right: 5px;
  color: #f8fcfe91;
  font-size: 0.78rem;
  font-weight: 300;
  z-index: 2;
  position: relative;
}
.movie-title {
  color: #f8fcfe;
  font-weight: 500;
  font-size: 0.9rem;
  /* letter-spacing: 1px; */
  /* margin-top: 5px; */
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

@media screen and (max-width: 450px) {
  .movie-image {
    height: 120px;
  }
}
</style>
