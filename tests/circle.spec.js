/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('10')).toBeUndefined();
    // Teste se circle retorna um objeto.
    expect(circle(5)).toBeInstanceOf(Object);
    // Teste se o objeto retornado tem 3 propriedades.
    expect( Object.keys(circle(20)).length).toBe(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a circunferência correta para um círculo de raio 2.
    expect(circle(2).circumference).toBeCloseTo(2 * 3.14 * 2);
    // Teste se dentro do objeto retornado, a função retorna uma key com value igual a área correta para um círculo de raio 3.
    expect(circle(3).area).toBeCloseTo(3.14 * (3 ** 2));
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)).toEqual({radius: 3, area: 3.14 * 3 * 3, circumference: 3.14 * 2 * 3});
  });
});
