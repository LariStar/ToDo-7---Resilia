const ServiceConta = require ("../service/ServiceConta.js")

describe ('Testando operações', ()=> {test("Qual o valor da soma?", ()=>{
    expect(ServiceConta.somar(10,10)).toBe(20)
})

test("Qual o valor da subtração?", ()=>{
    expect(ServiceConta.subtrair(23,18)).toBe(5)
})

test("Qual o valor da multiplicação?", ()=>{
    expect(ServiceConta.multiplicar(10,6)).toBe(60)
})

test("Qual o valor da divisão?", ()=>{
    expect(ServiceConta.dividir(50,2)).toBe(25)
})}
)