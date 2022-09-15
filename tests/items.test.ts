import app from '../src/app'
import supertest from 'supertest';

describe('Testa POST /items ', () => {
  it("returns 201 for valid params", async () => {
    const body = {
      title: 22,
      url: 'http://google.com/',
      description: 'Testando a descri',
      amount: 1
    };

    const result = await supertest(app).post("/items").send(body);
    const status = result.status;

    expect(status).toEqual(201);
  });

  it("given a task with duplicate title it should return 409", async () => {
    const body = {
      title: 22,
      url: 'http://google.com/',
      description: 'Testando a descri',
      amount: 1
    };

    const firstTry = await supertest(app).post("/tasks").send(body);
    expect(firstTry.status).toEqual(201); // a primeira inserção vai funcionar

    // se tentarmos criar uma task igual, deve retornar 409
    const secondTry = await supertest(app).post("/items").send(body);
    expect(secondTry.status).toEqual(409);
  });
});




describe('Testa GET /items ', () => {
  it.todo('Deve retornar status 200 e o body no formato de Array');
});

describe('Testa GET /items/:id ', () => {
  it.todo('Deve retornar status 200 e um objeto igual a o item cadastrado');
  it.todo('Deve retornar status 404 caso não exista um item com esse id');
});
