

let x = '';
let y = '';
let operator = '';
let finish = false;

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let operation = ['÷', '×', '-', '+', '+/-', '%'];

const screen = document.querySelector('.screen p')
// console.log(screen)

function clearAll (){
    x = '';
    y = '';
    operator = '';
    finish = false;
    screen.textContent = '0';

}

console.log(12)

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    // document.getElementsByClassName('zero').onclick = null;
    // document.getElementsByClassName('zero').removeAttribute('onclick');


    // if (screen.textContent === '0' && event.target.classList.contains('zero') && event.target.classList.contains('orange'))return;

    // if(screen.textContent.length === 9){
    //     return;
    // }
    screen.textContent = '';

    const key = event.target.textContent;

//     if(screen.textContent === '0' ){
//
//         event.target.classList.contains('zero')).stopPropagation()
// }


    if (key.includes('0') && operator === '' && y === '' ){
        screen.textContent = '0';
        x = '';
        return;
    }

    // if (key.includes('0') && operator.includes(key) && numbers.includes(key) ){
    //     screen.textContent = '0';
    //     y = '';
    //     return;
    // }
    if(numbers.includes(key)){

        if(y === '' && operator ===''){
            x += key;

            screen.textContent = x;
        }
        else if(x !== '' && y !== '' && finish ){
            y = key;
            finish = false;
            screen.textContent = y;
        }else {
            y += key;
            screen.textContent = y
        }
        console.log(x, y, operator)
        return;
    }



    if(operation.includes(key)){
        operator = key;
        screen.textContent = x;

        console.log(x, y, operator)


    }
    if (operation.includes(key) && screen.textContent === '' && x === ''){
        screen.textContent = '0'
    }


    if(key === '='){

        if (x === '' && y === ''){
            screen.textContent = '0'
            return;
        }

        if (y === '') y = x;

        switch (operator){
            case "+":
                x = +x + +y;
                break;
            case "-":
                x = x - y;
                break;
            case "×":
                x = x * y;
                break;
            case "÷":
                if (y === '0') {
                    screen.textContent = 'Ошибка'
                    x = '';
                    y = '';
                    operator = '';
                    return;
                }
                x = x / y;
                break;
        }
        finish = true;
        screen.textContent = x;
        console.log(x, y, operator)

    }


    // if(event.target.classList.contains('pt')){
    //     console.log(2323)
    //     screen.textContent = '2'
    // }

}

