System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, DiaDaSemana, NegociacaoController;
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
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
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
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!(this._DiaUtil(data))) {
                        return this._mensagemView.update('Somente negociações em dias úteis');
                    }
                    const negocicao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoesModel.adiciona(negocicao);
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView.update("Negociação adcionada com sucesso!");
                }
                _DiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
