<template>
  <div class="about">
    <div class="photo">
      <img
        src="~/assets/cute-pumpkin.png" 
        alt="pumpkin" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ github }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('about', [
      'name', 'email', 'github', 'phone'
    ])
  }
};
</script>

<style lang="scss" scoped>
.about {
  text-align: center;
  .photo {
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>