<template>
  <footer id="footer">
    <div class="wrapper grid" >
      <div class="footer__content">
        <p>
          Hey there! what's good y'all
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  }
</script>

<style lang="sass">
  @import '~/assets/_vars.sass'

  #footer
    border-top: 1px solid $darkGray
    background-color: white
    margin-top: $spaceXLarge
    padding: $spaceLarge 0 ($spaceXLarge*2) 0

    transition: all 0.5s ease-out

  .footer
    &__content
      color: $darkGray
      grid-column: span 12
</style>
