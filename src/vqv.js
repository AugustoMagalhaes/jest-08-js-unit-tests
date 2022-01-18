/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (name, age) => {
  if (!name || !age) {
    return undefined;
  }
  // Os template literals possibilitam quebra de pagina interna aos ``, mas o lint acusava passar da quantidade ideal máxima, dai quebrei em 2 msg.
  const firstMessage = `Oi, meu nome é ${name}!\n`;
  const secMessage = `Tenho ${age} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
  const message = firstMessage.concat(secMessage);
  return message;
};

module.exports = vqv;
