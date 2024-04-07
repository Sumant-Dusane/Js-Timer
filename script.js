var loaders = [];
const main = document.getElementById('main123');

btn.addEventListener('click', () => {
    addLoaderDOM();
    addLoader();
});

const addLoaderDOM = () => {
    const parentLoader = document.createElement('div');
    parentLoader.classList.add('parent');
    const childLoader = document.createElement('span');
    childLoader.classList.add('child');
    parentLoader.appendChild(childLoader);
    main.appendChild(parentLoader);
    loaders.push(parentLoader);
}

const addLoader = () => {
    const currentLoader = loaders.shift();
    const currentChildLoader = currentLoader.querySelector('.child');
    var count = 0;
    var loaderIntervalref = setInterval(() => {
        console.log(count, loaderIntervalref);
        if(count <= 100) {
            count++;
            currentChildLoader.style.width = `${count}%`;
        } else {
            clearInterval(loaderIntervalref);
        }
    }, 30);
}

