export const state = () => ({
  trendingMovies: [],
  recommendedMovies: [],
  bookmarked: [],
});

// Store mutations
export const mutations = {
  loadTrending(state, movies) {
    state.trendingMovies = movies;
  },
  loadRecommended(state, movies) {
    state.recommendedMovies = movies;
  },
  initBookmark(state) {
    let bookmarkMovies = localStorage.getItem("MB-bookmarks");

    if (bookmarkMovies == null) {
      localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarked));
    } else {
      this.bookmarkedMovies = JSON.parse(localStorage.getItem("MB-bookmarks"));
    }
  },
  addToBookmarked(state, movieId) {
    state.bookmarked.push(movieId);

    // persisting to local storage
    localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarked));
  },
  removeFromBookmarked(state, movieId) {
    const pos = state.bookmarked.indexOf(movieId);
    state.bookmarked.splice(pos, 1);

    // Persisting to local storage
    localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarked));
  },
  toggleBookmark(state, movieId) {
    if (!state.bookmarked.includes(movieId)) {
      state.bookmarked.push(movieId);

      // Persisting to local storage
      localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarked));
    } else {
      const pos = state.bookmarked.indexOf(movieId);
      state.bookmarked.splice(pos, 1);

      // persisting to local storage
      localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarked));
    }
  },
};

export const getters = {
  printBookmark(state) {
    return state.bookmarked;
  },
  getTrending(state) {
    return state.trendingMovies;
  },
  getRecommended(state) {
    return state.recommendedMovies;
  },
};
