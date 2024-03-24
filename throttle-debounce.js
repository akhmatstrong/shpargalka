{
    window.addEventListener(
        "resize",
        debounce((event) => {})
    );
}
{
    const f = debounce(console.log, 1000);
    f(1);
    f(2);
    setTimeout(() => f(3), 100);
    setTimeout(() => f(4), 500);
    setTimeout(() => f(5), 1100);
    function debounce(callback, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                callback.apply(this, args);
            }, delay);
        };
    }
}
{
    const f = throttle(console.log, 1000);
    f(1);
    f(2);
    setTimeout(() => f(3), 100);
    setTimeout(() => f(4), 500);
    setTimeout(() => f(5), 1100);
    function throttle(callback, delay) {
        let isWaiting = false;
        let savedArgs = null;
        let savedThis = null;
        return function wrapper(...args) {
            if (isWaiting) {
                savedArgs = args;
                savedThis = this;
                return;
            }

            callback.apply(this, args);

            isWaiting = true;

            setTimeout(() => {
                isWaiting = false;
                if (savedThis) {
                    wrapper.apply(savedThis, savedArgs);
                    savedThis = null;
                    savedArgs = null;
                }
            }, delay);
        };
    }
}
