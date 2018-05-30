<template>
  <transition
    appear name="appearing"
    v-bind:style="{transitionDelay: ''+ index + 's'}">
    <nuxt-link :to="{name: 'places-place',
      params: { place: name }}"
      v-on:click.native="active = !active"
      :class="[{'active' : active}, {'featured': (featured === true)}, 'grid-item']">
      <div class="grid-item-content">
        <div
          v-if="img"
          class="grid-item-img"
          v-bind:style="{ backgroundImage: 'url(' + img + ')' }"></div>
        <div class="grid-item-details">
          <label>
            <span v-for="kind in kind" v-bind:key="kind">
              {{ kind }}
            </span>
          </label>
          <h2>
            {{ name }}
          </h2>
          <h3>
            {{ location }}
          </h3>
          <p class="description">
            {{ desc }}
          </p>
          <label>Recommended</label>
          <div class="recommendation">
            <span
              class="recommendation"
              v-for="(rec, index) in recs" v-bind:key="rec">
              <span>{{ rec }}</span>
              <span
                class="list-comma"
                v-if="index+1 < recs.length ">, </span>
            </span>
          </div>
        </div>
      </div>
    </nuxt-link>
  </transition>
</template>

<script>
export default {
  name: 'item',
  props: [
    'index',
    'name',
    'location',
    'kind',
    'desc',
    'recs',
    'img',
    'featured',
    'links',
  ],
  data () {
    return {active: false}
  }
};
</script>

<style lang="sass">
  @import '~/assets/_vars.sass'

  .appearing-enter,
  .appearing-leave-to
    opacity: 0
    transform: translateY(20px)


  .appearing-enter-active,
  .appearing-leave-active
    transition: all 0.5s

  .grid-item
    grid-column: span 4
    margin-bottom: $space

    @media(max-width: 800px)
      grid-column: span 6

    @media(max-width: 400px)
      grid-column: span 12

    &:hover
      .grid-item-content
        box-shadow: 0 2px 4px $darkGray
        cursor: pointer
        transform: translateY(-2px)

        .grid-item-img
          filter: sepia(0)
          opacity: 1

    &-content
      background-color: white
      border-radius: 2px
      box-shadow: 0 1px 3px $darkGray
      transition: all 0.3s ease-out
      overflow: hidden
      position: relative

    &-img
      background-size: 100%
      background-position: 50% 50%
      height: 150px
      filter: sepia(20%)
      opacity: 0.9
      position: absolute
      top: 0
      transition: all 0.3s ease-out
      width: 100%
      z-index: 1

    &-details
      padding: (150px + $space) $space $space $space
      position: relative
      z-index: 2

      h2
        color: $nuclearGreen

    &.featured
      grid-column: span 12

      .grid-item-content
        display: flex

      .grid-item-img
        max-width: 33vw
        height: 100%

      .grid-item-details
        padding: $space $space $space $space
        margin-left: calc(33% + 48px)

</style>
