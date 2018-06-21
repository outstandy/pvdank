<template>
  <nav id="nav" :class="['nav', {'active' : (page === 'places-place') }]">
    <div class="wrapper grid">
      <ul class="nav-list">
        <NavItem destinationUrl="/" destinationName="Home" class="home"/>
        <NavItem destinationUrl="/lists" destinationName="Lists" />
        <NavItem destinationUrl="/about" destinationName="About" />
        <NavItem destinationUrl="/some" destinationName="Some" />       
      </ul>
      <div id="indicator" class="nav__indicator"></div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';
import NavItem from '~/components/NavItem';

export default {
  name: "Nav",
  components: {
    NavItem,
  },
  computed: mapState(['page']),
  data() {
    return {
      links: ['', '/lists', '/about', '/other']
    }
  },
  transition: {
    name: 'page'
  }
}

</script>

<style lang="sass">
  @import '~/assets/_vars.sass'

  .nav
    padding: $space 0
    position: absolute
    top: 0
    width: 100%
    z-index: 100

    &__indicator
        height: 1px
        background-color: $coolBody
        position: absolute
        width: calc(25% - #{$space})
        bottom: 0
        left: $spaceXLarge
        transition: transform 0.3s ease-in-out
    
    .nav-list
      grid-column: span 12
      display: flex
      justify-content: space-around
      list-style: none
      width: 100%
      position: relative

      &__item
        display: inline-block
        text-align: center
        width: 100%
        
        a
          color: $darkGray
          width: 100%

          &:hover,
          &.active-link
            color: $coolBody

    &.active
      .nav__indicator
        background-color: white

      a
        color: white
        opacity: 0.9

        &:hover,
        &.active-link
          color: white
          opacity: 1

</style>
