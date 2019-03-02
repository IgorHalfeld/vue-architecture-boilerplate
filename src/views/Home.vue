<template>
  <div class="home">
    <Banner />
  </div>
</template>

<script>
import Banner from '@/components/Banner';

export default {
  name: 'Home',
  components: { Banner },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
