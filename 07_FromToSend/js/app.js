const inputs = document.forms["contact_inputs"];
const button = document.getElementById("button");

const inputArr = Array.from(inputs)
const validInputArr = [];

inputArr.forEach(value => {
    if(value.hasAttribute("data-reg")){
        value.setAttribute("is-valid", '0');
        validInputArr.push(value);
    }
})

inputs.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({target}){
    if(target.hasAttribute("data-reg")){
        inputCheck(target);
        console.log(target)
    }
}

function inputCheck(el){
    // console.log(el)
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if(reg.test(inputValue)){
        el.style.boxShadow = '0 0 0 0.25rem rgb(13 110 253 / 25%)';
        el.style.background = 'rgb(232, 240, 254)';
        el.setAttribute("is-valid", '1');
    }
    else if(inputValue === ''){
        el.style.boxShadow = 'none';
        el.style.background = '#efefef';
    }
    else {
        el.style.boxShadow = '0 0 0 0.25rem rgb(255 0 0 / 25%)';
        el.style.background = 'rgb(248,213,217)';
        el.setAttribute("is-valid", '0');
    }
}

function buttonHandler(e) {

    const isAllValid = [];
    validInputArr.forEach(value => {
        isAllValid.push(value.getAttribute("is-valid"))
    })
    isAllValid.length = 3;

    let isValid = isAllValid.reduce((a, b) =>{
        return +a + +b;
    })
    if(isValid === 3){
        button.disabled = false;
        formSend ();
        console.log('успех');
        document.querySelector('.contact_preload').style.display = 'flex';

    }else{
        formNotSend()
        alert('Make sure you filled everything correctly');
    }
}

function formNotSend(){
    button.disabled = true;
    setTimeout(function (){
        button.disabled = false;
    },2000)
}

function formSend (){
    inputs.addEventListener('submit', function (e){
        let elem = e.target;
        let formData = {
            name: elem.querySelector('[name = "name"]').value,
            email: elem.querySelector('[name = "email"]').value,
            telegram: elem.querySelector('[name = "telegram"]').value,
            message: elem.querySelector('[name = "message"]').value,
        };
        inputArr.length = 4;
        inputArr.forEach(value => {
            value.style.boxShadow = 'none';
            value.style.background = '#efefef';
        })
        console.log(formData)
        offValid(inputArr)
    })
}

function offValid(arr){
    return arr.map(value => value.setAttribute("is-valid", '0') )
}