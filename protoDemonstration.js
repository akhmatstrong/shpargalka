{
    // как привести пример по прототипному наследованию
    const a = {
        name: "Oleg",
    };
    const b = Object.create(a);

    console.log(a.__proto__);
    console.log(b.__proto__);

    // Output:
    // [Object: null prototype] {}
    // { name: 'Oleg' }
}
{
    {
        // пример того, что arguments не является массивом => нельзя использовать методы массивов
        const sum = function (a, b) {
            //console.log(arguments[0]);
            console.log(typeof arguments);
            return a + b;
        };
        sum(3, 2);
    }
    {
        // output: object
        const sum = function (a, b) {
            console.log(arguments[0]);
            console.log(arguments);
            return a + b;
        };
        sum(3, 2);
    }

    // output:
    // Arguments(2) [3, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    // 0:3
    // 1:2
    // callee:ƒ (a, b)
    // length:2
    // Symbol(Symbol.iterator):ƒ values()
    // [[Prototype]]:Object
}
