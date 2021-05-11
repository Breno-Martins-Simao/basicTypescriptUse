export abstract class View<VariantType>{
    protected _elemento : JQuery

    constructor (selector : string){
        this._elemento = $(selector)
    }

    update(model : VariantType):void{
        this._elemento.html(this.template(model))
    }

    abstract template(model: VariantType):string
}