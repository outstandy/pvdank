<template>
  <nav id="nav" :class="['nav', {'active' : (page === 'places-place') }]">
    <div class="wrapper grid">
      <div id="indicator" class="nav__indicator"></div>
      <ul class="nav-list">
        <li
          v-for="(link, key, index) in links"
          class="nav-list__item"
          active-class="active-link"
          v-bind:key="key"
          v-on:mouseover="message($refs.link[index])"
          >
          <nuxt-link
            exact
            :ref="link"
            v-bind:to="link">
              {{ link }}
          </nuxt-link>
        </li>
        <!-- <nuxt-link exact active-class="active-link" to="/lists">
          <li ref="navItem" class="nav-list__item" v-on:mouseover="checkLeft">Lists</li>
        </nuxt-link>
        <nuxt-link exact active-class="active-link" to="/about">
          <li ref="navItem" class="nav-list__item" v-on:mouseover="checkLeft">About</li>
        </nuxt-link>
        <nuxt-link exact active-class="active-link" to="/lists">
          <li ref="navItem" class="nav-list__item" v-on:mouseover="checkLeft">Something</li>
        </nuxt-link> -->
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Nav",
  computed: mapState(['page']),
  data() {
    return {
      links: ['', '/lists', '/about', '/other']
    }
  },
  methods: {
    maessage(text) {
      console.log(text)
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

    &.active
      .nav__indicator
        background-color: white

      li,
      a
        color: white

    &__indicator
        height: 1px
        background-color: $coolBody
        position: absolute
        width: calc(25% - #{$space})
        bottom: 0
        left: $space

  .active-link
    position: relative

  .nav-list
    grid-column: span 12
    display: flex
    justify-content: space-around
    list-style: none
    width: 100%
    position: relative

    &__item
      display: inline-block

      a
        color: $darkGray

      &:hover
        color: $coolBody
</style>
