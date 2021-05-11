class NegociacaoController {
    constructor() {
        this._inputData = $('#data');
        this._inputValor = $('#quantidade');
        this._inputQuantidade = $('#valor');
        this._negociacoesModel = new Negociacoes();
        this._NegociacoesView = new NegociacoesView("#negociacoesView");
        this._NegociacoesView.update(this._negociacoesModel);
        this._mensagemView = new MensagemView("#mensagemView");
    }
    adiciona(event) {
        event.preventDefault();
        const negocicao = new Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoesModel.adiciona(negocicao);
        this._NegociacoesView.update(this._negociacoesModel);
        this._mensagemView.update("Negociação adcionada com sucesso!");
    }
}
