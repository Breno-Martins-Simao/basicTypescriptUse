
import { Negociacao } from './Negociacao'
import { iMeuObjeto } from './MeuObjeto'

export class Negociacoes implements iMeuObjeto<Negociacoes>{
    private _negociacoes:Array<Negociacao> = []

    adiciona(negociacao:Negociacao):void{
        this._negociacoes.push(negociacao)
    }

    paraArray():Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes)
    }

    paraTexto(){
        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }

    equals(negociacoes:Negociacoes):boolean{
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes)
    }
}