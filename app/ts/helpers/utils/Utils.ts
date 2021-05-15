import { iImprimivel } from '../../models/index'

function printOnLog(...itens:iImprimivel[]){
    itens.forEach(item => {
        item.paraTexto()    
    })
}

export {
    printOnLog
}

