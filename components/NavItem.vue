<template>
    <li ref="navItem" class="nav-list__item" v-on:mouseover.stop="message">
        <nuxt-link exact active-class="active-link" :to="destinationUrl">{{ destinationName }}</nuxt-link>
    </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NavItem",
  props: [
    'destinationUrl',
    'destinationName'
  ],
  methods: {
    message() {
      let leftEdge = this.$el.offsetLeft;
      const indicator = document.getElementById("indicator");
      indicator.setAttribute("style", `transform: translateX(${leftEdge}px)`);
    }
  }
}

</script>

<style lang="sass">
  @import '~/assets/_vars.sass'

  .nav__item
    display: inline-block
    text-align: center
    width: 100%
    
    a
      color: $darkGray

      &:hover,
        color: $coolBody

    &.active-link
      color: $darkGray
    
</style>
