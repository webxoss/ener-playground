<script>
import { parseCard, parseCost } from '../lib/parser'
import { checkRequirements } from '../lib/ener'
export default {
  props: ['cards', 'cost'],
  computed: {
    ok() {
      let items = this.cards.map(parseCard).filter(value => value)
      let requirements = this.cost.map(parseCost).filter(value => value)
      return checkRequirements(items, requirements)
    },
  },
}
</script>

<template>
  <section>
    <h2>Enough Ener?</h2>
    <p v-if="ok">😊Yes</p>
    <p v-else>😢No</p>
  </section>
</template>
