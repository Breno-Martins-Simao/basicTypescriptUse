import { Negociacoes } from '../models/Negociacoes'
import { Negociacao } from '../models/Negociacao'
import { MensagemView } from '../views/MensagemView'
import { NegociacoesView } from '../views/NegociacoesView'


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

        const negocicao = new Negociacao(
            new Date (this._inputData.val().replace(/-/g , ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        )

        this._negociacoesModel.adiciona(negocicao)
        this._NegociacoesView.update(this._negociacoesModel)
        this._mensagemView.update("Negociação adcionada com sucesso!")
    }
}