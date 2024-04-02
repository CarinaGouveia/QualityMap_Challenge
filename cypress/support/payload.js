import { faker } from '@faker-js/faker';

export function payload() {
  const payload = {
    nome: faker.internet.userName(),
    email:  faker.internet.email(),
    password: faker.internet.password(),
    administrador: "true"
    };

  return payload;
}

export function payloadPostProdutos() {
    const payload = {
        nome: `TV ${faker.random.numeric(2)} Polegadas`,
        preco: 3500,
        descricao: "desafio",
        quantidade: 3
      };
  
    return payload;
}


