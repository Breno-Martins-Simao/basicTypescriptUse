System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logExecutionTime() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                console.log('>---------------------');
                const t1 = performance.now();
                console.log(`Params used o the method ${propertyKey}: ${JSON.stringify(args)}`);
                const _return = originalMethod.apply(this, args);
                const t2 = performance.now();
                console.log(`Then the method ${propertyKey} returned ${JSON.stringify(_return)}`);
                console.log(`Method ${propertyKey} was executed in ${t2 - t1} ms`);
                console.log('<---------------------');
                return _return;
            };
            return descriptor;
        };
    }
    exports_1("logExecutionTime", logExecutionTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
