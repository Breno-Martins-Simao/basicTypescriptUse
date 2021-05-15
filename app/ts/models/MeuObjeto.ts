import { iImprimivel } from './Imprimivel'
import { iIgualavel } from './Igualavel'

export interface iMeuObjeto<generics> extends iIgualavel<generics>, iImprimivel {

}