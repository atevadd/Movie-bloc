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
        <header class="bookmark-header">Bookmarked</header>

        <div class="recommended-container">
          <RecommendedItem
            v-for="i in bookmarkedMovies.length"
            :key="i"
            :movie="bookmarkedMovies[i]"
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
  mounted() {
    this.bookmarkedMovies = localStorage.getItem("bookmarkMovies");
    console.log(this.bookmarkedMovies);
  },
  watch: {
    bookmarkedMovies() {
      this.bookmarkedMovies = this.$store.getters.printBookmark;
    },
  },
  head: {
    title: "Movie-bloc - Bookmarked movies - The best entertainment app",
  },
};
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
  padding-right: 25px;
}
.bookmark-header {
  font-size: 1.3rem;
  font-weight: 600;
  color: #f8fcfe;
  margin: 30px 0 25px;
}

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
  }
  .recommended-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 30px;
    padding-right: 25px;
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
  }
  .recommended-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 30px;
    padding-right: 25px;
  }
}
</style>
