<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped>
.loader-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  width: 30px;
  height: 30px;
  border: 5px solid #fff;
  border-radius: 50%;
  border-left-color: transparent;
  border-top-color: transparent;
  animation: spin 0.7s ease infinite;
}

@keyframes spin {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
