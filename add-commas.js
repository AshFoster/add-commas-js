const addCommas = (number) => {
    let beforeDecimal =  number.toString().includes('.') ? number.toString().split('.')[0].split('') : number.toString().split('');
    let afterDecimal = number.toString().includes('.') ? '.' + number.toString().split('.')[1] : '';
    if (beforeDecimal.length > 3) {
        for (let i = 1; i <= beforeDecimal.length; i++) {
            beforeDecimal[beforeDecimal.length - i] = 
                i % 3 === 0 && beforeDecimal.length !== i ? "," + beforeDecimal[beforeDecimal.length - i] : beforeDecimal[beforeDecimal.length - i];
        }
        console.log(beforeDecimal.join('') + afterDecimal);
        return beforeDecimal.join('') + afterDecimal;
    } else {
        console.log(number);
        return number;
    }
}

addCommas(1345687856.76);