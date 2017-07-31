<script>
import { parseCard } from '../lib/parser'
export default {
  props: ['cards'],
  data: () => ({
    newValue: '',
  }),
  methods: {
    parseCard,
    remove(i) {
      this.cards.splice(i, 1)
    },
    add() {
      this.cards.push(this.newValue)
      this.$refs.add.select()
    },
  },
}
</script>

<template>
  <section>
    <h2>Ener Zone</h2>
    <ul>
      <li v-for="(card, i) in cards">
        <input v-model="cards[i]" :class="{ invalid: !parseCard(card) }"/>
        <button @click="remove(i)">Remove</button>
      </li>
      <li>
        <input
          ref="add"
          v-model="newValue"
          placeholder="red|blue"
          :class="{ invalid: !parseCard(newValue) }"/>
        <button @click="add()" :disabled="!parseCard(newValue)">Add</button>
      </li>
    </ul>
  </section>
</template>
