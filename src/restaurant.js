function orderFromMenu(request) {  
    this.consumption.push(request);
    // arrow function entende 'this' como objeto global: https://blog.da2k.com.br/2019/01/07/javascript-tudo-sobre-arrow-functions/
}

const createMenu = (menu) => ({
  fetchMenu: () => menu,
  consumption: [],
  order: orderFromMenu,
  pay() {
    const itemsMenu = this.fetchMenu();
    const allFoods = { ...itemsMenu.food, ...itemsMenu.drink };
    const sumBill = this.consumption.reduce((sum, item) => sum + allFoods[item], 0) * 1.1;
    return sumBill;
  },
});

const objetoRetornado = createMenu({ food: {}, drink: {} });

const meuRestaurante = createMenu({ food: { coxinha: 3.9, sopa: 9.9 }, 
  drink: { agua: 3.9, cerveja: 6.9 } });

module.exports = { createMenu, objetoRetornado, meuRestaurante };
