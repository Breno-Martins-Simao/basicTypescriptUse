export abstract class View<VariantType>{
    protected _elemento : JQuery
    private _escapar : boolean

    constructor (selector : string, escapar : boolean = false){
        this._elemento = $(selector)
        this._escapar = escapar
    }

    update(model : VariantType):void{
        let template = this.template(model)
        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        this._elemento.html(template)
    }

    abstract template(model: VariantType):string
}