{
    // call stack, web api, microtask queue, macrotask queue
    //macrotasks: settimeout, setinterval, events(click, image loaded...), render, input\output
    //microtasks: promise, queueMicrotask, mutationObserver
    console.log("1");

    setTimeout(() => {
        console.log("setTimeout1");
        Promise.resolve().then(() => {
            console.log("promise setTimeout1");
        });
        queueMicrotask(() => {
            console.log("queuemicrotask setTimeout1");
        });
        queueMicrotask(() => {
            console.log("queuemicrotask setTimeout2");
        });
    }, 0);

    setTimeout(() => {
        console.log("setTimeout2");
    }, 0);

    Promise.resolve().then(() => {
        console.log("promise1");
    });

    queueMicrotask(() => {
        console.log("queuemicrotask 1");
    });

    Promise.resolve().then(() => {
        console.log("promise2");
    });

    console.log("2");

    `
	"1"
	"2"
	"promise1"
	"promise2"
	"setTimeout1"
	"promise setTimeout1"
	"setTimeout2"
	☁️ "Running fiddle"
	"1"
	"2"
	"promise1"
	"queuemicrotsk 1"
	"promise2"
	"setTimeout1"
	"promise setTimeout1"
	"setTimeout2"
	☁️ "Running fiddle"
	"1"
	"2"
	"promise1"
	"queuemicrotask 1"
	"promise2"
	"setTimeout1"
	"promise setTimeout1"
	"queuemicrotask setTimeout1"
	"queuemicrotask setTimeout2"
	"setTimeout2"
	`;
}
{
    //mutationObserver
    const mutationObserver = new MutationObserver((mutations) => {
        console.log(mutations);
    });
    mutationObserver.observe(header, {
        subtree: true,
        attributeOldValue: true,
        childList: true,
    });
}
