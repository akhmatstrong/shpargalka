// 5 каверзных вопросов JS:
// 1)вернут ли функции одинаковый объект?
{
    function frist() {
        return {hello: 'World!',}
    }
    function second() {
        return {hello: 'World!',}
    }
}
// Ответ: нет, во второй функции интерпретатор проставит точку с запятой сразу после return и второй функцией вернется // undefined, дальнейший код будет обработан как блок кода

// 2)вопрос по теме scope и hoisting
{
    var a =5;
    var writeA = function () {
        console.log(a);
        var a = 10;
    };
    writeA();
}
// Ответ: так как console.log идет раньше локального объявления переменной, она подвергается всплытию вверх области // // видимости и меняет значение a, но ее значение присваивается позже вызова console.log

// 3)
{
    for (var i = 0; i <= 5; i++) {
        setTimeout(function() {
                console.log(i);
        }, i*600)
    }
}
// Ответ: в консоль выведется не серия от 1 до 6, а только 5 6, потому что асинхронные функции ожидают окончательного // // выполнения основного потока кода, здесь цикла for
// если поменять var на let, то область видимости изменится на блочную 

// 4)
{
    const something = {
        object: 'JavaScript',
        hello() {
                return `Hello ${this.object}!`
        },
        goodbye() : () => {
                return `Hello ${this.object}!`
        }
    }
    console.log(something.hello());
    console.log(something.goodbye());
}

// что покажут concole.log?
// Ответ: первая функция вернет Hello, JavaScript!, вторая вернет Hello, undefined!, стрелочные функции в отличие от
// регулярных работают так, что this внутри них не ссылается на объект, которому принадлежит метод и она наследует
// внешний контекст, а не объекта, таким образом здесь внешний контекст  - это глобальная область видимости у window 
// нет метода goodbye

// 5)
{
    var a = 1;
    function first() {
        var a =2;
        function second() {
                a++;
                var a = 3;
                console.log(a);
        }
        second();
    }
    first();
}

// Ответ: 3