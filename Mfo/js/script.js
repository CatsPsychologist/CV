function updateInputValue(rangeInput, textInput) {
    textInput.value = rangeInput.value;
    updateCalculations(); // Добавляем вызов функции обновления расчётов
}

function updateRangeValue(textInput, rangeInput, step) {
    let value = parseInt(textInput.value, 10);
    if (isNaN(value)) {
        return;
    }
    value = Math.round(value / step) * step;

    if (value < parseInt(rangeInput.min, 10)) {
        value = parseInt(rangeInput.min, 10);
    } else if (value > parseInt(rangeInput.max, 10)) {
        value = parseInt(rangeInput.max, 10);
    }

    rangeInput.value = value;
    textInput.value = value;
    updateCalculations(); // Добавляем вызов функции обновления расчётов
}

function updateCalculations() {
    const loanAmount = parseInt(rangeMoney.value, 10);
    const loanDays = parseInt(rangeDays.value, 10);

    // Процентная ставка в день, например 0.5% в день
    const dailyInterestRate = 0.5;
    const interest = Math.round((loanAmount * (dailyInterestRate / 100) * loanDays));

    // Дата погашения
    const today = new Date();
    const dueDate = new Date();
    dueDate.setDate(today.getDate() + loanDays);
    const formattedDueDate = dueDate.toLocaleDateString('uk-UA');

    // Обновление DOM элементов
    document.querySelector('.return_date').textContent = formattedDueDate;
    document.querySelector('.sum').textContent = `${loanAmount} ₴`;
    document.querySelector('.percent').textContent = `${interest} ₴`;
}

// Получаем элементы и добавляем событие input для синхронизации значений
const rangeMoney = document.querySelector('.range_money');
const inputMoney = document.querySelector('.input_money');

const rangeDays = document.querySelector('.range_input_days');
const inputDays = document.querySelector('.input_days');

// Обновляем значения при изменении ползунков
rangeMoney.addEventListener('input', function() {
    updateInputValue(rangeMoney, inputMoney);
});

rangeDays.addEventListener('input', function() {
    updateInputValue(rangeDays, inputDays);
});

// Обновляем ползунок при изменении текстовых полей
inputMoney.addEventListener('input', function() {
    updateRangeValue(inputMoney, rangeMoney, 1);
});

inputDays.addEventListener('input', function() {
    updateRangeValue(inputDays, rangeDays, 1);
});

// Устанавливаем начальные значения и выполняем начальный расчет
updateInputValue(rangeMoney, inputMoney);
updateInputValue(rangeDays, inputDays);
updateCalculations(); // Выполняем расчет сразу при загрузке страницы
