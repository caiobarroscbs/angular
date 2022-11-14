import { Injectable } from '@angular/core';

/**
 * providedIn informa onde o serviço será fornecido
 */

/**
 * A ideia de um serviço no Angular
 * é encapsular alguma logica que pode
 * ser utilizada em vários locais da 
 * sua aplicação
 */

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}
/**
 * C -> Create
 * R -> Read
 * U -> Update
 * D -> Delete
 */

@Injectable({
  providedIn: 'root' // 'root' faz referência ao AppModule
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
    nome: 'Caio',
    sobrenome: 'Barros',
    cpf: '11111111111',
    email: 'caiobarros@gmail.com',
    telefone: '11111111',
    id: 1
  },
  {
    nome: 'José',
    sobrenome: 'Almir',
    cpf: '22222222222',
    email: 'josealmir@gmail.com',
    telefone: '22222222',
    id: 2
  },
  {
    nome: 'Renato',
    sobrenome: 'Pereira',
    cpf: '33333333333',
    email: 'renatopereira@gmail.com',
    telefone: '33333333',
    id: 3
  },

  ]

  constructor() { }

  listarClientes(): Cliente[] {
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined {
    /**
     *  O método find() dos arrays serve para procurar algum valor
     * dentro do array
     * 
     * é necessario que se passe como parâmetro do método find() uma função.
     * Essa função sera utilizada dentro do método para procurar um valor. A
     * função que será passada DEVE retornar sempre um valor booleano
     */

    // SELECT * FROM  clientes WHERE id = 2

    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    })

    return clienteEncontrado
  }

}
