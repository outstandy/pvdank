<template>
  <div class="wrapper container">
    <h2>Lists!</h2>
    <GridList :data="data" listName='Bites' listType="restaurant" />
    <GridList :data="data" listName='Drinks' listType="bar"/>
  </div>
</template>

<script>
  import json from '~/assets/data.json';
  import GridList from './GridList.vue';

  export default {
    components: {
      GridList,
    },
    data() {
      return {
        data: json,
      }
    },
  }
</script>

<style lang="sass">
  h2
    grid-column: span 12

  .list-nav
    grid-column: span 2

  .page-enter-active
    transition: opacity 0.25s ease-out

  .page-leave-active
    transition: opacity 0.25s ease-in

  .page-enter,
  .page-leave-to
    opacity: 0

</style>
