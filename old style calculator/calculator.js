let finish = false;
let a = '';
let b = '';
let sign = '';



const numbersButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const operatorButtons = ['/', 'x', '-', '+'];


const answer = document.querySelector('.answer');
// console.log(numbers)

document.querySelector('.ac').addEventListener('click', (event) => {
    answer.textContent = 0;
    a = '';
    b = '';
    sign = ''
        // finish = true;
})

document.querySelector('.buttons').addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    const key = event.target.textContent;

    console.log(key)
    answer.textContent = key;

    if (numbersButtons.includes(key)) {
        if (b === '' && sign === '') {

            a += key;
            answer.textContent = a;



        } else if (a !== '' && b !== '' && finish) {
            b = key;
            answer.textContent = b;
            finish = false

        } else {
            b += key;
            answer.textContent = b;
            console.log(a, b, sign)
        }
    }
    if (operatorButtons.includes(key)) {
        sign = key;
        answer.textContent = sign;
    }




    if (key === '=') {
        if (b === 'a ') b = a;
        switch (sign) {
            case '-':
                a = a - b;
                break;
            case '+':
                a = (+a) + (+b)
                break;
            case '/':
                a = a / b;
                break;
            case 'x':
                a = a * b;
                break;
        }
        answer.textContent = a;
        finish = true;
    }

})