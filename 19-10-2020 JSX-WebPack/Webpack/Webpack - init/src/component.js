function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(["hello", "webpack"], " ");
    //element.innerHTML = `helo webpack`

    return element;
}