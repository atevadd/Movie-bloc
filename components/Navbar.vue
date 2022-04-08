<template>
  <header>
    <nav id="sidebar">
      <nuxt-link to="/" class="brand-logo"
        ><i class="ri-clapperboard-fill"></i
      ></nuxt-link>

      <ul>
        <li>
          <nuxt-link to="/"><i class="ri-layout-grid-fill"></i></nuxt-link>
        </li>
        <li>
          <nuxt-link to="#"><i class="ri-film-fill"></i></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tv-series"><i class="ri-tv-fill"></i></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/bookmark"><i class="ri-bookmark-fill"></i></nuxt-link>
        </li>
      </ul>

      <div class="user-icon">
        <img
          src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User icon"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
header {
  padding: 15px 20px 20px;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav {
  position: relative;
  /* width: 5%; */
  width: 100%;
  height: 100vh;
  max-height: 95vh;
  background-color: #161d2f;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding: 15px 0;
  border-radius: 15px;
}

nav .brand-logo {
  color: #ff4245;
  font-size: 1.5rem;
}

nav ul {
  margin-top: 35px;
  list-style-type: none;
}

nav ul li {
  margin-bottom: 15px;
}
nav ul li a {
  font-size: 1.1rem;
  color: #586791;
}

nav ul li a:hover {
  color: #f8fcfe;
}

nav ul li a.nuxt-link-exact-active {
  color: #f8fcfe;
}

nav .user-icon {
  margin-top: auto;
}

nav .user-icon img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #fff;
}

@media screen and (max-width: 450px) {
  header {
    padding: 0;
    position: sticky;
    top: 0;
  }

  nav {
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    border-radius: 0;
    padding: 0 15px;
  }
  nav ul {
    margin-top: 0;
    list-style-type: none;
    display: flex;
  }

  nav ul li {
    margin: 0 15px;
  }
  nav ul li a {
    font-size: 1.1rem;
    color: #586791;
  }

  nav ul li a:hover {
    color: #f8fcfe;
  }

  nav ul li a.active {
    color: #f8fcfe;
  }

  nav .user-icon {
    margin-top: 0;
  }

  nav .user-icon img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
}

@media screen and (min-width: 451px) and (max-width: 900px) {
  header {
    padding: 0;
    position: sticky;
    top: 0;
  }

  nav {
    width: 100%;
    height: 70px;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    border-radius: 0;
    padding: 0 15px;
  }
  nav ul {
    margin-top: 0;
    list-style-type: none;
    display: flex;
  }

  nav ul li {
    margin: 0 15px;
  }
  nav ul li a {
    font-size: 1.1rem;
    color: #586791;
  }

  nav ul li a:hover {
    color: #f8fcfe;
  }

  nav ul li a.active {
    color: #f8fcfe;
  }

  nav .user-icon {
    margin-top: 0;
  }

  nav .user-icon img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
}
</style>
