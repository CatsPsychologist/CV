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
    {
        question: 'Выберите лишнее:',
        answers:[
            'Дом', 'Шалаш',
            'Бунгало', 'Скамейка',
            'Хижина'
        ]
    },
    {
        question: 'Продолжите числовой ряд: 18 20 24 32',
        answers:[
            '62', '48', '74',
            '57', '60', '77',
        ]
    },
]
let questionIndex = 0;
let progressBarStep = 100 / (data.length + 1);


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
            showResult();
            countdown( "count_down", 10, 0 );

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
    },1)

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
                <span class="timer" id="count_down">10:00</span> минут
            </p>
            <button class="result_call" onclick="getRequest('https://swapi.dev/api/people/1/')">
                <img src="images/button_call.svg" alt="phone call image">
                Позвонить и прослушать
                результат
            </button>`

    parentMarkUp.innerHTML = childMarkUp;
}
function countdown( elementName, minutes, seconds )
{
    let element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

function getRequest(url){
    const request = new Request(url);
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Что-то пошло не так на API сервере.');
            }
        })
        .then(response => {
            // console.debug(response);
            getMarkUpResults(response)
        }).catch(error => {
        console.error(error);
    });
}

function getMarkUpResults(data){
    console.log(data)
    const parentMarkUp = document.querySelector('.test_wrapper');

    const childMarkUp = `
            <ul class="result_list">
                <li class="result_item">
                    <p class="result_name">Name:</p>
                    <p class="result_value">${data.name}</p>
                </li>
                <li class="result_item">
                    <p class="result_name">Birth Year:</p>
                    <p class="result_value">${data.birth_year}</p>
                </li>
                <li class="result_item">
                    <p class="result_name">Eye color:</p>
                    <p class="result_value">${data.eye_color}</p>
                </li>
                <li class="result_item">
                    <p class="result_name">Gender:</p>
                    <p class="result_value">${data.gender}</p>
                </li>
                <li class="result_item">
                    <p class="result_name">Height:</p>
                    <p class="result_value">${data.height}</p>
                </li>
                <li class="result_item">
                    <p class="result_name">Skin color:</p>
                    <p class="result_value">${data.skin_color}</p>
                </li>
            </ul>
    `

    parentMarkUp.innerHTML = childMarkUp
}

