var loaders = [];
var isFirst = true;
const main = document.getElementById('main123');

btn.addEventListener('click', () => {
    addLoaderDOM();
    if(isFirst) {
        isFirst = false;
        addLoader();
    }
});

const addLoaderDOM = () => {
    const parentLoader = document.createElement('div');
    parentLoader.classList.add('parent');
    const childLoader = document.createElement('span');
    childLoader.classList.add('child');
    parentLoader.appendChild(childLoader);
    loaders.push(parentLoader);
}

const addLoader = () => {
    const currentLoader = loaders.shift();
    if (!currentLoader) {
        isFirst = true;
        return
    }
    const currentChildLoader = currentLoader.querySelector('.child');

    main.append(currentLoader);
    var count = 0;
    var loaderIntervalref = setInterval(() => {
        console.log(count, loaderIntervalref);
        if(count <= 100) {
            count++;
            currentChildLoader.style.width = `${count}%`;
        } else {
            clearInterval(loaderIntervalref);
            addLoader();
        }
    }, 30);
}

/*
1. onclick -> creating htmk and pushing in array 
2. if clickfirst flag is true then start the chainng function
3. chaining function is addLoader  
    3.1 which will one by one get array's 1st element and append to DOM
    3.2 execute our loading functionality and apply recursion to apply chaning rule until undefined or invalid element is passed which wil be the base case
*/