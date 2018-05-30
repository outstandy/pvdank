<template>
  <div>
    <transition appear name="hero-slide">
      <div
        class="place__hero"
        v-if="place.img"
        v-bind:style="{ backgroundImage: 'url(' + place.img + ')' }">
          <transition appear name="slide-up">
            <div class="wrapper place__hero__content">
              <div>
                <label class="hero__label">
                  <span v-for="kind in place.kind" v-bind:key="kind">
                    {{ kind }}
                  </span>
                </label>
                <h1 class="hero__h1">{{ place.name }}</h1>
                <h3 class="hero__h2"> {{ place.location }}</h3>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <div class="grid wrapper">
      <div class="place__main">
        <h3>
          {{ place.slug }}
        </h3>
        <p>
          {{ place.desc }}
        </p>
      </div>
      <transition appear name="card-slide">
      <div class="place__aside">
        <label>Recommendations</label>
        <span
          class="recommendation"
          v-for="(rec, index) in place.recs" v-bind:key="rec">
          <span>{{ rec }}</span>
          <span
            class="list-comma"
            v-if="index+1 < place.recs.length ">, </span>
        </span>
        <label>Links</label>
        <a
          v-for="(link, index) in place.links"
          v-bind:key="index"
          v-bind:href="link">
          {{ link }}
        </a>
      </div>
      </transition>
    </div>
  </div>
</template>
<script>
// import { mapState } from 'vuex';
import json from '~/assets/data.json';

export default {
  transition: {
    name: 'hero-slide',
    mode: 'out-in'
  },
  asyncData ({params}) {
    let siteData = json;
    let data = siteData.find( place => place.name === params.place);
    return {
      place: data
    }
  }
}
</script>

<style lang="sass">

  @import '~/assets/_vars.sass'

  .place
    &__content
      z-index: 1

    &__hero
      align-items: flex-end
      background-size: cover
      background-position: 50% 50%
      padding-bottom: $space
      display: flex
      min-height: 50vh
      margin-bottom: $spaceLarge
      position: relative

      &__content
        .hero__h1,
        .hero__h2,
        .hero__label
          color: white

        .hero__h1,
        .hero__h2
          line-height: 1.2

        .hero__label
          line-height: 4

    &__main
      grid-column: span 8
      padding-right: $spaceLarge

      @media(max-width: 800px)
        grid-column: span 12

      h3
        font-style: normal
        margin-bottom: $spaceSmall

    &__aside
      background-color: white
      border-radius: 2px
      box-shadow: 0 1px 3px $darkGray
      color: $coolBody
      grid-column: span 4
      padding: $spaceLarge
      transform: translateY($spaceLarge*-3)

      @media(max-width: 800px)
        grid-column: span 12
        transform: translateY(0)

      // .recommendation

</style>
