import { Negociacoes, Negociacao } from '../models/index'
import { MensagemView, NegociacoesView } from '../views/index'

enum DiaDaSemana{
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

export class NegociacaoController{
    private _inputData : JQuery
    private _inputValor : JQuery
    private _inputQuantidade : JQuery
    private _negociacoesModel : Negociacoes
    private _NegociacoesView : NegociacoesView
    private _mensagemView : MensagemView

    constructor(){  
        this._inputData = $('#data')
        this._inputValor = $('#quantidade')
        this._inputQuantidade = $('#valor')
        this._negociacoesModel = new Negociacoes()
        this._NegociacoesView = new NegociacoesView("#negociacoesView")
        this._NegociacoesView.update(this._negociacoesModel)
        this._mensagemView = new MensagemView("#mensagemView")
    }

    adiciona(event:Event){
        event.preventDefault()   
        
        let data = new Date (this._inputData.val().replace(/-/g , ','))

        if(!(this._DiaUtil(data))){
            return this._mensagemView.update('Somente negociações em dias úteis')       
        }

        const negocicao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoesModel.adiciona(negocicao)
        this._NegociacoesView.update(this._negociacoesModel)
        this._mensagemView.update("Negociação adcionada com sucesso!")
    }

    private _DiaUtil(data : Date):boolean{
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado
    }
}

