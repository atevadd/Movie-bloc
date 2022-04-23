<template>
  <main>
    <header class="movie-header">
      <section class="banner">
        <img
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg"
          alt=""
        />
      </section>
      <div class="movie-image">
        <img
          src="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg"
          alt=""
        />

        <div class="movie-details">
          <h1 class="movie-name">The Batman</h1>
          <div class="movie-facts">
            <span class="date">2022/2/3</span>
            <span class="dot">&middot;</span>
            <span class="genre">Action</span>
          </div>
        </div>
      </div>

      <section class="overview">
        <p class="tagline">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          aspernatur.
        </p>

        <article>
          <header>Overview</header>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            ipsam natus fugiat quo nemo aliquid eaque mollitia odit, pariatur
            odio!
          </p>
        </article>
      </section>

      <button @click="goBack" class="back-btn">
        <i class="ri-arrow-left-line"></i>
      </button>
    </header>
  </main>
</template>

<script>
import apiKey from "~/assets/js/key";

export default {
  name: "Movie",
  data() {
    return {
      routeParam: "",
      movieDetails: [],
    };
  },
  methods: {
    getmovieInfo() {
      this.$axios
        .get(`/movie/${this.$route.params.id}?api_key=${apiKey}`)
        .then((res) => {
          console.log(res.data);
          this.movieDetails = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    goBack() {
      history.back();
    },
  },
  mounted() {
    this.getmovieInfo();
    this.routeParam = this.$route.params.id;

    console.log(this.routeParam);
  },
};
</script>

<style scoped>
main {
  width: 100vw;
  min-height: 100vh;
}
.movie-header {
  position: relative;
  width: 100vw;
  height: 60vh;
  max-height: 60vh;
  /* border: 2px solid red; */
}

.banner {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 5;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(8px);
}

.movie-image {
  position: absolute;
  width: max-content;
  bottom: -125px;
  left: 50px;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  border: 2px solid red;
}

.movie-image img {
  width: 250px;
  height: 250px;
  /* border-radius: 50%; */
  border: 4px solid #fff;
}

.movie-image .movie-details {
  margin-left: 15px;
}

.movie-image .movie-details h1 {
  color: #f8fcfe;
  margin-bottom: 8px;
}
.movie-image .movie-details p {
  color: #fff;
  width: 40%;
  word-break: break-all;
  line-height: 1.4;
  font-weight: 300;
}

.back-btn {
  position: absolute;
  top: 20px;
  left: 50px;
  z-index: 10;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
}

.back-btn i {
  font-size: 2.5rem;
  color: #f8fcfe;
}
</style>
