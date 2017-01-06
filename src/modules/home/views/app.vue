<template lang="html">
  <section class="auth">
    <WpSwipe></WpSwipe>
  </section>
</template>

<script>
  import HomeTest from 'components/home-test.vue';
  import TabContainer from 'components/tab-container.vue';
  import WpSwipe from 'components/wp-swipe.vue'
  export default {
    data() {
      return {};
    },
    components: {
      HomeTest, TabContainer, WpSwipe
    }
  };


</script>

