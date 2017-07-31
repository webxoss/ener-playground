<script>
import { parseCost } from '../lib/parser'
export default {
  props: ['cost'],
  data: () => ({
    newValue: '',
  }),
  methods: {
    parseCost,
    remove(i) {
      this.cost.splice(i, 1)
    },
    add() {
      this.cost.push(this.newValue)
      this.$refs.add.select()
    },
  },
}
</script>

<template>
  <section>
    <h2>Cost</h2>
    <ul>
      <li v-for="(item, i) in cost">
        <input v-model="cost[i]" :class="{ invalid: !parseCost(item) }"/>
        <button @click="remove(i)">Remove</button>
      </li>
      <li>
        <input
          ref="add"
          v-model="newValue"
          placeholder="1 red|green"
          :class="{ invalid: !parseCost(newValue) }"/>
        <button @click="add()" :disabled="!parseCost(newValue)">Add</button>
      </li>
    </ul>
  </section>
</template>
