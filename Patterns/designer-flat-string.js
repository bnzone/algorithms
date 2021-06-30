function renderInventory(inventory) {
  let result = '';
  for (let brand of inventory) {
    for (let item of brand.shoes) {
      result = result.concat(
        brand.name,
        ', ',
        item.name,
        ', ',
        item.price.toString(),
        '\n'
      );
    }
  }
  return result;
}

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

console.log(renderInventory(currentInventory));
