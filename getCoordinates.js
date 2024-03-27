{
    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset,
        };
    }

    function createMessageUnder(elem, html) {
        let message = document.createElement("div");
        message.style.cssText = "position:absolute; color: red";

        let coords = getCoords(elem);

        message.style.left = coords.left + "px";
        message.style.top = coords.bottom + "px";

        message.innerHTML = html;

        return message;
    }

    createMessageUnder(
        document.querySelector("#fwqsxzrqd2 > div > div > pre"),
        "<p>Какой-то текст</p>"
    );
}
