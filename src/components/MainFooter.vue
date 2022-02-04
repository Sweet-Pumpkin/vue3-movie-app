<template>
  <footer>
    <MainLogo />
    <a
      href="https://github.com/Sweet-Pumpkin" 
      target="_blank">
      &copy;{{ new Date().getFullYear() }} SWEET PUMPKIN
    </a>
  </footer>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'
export default {
  components: {
    MainLogo
  }
};
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
  a {
    display: block;
    margin-top: -5px;
    text-decoration: none;
    font-size: 12px;
    color: black;
  }
}
</style>