<template lang="html">
  <section class="auth">
    <MyAuth></MyAuth>
    <ActionSheet></ActionSheet>
    <list></list>
    <cell></cell>
    <MyButton></MyButton>
  </section>
</template>

<script>
import list from 'components/list.vue';
import cell from 'components/cell.vue';
import MyButton from 'components/my-button.vue';
import ActionSheet from 'components/action-sheet.vue';
import MyAuth from '../views/my-auth.vue';
export default {
  data() {
    return {
    };
  },
  components: {
     list,cell,MyButton,MyAuth,ActionSheet
  }
};



</script>

