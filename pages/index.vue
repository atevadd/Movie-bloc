<template>
  <main>
    <Navbar />
    <section class="page-content">
      <Searchbar @search-text="searchMovie" />

      <!-- Search result area -->
      <div v-if="searchText">
        <section class="recommended">
          <header>
            Found {{ searchedMoviesResult.length }} results for '{{
              searchText
            }}'
          </header>
          <div class="recommended-container">
            <MovieCard
              v-for="(i, index) in searchedMoviesResult.length"
              :key="index"
              :movie="searchedMoviesResult[index]"
            />
          </div>
        </section>
      </div>

      <!-- Main content area -->
      <div v-else>
        <!-- Trending section -->
        <section class="trending">
          <header>Trending</header>

          <div v-if="$fetchState.pending">
            <Loader />
          </div>
          <div v-else-if="$fetchState.error">An error occured</div>
          <div class="trending-container" v-else>
            <TrendingItem v-for="i in 10" :key="i" :movie="trendingMovies[i]" />
          </div>
        </section>

        <!-- Recommended section  -->
        <section class="recommended">
          <header>Recommended for you</header>
          <div v-if="$fetchState.pending">
            <Loader />
          </div>
          <div v-else-if="$fetchState.error">An error occured</div>
          <div class="recommended-container" v-else>
            <MovieCard
              v-for="(i, index) in recommendedMovies.length"
              :key="index"
              :movie="recommendedMovies[index]"
            />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script>
import apiKey from "~/assets/js/key";

export default {
  name: "IndexPage",
  data() {
    return {
      trendingMovies: [],
      recommendedMovies: [],
      bookmarkedMovies: [],
      searchText: "",
      searchedMoviesResult: [],
    };
  },
  methods: {
    searchMovie(text) {
      this.searchedMoviesResult = [];
      this.searchText = text;

      const pattern = new RegExp(this.searchText, "ig");

      this.$store.getters.getRecommended.forEach((movie) => {
        if (movie.title.match(pattern)) {
          this.searchedMoviesResult.push(movie);
        }
      });
      console.log(this.searchedMoviesResult);
    },
    getTrendingMovies() {
      this.$axios
        .get(`/trending/movie/week?api_key=${apiKey}`)
        .then((res) => {
          this.$store.commit("loadTrending", res.data.results);
          this.trendingMovies = this.$store.getters.getTrending;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getRecommendedMovies() {
      this.$axios
        .get(`/movie/now_playing?api_key=${apiKey}`)
        .then((res) => {
          this.$store.commit("loadRecommended", res.data.results);
          this.recommendedMovies = this.$store.getters.getRecommended;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getTvSeries() {
      this.$axios
        .get(`/tv/popular?api_key=${apiKey}`)
        .then((res) => {
          this.$store.commit("loadTVSeries", res.data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getMovies() {
      this.$axios
        .get(`/movie/popular?api_key=${apiKey}`)
        .then((res) => {
          this.$store.commit("loadMovies", res.data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  async fetch() {
    await this.getRecommendedMovies();
    await this.getTrendingMovies();
    await this.getTvSeries();
    await this.getMovies();
  },
  created() {
    this.$store.commit("initBookmark");
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
};
</script>

<style>
main {
  position: relative;
  display: grid;
  grid-template-columns: 8% 92%;
  align-items: flex-start;
  /* min-height: 100vh; */
}

/* Mobile breakpoint */
@media screen and (max-width: 450px) {
  main {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 100%));
    align-items: baseline;
  }
  .page-content {
    width: 100%;
  }
}

/* Tablet breakpoint */
@media screen and (min-width: 451px) and (max-width: 900px) {
  main {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 100%));
    align-items: baseline;
  }
  .page-content {
    width: 100%;
    /* margin-left: 20px; */
  }
}
</style>

<style scoped>
.output {
  width: max-content;
}
.page-content {
  /* border: 1px solid red; */
  padding-top: 25px;
}
.trending > header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fcfe;
  margin: 12px 0 10px;
}
.trending-container {
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: scroll;
  gap: 30px;
}
.trending-container::-webkit-scrollbar {
  display: none;
}

.recommended {
  margin-top: 30px;
  margin-bottom: 30px;
}
.recommended-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px 30px;
  padding-right: 25px;
}

.recommended > header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fcfe;
  margin: 5px 0 15px;
}

/* Mobile breakpoint */
@media screen and (max-width: 450px) {
  main {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 100%));
    align-items: baseline;
  }
  .page-content {
    width: 100%;
    /* margin-left: 20px; */
  }
  .trending > header {
    padding-left: 10px;
  }
  .trending-container {
    padding-left: 10px;
    width: 100%;
  }
  .recommended {
    width: 100%;
    margin: 20px auto;
  }
  .recommended-container {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 15px;
    padding-right: 0;
  }
  .recommended > header {
    font-size: 1.3rem;
    font-weight: 600;
    color: #f8fcfe;
    margin: 10px 0 25px;
    margin-left: 10px;
  }
}

/* Tablet breakpoint */
@media screen and (min-width: 451px) and (max-width: 900px) {
  main {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 100%));
    align-items: baseline;
  }
  .page-content {
    width: 100%;
    /* margin-left: 20px; */
  }
  .trending > header {
    padding-left: 20px;
  }
  .trending-container {
    padding-left: 20px;
    width: 100%;
  }
  .recommended {
    width: 90%;
    margin: 20px auto;
  }
  .recommended-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px 15px;
    padding-right: 0;
  }
  .recommended > header {
    font-size: 1.3rem;
    font-weight: 600;
    color: #f8fcfe;
    margin: 15px 0 25px;
  }
}
</style>
