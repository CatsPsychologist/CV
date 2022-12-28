const form = document.forms["form"];
const btn = document.getElementById("submit_btn")!;

export default function keepData (): void{
    form.addEventListener("change", formChange);
    btn.addEventListener("click",clearStorage);

    getItems();
}

function formChange(): void{
    let formData = {
        name:   form[0].value,
        phone:  form[1].value,
        email:  form[2].value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
}

function getItems(): void{
    if(!localStorage.hasOwnProperty('formData')) { return }
    let obj = JSON.parse((localStorage.getItem('formData')) || "");
    form[0].value = obj.name;
    form[1].value = obj.phone;
    form[2].value = obj.email;
}

function clearStorage(): void{
    form.checkValidity() ? localStorage.clear() : null;
}
