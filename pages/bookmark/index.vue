<template>
  <main>
    <Navbar />
    <section class="page-content">
      <!-- Empty state -->
      <!-- This shows when the bookmark page is empty -->
      <div class="empty-state" v-if="bookmarkedMovies.length == 0">
        <img src="~/assets/images/empty.svg" alt="" />
        <h1>You have no bookmarked movie</h1>
      </div>

      <!-- Bookmarked movies -->
      <section class="bookmark-container" v-else>
        <header class="bookmark-header">Bookmarked Movies</header>

        <div class="recommended-container bookmark">
          <MovieCard
            v-for="(i, index) in bookmarkedMovies.length"
            :key="index"
            :movie="bookmarkedMovies[index]"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "Bookmark",
  data() {
    return {
      bookmarkedMovies: [],
    };
  },
  created() {
    this.bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkMovies"));
    console.log(this.bookmarkedMovies);
  },
  watch: {
    bookmarkedMovies() {
      this.bookmarkedMovies = this.$store.getters.getBookmark;
    },
  },
  head: {
    title: "Movie-bloc - Bookmarked movies"
  }
}
</script>

<style scoped>
.empty-state {
  width: 50%;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.empty-state img {
  width: 200px;
  height: 200px;
}
.empty-state h1 {
  color: #f8fcfe;
  margin-top: 10px;
  font-weight: 300;
  font-size: 1.8rem;
}
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
