<template>
  <header>
    <MainLogo />
    <div class="nav nav-pills">
      <div 
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink 
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <div 
      class="user" 
      @click="toAbout">
      <img 
        src="~/assets/cute-pumpkin.png" 
        alt="pumpkin" />
    </div>
  </header>
</template>

<script>
import MainLogo from '~/components/MainLogo'

export default {
  components: {
    MainLogo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt4520988',
          path: /^\/movie/
        },
        {
          name: 'About',
          href: '/About'
        }
      ]
    }
  },
  methods: {
    isMatch(path) {
      if (!path) return false
      console.log(this.$route)
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      console.log('!!!')
      this.$router.push('/about')
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    cursor: pointer;
    transition: .4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      width: 100%;  
    }
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>