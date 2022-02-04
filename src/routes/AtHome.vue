<template>
  <HomeHeadline />
  <HomeSearch />
  <MovieList />
</template>

<script>
import HomeHeadline from '~/components/HomeHeadline.vue';
import HomeSearch from '~/components/HomeSearch.vue';
import MovieList from '~/components/MovieList.vue';

export default {
  components: {
    HomeHeadline,
    HomeSearch,
    MovieList
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
};
</script>