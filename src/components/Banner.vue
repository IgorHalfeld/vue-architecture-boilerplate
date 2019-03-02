<template>
  <div class="noalvo-banner noalvo-bg">
    <h1 class="text-white text-center">
      Vue Architecture Boilerplate
    </h1>
    <h3 class="text-white text-center">
      Vue.js architecture for front-end projects at NOALVO
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style lang="scss" scoped>
.noalvo-banner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.noalvo-bg {
  background-image: url(../assets/banner.jpg);
  background-size: cover;
  background-position: center right;
  position: relative;

  > h1 {
    z-index: 999;
    font-size: 50px;
    color: white;
  }

  > h3 {
    z-index: 999;
    font-size: 30px;
    color: white;
  }

  > h3 {
    font-weight: 400;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(110, 66, 193, 0.6);
  }
}
</style>
