const mapPizzaSize = {
  20: 'Small',
  30: 'Middle',
  40: 'Big',
} as const;

// const mapPizzaType = {
//   0: 'Traditional',
//   1: 'Thin'
// } as const;

export const pizzaSizes = Object.entries(mapPizzaSize).map(([name, value]) => ({
  name,
  value
}));