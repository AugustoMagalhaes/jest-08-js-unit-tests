const {createMenu, objetoRetornado, meuRestaurante} = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {    
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui a
    // chave fetchMenu, a qual tem como valor uma função.    
    expect(objetoRetornado).toHaveProperty('fetchMenu', expect.any(Function));  
    
    // TESTE 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    expect(objetoRetornado.fetchMenu()).toEqual({ food: {}, drink: {} });    
    // TESTE 3: Verifique se o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    expect({ food: {}, drink: {} }).toEqual(objetoRetornado.fetchMenu());

    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------

    // TESTE 4: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    expect(objetoRetornado.consumption).toEqual([]);    
    
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------

    // TESTE 5: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado,
    // passando uma string como parâmetro (como `objetoRetornado.order('coxinha')`), tal string é adicionada
    // ao array retornado em `objetoRetornado.consumption`.
    expect(meuRestaurante.order('coxinha')).toBeUndefined(); // este teste invoca o metodo 'order' e ja adiciona o conteudo a ser testado a seguir:       
    expect(meuRestaurante).toHaveProperty('consumption', ['coxinha']);
    meuRestaurante.consumption = [];
   
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    
    meuRestaurante.order('coxinha');
    meuRestaurante.order('agua');
    meuRestaurante.order('sopa');
    meuRestaurante.order('sashimi');
    expect(meuRestaurante.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
    
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    meuRestaurante.consumption = [];
    meuRestaurante.order('coxinha');
    meuRestaurante.order('agua');
    meuRestaurante.order('coxinha');    
    expect(meuRestaurante.consumption.length).toBe(3);
    expect(meuRestaurante.consumption).toEqual(['coxinha', 'agua', 'coxinha']);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    meuRestaurante.consumption = [];
    meuRestaurante.order('coxinha');
    meuRestaurante.order('agua');
    meuRestaurante.order('coxinha');
    expect(meuRestaurante.pay()).toBeCloseTo(12.87);    
    
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
