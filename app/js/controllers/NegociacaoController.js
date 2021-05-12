System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._inputData = $('#data');
                    this._inputValor = $('#quantidade');
                    this._inputQuantidade = $('#valor');
                    this._negociacoesModel = new index_1.Negociacoes();
                    this._NegociacoesView = new index_2.NegociacoesView("#negociacoesView");
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView = new index_2.MensagemView("#mensagemView");
                }
                adiciona(event) {
                    event.preventDefault();
                    const negocicao = new index_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoesModel.adiciona(negocicao);
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView.update("Negociação adcionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
