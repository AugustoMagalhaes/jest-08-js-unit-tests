const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {    
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(productDetails('copo', 'prato')).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('livro', 'caderno').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('qualquer', 'coisa').every((element) => element instanceof Object)).toBeTruthy();
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('mesa', 'cadeira')).not.toEqual(productDetails('cadeira', 'mesa'));
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('primeiro', 'segundo').every((element) => element.details.productId.endsWith('123'))).toBeTruthy();
  });
});
