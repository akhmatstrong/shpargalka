```
// сумма элементов массива
{
    let array = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
{
    let array = [1, 2, 3, 4, 5];
    let sum = array.reduce((acc, next) => acc + next, 0);
    console.log(sum);
}

// максимальное и минимальное значение массива
{
    let array = [1, 2, 3, 4, 5];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(max);
}
{
    let array = [1, 2, 3, 4, 5];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        max = array[i] > max ? array[i] : max;
    }
    console.log(max);
}
{
    let array = [1, 2, 3, 4, 5];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        max = Math.max(array[i], max);
    }
    console.log(max);
}
{
    let array = [1, 2, 3, 4, 5];
    let max = array.reduce((acc, next) => Math.max(acc, next));
    console.log(max);
}
{
    let array = [1, 2, 3, 4, 5];
    array.sort((x1, x2) => x1 - x2);
    let max = array[array.length - 1];
    console.log(max);
}
{
    let array = [1, 2, 3, 4, 5];
    console.log(Math.max(...array));
}
{
    let array = [1, 2, 3, 4, 5];
    console.log(Math.max.apply(null, array));
}
{
    let array = [1, 2, 3, 4, 5];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(min);
}

// сортировка массива
{
    // пример того, как это работает внутри
    let array = [1, 2, 3, 4, 5];
    array.sort((x1, x2) => {
        if (x1 < x2) {
            return -1;
        }
        if (x1 > x2) {
            return 1;
        }
        if (x1 === x2) {
            return 0;
        }
    });
    console.log(array);
}
{
    let array = [1, 2, 3, 4, 5];
    array.sort((x1, x2) => x1 - x2);
}
{
    const users = [
        {
            name: "John",
            age: 20,
        },
        {
            name: "Joe",
            age: 30,
        },
        {
            name: "Alex",
            age: 25,
        },
        {
            name: "David",
            age: 27,
        },
        {
            name: "Boris",
            age: 33,
        },
    ];
    users.sort((u1, u2) => u1.age - u2.age);
    console.log(users);
}
{
    const users = [
        {
            name: "John",
            age: 20,
        },
        {
            name: "Joe",
            age: 30,
        },
        {
            name: "Alex",
            age: 25,
        },
        {
            name: "David",
            age: 27,
        },
        {
            name: "Boris",
            age: 33,
        },
    ];
    users.sort((u1, u2) => {
        if (u1.name < u2.name) {
            return -1;
        }
        if (u1.name > u2.name) {
            return 0;
        }
        if (u1.name == u2.name) {
            return 1;
        }
    });
    console.log(users);
}
{
    const users = [
        {
            name: "John",
            age: 20,
        },
        {
            name: "Joe",
            age: 30,
        },
        {
            name: "Alex",
            age: 25,
        },
        {
            name: "David",
            age: 27,
        },
        {
            name: "Boris",
            age: 33,
        },
    ];
    users.sort((u1, u2) => {
        return u1.name.localeCompare(u2.name);
    });
    console.log(users);
}

// изменить порядок элементов массива
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(array.reverse());
}
{
    // если reverse нельзя использовать
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    console.log(reversed);
}
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const reversed = array.map((el, index, arr) => arr[arr.length - index - 1]);
    console.log(reversed);
}
{
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log([...array].map(array.pop, array));
}

// отфильтровать falsy значения в массиве
{
    const array = [7, "correct", 0, false, 9, NaN, ""];
    const notFalsy = [];
    for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
            notFalsy.push(array[i]);
        }
    }
    console.log(notFalsy);
}
{
    const array = [7, "correct", 0, false, 9, NaN, ""];
    const notFalsy = array.filter((n) => !!n);
    console.log(notFalsy);
}
{
    const array = [7, "correct", 0, false, 9, NaN, ""];
    const notFalsy = array.filter((n) => Boolean(n));
    console.log(notFalsy);
}

```
