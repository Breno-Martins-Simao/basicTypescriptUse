System.register(["../models/Negociacoes", "../models/Negociacao", "../views/MensagemView", "../views/NegociacoesView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes_1, Negociacao_1, MensagemView_1, NegociacoesView_1, NegociacaoController;
    return {
        setters: [
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._inputData = $('#data');
                    this._inputValor = $('#quantidade');
                    this._inputQuantidade = $('#valor');
                    this._negociacoesModel = new Negociacoes_1.Negociacoes();
                    this._NegociacoesView = new NegociacoesView_1.NegociacoesView("#negociacoesView");
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                }
                adiciona(event) {
                    event.preventDefault();
                    const negocicao = new Negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoesModel.adiciona(negocicao);
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView.update("Negociação adcionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
