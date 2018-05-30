<template>
  <div
    id="restaurant-list"
    class="grid list-grid"
  >
    <h1 class="list-H1">{{ listName }}</h1>
    <item
      v-for="(thing, index) in data"
      v-if="thing.type === listType"
      v-bind="[thing, index]"
      v-bind:key="index"
      v-bind:index="index" />
  </div>
</template>

<script>
import json from '~/assets/data.json';
import item from '~/components/item';

export default {
  name: 'GridList',
  components: { item },
  props: ['data', 'listName', 'listType', 'index'],
};
</script>

<style lang="sass">
  @import '~/assets/_vars.sass'

  h1
    grid-column: span 12

  .list-grid
    margin-bottom: $spaceLarge

</style>
