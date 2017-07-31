export const parseCard = input => {
  let colors = (input || '').split('|').map(color => color.toLowerCase())
  if (!colors.length) {
    return null
  }
  if (!colors.every(color => color.match(/^(red|blue|green|black|white)$/))) {
    return null
  }
  return colors
}

export const parseCost = input => {
  let [, count, colors] = (input || '').match(/^(\d+)\s*(.*)/) || []
  count = +count || 0
  colors = parseCard(colors)
  if (!count || !colors) {
    return null
  }
  return {
    count,
    filter: card => colors.some(color => card.indexOf(color) !== -1),
  }
}
