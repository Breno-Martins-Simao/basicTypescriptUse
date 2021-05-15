import { Negociacoes, Negociacao, iNegociacaoParcial } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { iHandlerFunction, NegociacaoService } from '../services/index'
import { printOnLog } from '../helpers/utils/index'

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}

export class NegociacaoController {
    @domInject("#data")
    private _inputData: JQuery;

    @domInject("#quantidade")
    private _inputValor: JQuery;

    @domInject("#valor")
    private _inputQuantidade: JQuery;

    private _negociacoesModel: Negociacoes;
    private _NegociacoesView: NegociacoesView;
    private _mensagemView: MensagemView;
    private _negociacaoService: NegociacaoService;

    constructor() {
        this._negociacoesModel = new Negociacoes();
        this._NegociacoesView = new NegociacoesView("#negociacoesView");
        this._NegociacoesView.update(this._negociacoesModel);
        this._mensagemView = new MensagemView("#mensagemView");
        this._negociacaoService = new NegociacaoService()
    }

    @throttle(500)
    adiciona() {

        let data = new Date(this._inputData.val().replace(/-/g, ","));

        if (!this._DiaUtil(data)) {
            return this._mensagemView.update("Somente negociações em dias úteis");
        }

        const negocicao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );


        this._negociacoesModel.adiciona(negocicao);
        printOnLog(negocicao, this._negociacoesModel)
        this._NegociacoesView.update(this._negociacoesModel);
        this._mensagemView.update("Negociação adcionada com sucesso!");
    }

    private _DiaUtil(data: Date): boolean {
        return (
            data.getDay() != DiaDaSemana.Domingo &&
            data.getDay() != DiaDaSemana.Sabado
        );
    }

    @throttle(500)
    importaDados() {
        const isOk: iHandlerFunction = (res: Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }

        this._negociacaoService
            .obterNegociacoes(isOk)
            .then(negociacoesParaImportar => {
                const negociacaoJaImportadas = this._negociacoesModel.paraArray()

                negociacoesParaImportar
                    .filter(negociacao =>
                        !negociacaoJaImportadas.some(jaimportada =>
                            negociacao.equals(jaimportada)))
                    .forEach(negociacao =>
                        this._negociacoesModel.adiciona(negociacao))
                        
                this._NegociacoesView.update(this._negociacoesModel)
            })
            .catch(err => {
                this._mensagemView.update(err.message)
            })
    }
}
