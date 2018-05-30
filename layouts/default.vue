<template>
  <section>
    <Nav />
    <nuxt />
    <Footer />
  </section>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer,
  }
}
</script>

<style lang="sass">
  @import '~/assets/_vars.sass'

  html
    font-size: 14px
    -ms-text-size-adjust: 100%
    -webkit-text-size-adjust: 100%
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    box-sizing: border-box

  html,
  body
    background-color: $coolGray
    font-family: $sans

  *, *:before, *:after
    box-sizing: border-box
    margin: 0
    padding: 0

  .wrapper
    padding: 0 $spaceXLarge
    width: 100%

  /* Granular Type */
  h1
    color: $darkGray
    font-family: $sans
    font-size: 6.063em
    font-weight: 200
    line-height: 1.2
    letter-spacing: -4px


  .list-H1
    color: $darkGray
    font-family: $sans-small
    font-size: 1em
    font-weight: 400
    letter-spacing: 3px
    margin-bottom: $spaceLarge
    text-align: center
    position: relative
    font-style: normal


  .list-H1::before
    position: absolute
    left: 0
    top: 50%
    height: 1px
    width: 45%
    background-color: $darkGray
    content: " "


  .list-H1::after
    position: absolute
    right: 0
    top: 50%
    height: 1px
    width: 45%
    background-color: $darkGray
    content: " "

  h2
    font-family: $sans
    font-size: 3.375em
    font-weight: 200
    letter-spacing: -2px
    line-height: 0.9
    margin-bottom: $spaceXSmall

  h3
    color: $coolBody
    font-family: $sans
    font-size: 2em
    font-weight: 200
    line-height: 1.2
    letter-spacing: -2px
    margin-bottom: $spaceXSmall


  p
    color: $coolBody
    font-family: $sans
    line-height: 1.5
    font-size: 1em
    font-weight: 300
    letter-spacing: -0.5px
    margin-bottom: $space

  a
    color: $coolBody
    text-decoration: none

  label
    color: $darkGray
    display: block
    font-family: $sans-small
    font-size: 0.8em
    letter-spacing: 1px
    margin-bottom: $spaceXSmall

  .description
    margin-bottom: $spaceSmall

  .recommendation
    font-style: italic

  .list-comma
    margin-left: 0em

  .container
    margin-top: $spaceXLarge*2
  /* Grid Settings */
  .grid
    display: grid
    grid-template-columns: repeat(12, 1fr)
    grid-column-gap: $space
    z-index: 2
</style>
