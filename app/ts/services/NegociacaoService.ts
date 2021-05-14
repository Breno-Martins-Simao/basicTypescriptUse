import { Negociacao, iNegociacaoParcial } from '../models/index'

export class NegociacaoService {
    obterNegociacoes(handler: iHandlerFunction): Promise<Negociacao[]> {
        return <Promise<Negociacao[]>>fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: iNegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            ).catch((err) => console.log(err.message));       
    }
}

export interface iHandlerFunction{
    (res : Response):Response
}