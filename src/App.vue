<script>
import EnerZone from './components/EnerZone'
import Cost from './components/Cost'
import Result from './components/Result'

export default {
  data: () => ({
    cards: [
      'red',
      'blue|red',
    ],
    cost: [
      '1 red',
      '2 blue',
    ],
  }),
  components: {
    EnerZone,
    Cost,
    Result,
  },
}
</script>

<template>
  <div>
    <header>
      <h1>WEBXOSS | Ener Playground</h1>
    </header>
    <main>
      <EnerZone :cards="cards"/>
      <Cost :cost="cost"/>
      <Result :cards="cards" :cost="cost"/>
    </main>
  </div>
</template>

<style>
input.invalid {
  color: red;
  background-color: yellow;
}
</style>
