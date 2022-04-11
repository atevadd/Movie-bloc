<template>
  <button
    type="button"
    class="bookmark-btn"
    @click="[makeBookmarkActive(), bookmarkMovie()]"
  >
    <i class="ri-bookmark-fill" v-if="checked"></i>
    <i class="ri-bookmark-line" v-else></i>
  </button>
</template>

<script>
export default {
  name: "BookmarkBtn",
  props: {
    isBookmarked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    makeBookmarkActive() {
      this.checked = !this.checked;
    },
    bookmarkMovie() {
      this.$emit("bookmark-movie");
    },
  },
  mounted() {
    this.checked = this.isBookmarked;
  },
};
</script>

<style scoped>
.bookmark-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 3;
}
.bookmark-btn:active {
  background-color: rgba(0, 0, 0, 0.8);
}

.bookmark-btn i {
  color: #f8fcfe;
}
</style>
