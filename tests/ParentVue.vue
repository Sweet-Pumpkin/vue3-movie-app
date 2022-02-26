<template>
  <h1>Parent</h1>
  <Child msg="park" />
</template>

<script>
import Child from './ChildVue.vue'
export default {
  components: {
    Child
  }
}
</script>