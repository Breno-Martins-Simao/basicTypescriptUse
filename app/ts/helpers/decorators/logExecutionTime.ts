export function logExecutionTime (){
    return function(target : any, propertyKey: string, descriptor: PropertyDescriptor){
        const originalMethod = descriptor.value
        
        descriptor.value = function(...args:any[]){
            console.log('>---------------------')
            const t1 = performance.now()
            console.log(`Params used o the method ${propertyKey}: ${JSON.stringify(args)}`)
            const _return = originalMethod.apply(this, args)
            const t2 = performance.now()
            console.log(`Then the method ${propertyKey} returned ${JSON.stringify(_return)}`)
            console.log(`Method ${propertyKey} was executed in ${t2-t1} ms`)
            console.log('<---------------------')
            return _return 
        }

        return descriptor
    }
}