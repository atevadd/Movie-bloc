export const state = () => ({
  trendingMovies: [],
  recommendedMovies: [],
  bookmarked: [],
  bookmarkedId: [],
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
    let bookmarkMoviesId = localStorage.getItem("MB-bookmarks");
    // let bookmarked = localStorage.getItem("bookmarkMovies");

    if (bookmarkMoviesId == null) {
      localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarkedId));
      localStorage.setItem("bookmarkMovies", JSON.stringify(state.bookmarked));
    } else {
      state.bookmarkedId = JSON.parse(localStorage.getItem("MB-bookmarks"));
      state.bookmarked = JSON.parse(localStorage.getItem("bookmarkMovies"));
    }
  },
  addToBookmarked(state, movieId, movie) {
    state.bookmarked.push(movieId);

    // persisting to local storage
    localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarkedId));
  },
  removeFromBookmarked(state, movieId, movie) {
    const pos = state.bookmarked.indexOf(movieId);
    state.bookmarked.splice(pos, 1);

    // Persisting to local storage
    localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarkedId));
  },
  toggleBookmark(state, payload) {
    if (!state.bookmarkedId.includes(payload.id)) {
      state.bookmarkedId.push(payload.id);
      state.bookmarked.push(payload);

      // Persisting to local storage
      localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarkedId));
      localStorage.setItem("bookmarkMovies", JSON.stringify(state.bookmarked));
    } else {
      const pos = state.bookmarkedId.indexOf(payload.id);
      const moviePos = state.bookmarked.indexOf(payload);
      state.bookmarkedId.splice(pos, 1);
      state.bookmarked.splice(moviePos, 1);

      // persisting to local storage
      localStorage.setItem("MB-bookmarks", JSON.stringify(state.bookmarkedId));
      localStorage.setItem("bookmarkMovies", JSON.stringify(state.bookmarked));
    }
  },
};

export const getters = {
  getBookmark(state) {
    return state.bookmarked;
  },
  getTrending(state) {
    return state.trendingMovies;
  },
  getRecommended(state) {
    return state.recommendedMovies;
  },
};
