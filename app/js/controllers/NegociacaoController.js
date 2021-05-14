System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, DiaDaSemana, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
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
                    this._negociacoesModel = new index_1.Negociacoes();
                    this._NegociacoesView = new index_2.NegociacoesView("#negociacoesView");
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView = new index_2.MensagemView("#mensagemView");
                    this._negociacaoService = new index_4.NegociacaoService();
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, ","));
                    if (!this._DiaUtil(data)) {
                        return this._mensagemView.update("Somente negociações em dias úteis");
                    }
                    const negocicao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoesModel.adiciona(negocicao);
                    this._NegociacoesView.update(this._negociacoesModel);
                    this._mensagemView.update("Negociação adcionada com sucesso!");
                }
                _DiaUtil(data) {
                    return (data.getDay() != DiaDaSemana.Domingo &&
                        data.getDay() != DiaDaSemana.Sabado);
                }
                importaDados() {
                    const isOk = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                    this._negociacaoService
                        .obterNegociacoes(isOk)
                        .then(negociacoes => {
                        negociacoes.forEach(negociacao => this._negociacoesModel.adiciona(negociacao));
                        this._NegociacoesView.update(this._negociacoesModel);
                    });
                }
            };
            __decorate([
                index_3.domInject("#data")
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject("#quantidade")
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.domInject("#valor")
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.throttle(500)
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.throttle(500)
            ], NegociacaoController.prototype, "importaDados", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
