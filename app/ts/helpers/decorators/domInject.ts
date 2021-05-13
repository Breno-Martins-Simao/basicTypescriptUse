export function domInject(cssSelector:string){
    return function(target: any, key: string){
        let elemento  :JQuery
        const getter = function(){
            if(!elemento){
                console.log(`buscando  ${cssSelector} para injetar em ${key}`);
                elemento = $(cssSelector)
            }
            return elemento
        }
        
        Object.defineProperty(target, key, {
            get : getter
        }) 
    }
}