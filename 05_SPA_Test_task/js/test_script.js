const data = [
    {
        question: 'Ваш пол:',
        answers:[
            'Мужчина', 'Женщина'
        ]
    },
    {
        question: 'Укажите Ваш возраст:',
        answers:[
            'До 18', 'От 18 до 28',
            'От 29 до 35', 'От 36'
        ]
    },
    // {
    //     question: 'Выберите лишнее:',
    //     answers:[
    //         'Дом', 'Шалаш',
    //         'Бунгало', 'Скамейка',
    //         'Хижина'
    //     ]
    // },
    // {
    //     question: 'Продолжите числовой ряд: 18 20 24 32',
    //     answers:[
    //         '62', '48', '74',
    //         '57', '60', '77',
    //     ]
    // },
]
let questionIndex = 0;
let progressBarStep = 100 / (data.length + 1);

console.log(document.location)

setTimeout(function init(){
    const nextBtn = document.getElementById('testBtn')
    const quiz = document.querySelector('.quiz')
    checkRadio(quiz, nextBtn)

    document.getElementById('progress_bar').value = progressBarStep;

},100)

function checkRadio(selector, btn){

    selector.addEventListener('change', event => {
        if (event.target.classList.contains('input_radio')){
            btn.disabled = false;
        }
    })
    btn.addEventListener('click', () => {

        document.getElementById('progress_bar').value += progressBarStep

        if (data.length - 1 === questionIndex){
            document.querySelector('.test_results').classList.remove('hide');
            showResult()
            return
        }
        questionIndex ++;

        fillContent(selector, data);
        btn.disabled = true;
    })
    fillContent(selector, data);
}

function fillContent(parentSelector, dataArr){
    parentSelector.innerHTML = getMarkUp(dataArr);
}

function getMarkUp(dataArr){

    let question = `<h2 class="quiz_heading">
                        ${dataArr[questionIndex].question}
                    </h2>`
    let answers = dataArr[questionIndex].answers
        .map(answer =>{
            return `
            <li class="quiz_item">
                <label class="items_label">
                    ${answer}
                    <input type="radio" name="radio" class="input_radio">
                    <span class="checkmark"></span>
                </label>
                
            </li>
       `
        }).join('')
    return question + answers
}

function showResult(){
    setTimeout(()=>{
        document.querySelector('.test_results').classList.add('hide');
        document.querySelector('.footer_test').classList.remove('hide')
    },3000)

    const parentMarkUp = document.querySelector('.test_wrapper');

    let childMarkUp = `
            <h2 class="result_ready">
                ВАШ РЕЗУЛЬТАТ РАСЧИТАН:
            </h2>
            <p class="result_info">
                <u>Вы относитесь к 3%</u> респондентов, чей уровень интеллекта более чем на
                15 пунктов отличается от среднего в большую или меньшую сторону!
            </p>
            <p class="result_get">
                СКОРЕЕ ПОЛУЧИ СВОЙ РЕЗУЛЬТАТ!
            </p>
            <p class="result_description">
                В целях защиты персональных
                данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
            </p>
            <p class="result_timer">
                Звоните скорее, запись доступна всего
                <span class="timer">10:00</span> минут
            </p>
            <button class="result_call">
                <img src="../images/button_call.svg" alt="phone call image">
                Позвонить и прослушать
                результат
            </button>`

    parentMarkUp.innerHTML = childMarkUp;
}
