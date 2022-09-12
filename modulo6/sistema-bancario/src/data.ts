// nome, CPF e data de nascimento
export type Extrato = {
    value: number,
    date: string,
    description: string
}
export type Client = {
    name: string,
    cpf: string,
    dtBirth: string,
    saldo: number
    extrato: Array<Extrato>
}

export const clients: Array<Client> = [
    {
        name: "Beatriz de Souza Santos",
        cpf: "10",
        dtBirth: '25-11-2000',
        saldo: 2500,
        extrato: [
            {
                value: 200,
                date: "'10-02-2020",
                description: 'Pagamento Luz'
            }
        ]
    },
    {
        name: "Nathalia de Souza Santos",
        cpf: "62",
        dtBirth: '10-12-1996',
        saldo: 3.500,
        extrato: [
            {
                value: 400,
                date: "'10-02-2020",
                description: 'Pagamento água'
            }
        ]
    },
    {
        name: "João Victor de Souza Severino",
        cpf: "222.111.222-52",
        dtBirth: '14-04-2002',
        saldo: .500,
        extrato: [
            {
                value: 700,
                date: "'17-12-2021",
                description: 'Cartão de crédito'
            }
        ]
    }
]