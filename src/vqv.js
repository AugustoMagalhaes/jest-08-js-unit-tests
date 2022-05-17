const vqv = (name, age) => {
  if (!name || !age) {
    return undefined;
  }
  // Os template literals possibilitam quebra de pagina interna aos ``,
  // mas o lint acusava passar da quantidade ideal máxima, dai quebrei em 2 msg.
  const firstMessage = `Oi, meu nome é ${name}!\n`;
  const secMessage = `Tenho ${age} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
  const message = firstMessage.concat(secMessage);
  return message;
};

module.exports = vqv;
