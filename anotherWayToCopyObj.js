{
    // еще способ как скопировать объект
    let clone = Object.defineProperties(
        {},
        Object.getOwnPropertyDescriptors(obj)
    );
    // помимо свойств копирует еще и флаги
    console.log(clone);
}
