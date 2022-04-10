<template>
  <main>
    <Navbar />
    <section class="page-content">
      <!-- tvseriesed movies -->
      <section class="bookmark-container">
        <header class="bookmark-header">Tv Series</header>

        <div class="recommended-container bookmark">
          <MovieCard
            v-for="(i, index) in tvSeries.length"
            :key="index"
            :movie="tvSeries[index]"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import apiKey from "~/assets/js/key";

export default {
  name: "Tvseries",
  data() {
    return {
      tvSeries: [],
    };
  },
  methods: {
    getTvSeries() {
      this.$axios
        .get(`/tv/popular?api_key=${apiKey}`)
        .then((res) => {
          this.$store.commit("loadTVSeries", res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  head: {
    title: "Movie bloc - Tv Series",
  },
  mounted() {
    this.getTvSeries();
    this.tvSeries = this.$store.getters.getTvSeries;
  },
};
</script>

<style scoped>
.recommended-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px 30px;
}
.bookmark-header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fcfe;
  margin: 30px 0 25px;
}
/* .bookmark {
  border: 1px solid red;
} */
@media screen and (max-width: 450px) {
  .empty-state {
    width: 90%;
    min-height: 89vh;
  }
  .empty-state img {
    width: 150px;
    height: 150px;
  }
  .empty-state h1 {
    font-size: 1.4rem;
    text-align: center;
  }
  .recommended-container {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 20px;
  }
  .bookmark-header {
    padding-left: 10px;
  }
}
@media screen and (min-width: 451px) and (max-width: 900px) {
  .empty-state {
    width: 90%;
    min-height: 89vh;
  }
  .empty-state img {
    width: 150px;
    height: 150px;
  }
  .empty-state h1 {
    font-size: 1.4rem;
    text-align: center;
  }
  .recommended-container {
    width: 95%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 30px;
  }
}
</style>
