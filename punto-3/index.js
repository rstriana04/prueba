
 getColors = async() => {
    return await fetch('colors.json').then(response => response.json());
}

(async () => {
    const colors = await getColors();
    const formColors = document.querySelector('#colors')
    for (const key in colors) {
        const btn = document.createElement('button');
        btn.setAttribute('id', colors[key]);
        btn.setAttribute('type', 'button');
        btn.appendChild(document.createTextNode(colors[key]));
        formColors.appendChild(btn);
    }
    detectClickBtnYellow();
    detectClickBtnCyan();
    detectClickBtnMagenta();
    detectClickBtnBlack();
})()

detectClickBtnYellow = () => {
    const btnYellow = document.querySelector('#BOTON_AMARILLO');
    if (btnYellow) {
        btnYellow.addEventListener('click', () => {
            document.body.style.backgroundColor = 'yellow';
        });
    }
}

detectClickBtnCyan = () => {
    const btnYellow = document.querySelector('#BOTON_CIAN');
    if (btnYellow) {
        btnYellow.addEventListener('click', () => {
            document.body.style.backgroundColor = 'cyan';
        });
    }
}

detectClickBtnMagenta = () => {
    const btnYellow = document.querySelector('#BOTON_MAGENTA');
    if (btnYellow) {
        btnYellow.addEventListener('click', () => {
            document.body.style.backgroundColor = 'magenta';
        });
    }
}

detectClickBtnBlack = () => {
    const btnYellow = document.querySelector('#BOTON_NEGRO');
    if (btnYellow) {
        btnYellow.addEventListener('click', () => {
            document.body.style.backgroundColor = 'black';
        });
    }
}


