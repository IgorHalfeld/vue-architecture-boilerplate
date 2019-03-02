<template>
  <div class="app">
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
%max-size { width: 100%; height: 100%; }

* { margin: 0; padding: 0; box-sizing: border-box }
html, body {
  @extend %max-size;
  font-family: Arial, Helvetica, sans-serif;
}
.app {
  @extend %max-size;
}
</style>
