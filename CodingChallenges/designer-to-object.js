function calculateAveragePricePerDesigner(inventory) {
  const result = {};
  result.designers = [];

  for (let brand of inventory) {
    const averagePrice =
      brand.shoes.map((item) => item.price).reduce((a, b) => a + b, 0) /
      brand.shoes.length;

    result.designers.push({
      name: brand.name,
      averagePrice: averagePrice
    });
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
