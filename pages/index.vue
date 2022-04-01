<template>
  <main>
    <Navbar />
    <section class="page-content">
      <Searchbar />

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

      <section class="recommended">
        <header>Recommended for you</header>
        <div v-if="$fetchState.pending">
          <Loader />
        </div>
        <div v-else-if="$fetchState.error">An error occured</div>
        <div class="recommended-container" v-else>
          <RecommendedItem
            v-for="i in recommendedMovies.length"
            :key="i"
            :movie="recommendedMovies[i]"
          />
        </div>
      </section>
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
    };
  },
  methods: {
    getTrendingMovies() {
      this.$axios
        .get(`/trending/movie/week?api_key=${apiKey}`)
        .then((res) => {
          this.trendingMovies = res.data.results;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getRecommendedMovies() {
      this.$axios
        .get(`/movie/now_playing?api_key=${apiKey}`)
        .then((res) => {
          this.recommendedMovies = res.data.results;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getMovieId(id) {
      console.log(id);
    },
  },
  async fetch() {
    await this.getRecommendedMovies();
    await this.getTrendingMovies();
  },
  mounted() {
    // console.log(this.$store.getters.printBookmark);
    this.$store.commit("initBookmark");
  },
};
</script>

<style scoped>
main {
  position: relative;
  display: grid;
  grid-template-columns: 8% 92%;
  align-items: flex-start;
}
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
    font-weight: 300;
    color: #f8fcfe;
    margin: 10px 0 25px;
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
    font-weight: 300;
    color: #f8fcfe;
    margin: 10px 0 25px;
  }
}
</style>
