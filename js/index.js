const buttonSubmit = document.querySelector('#submitButton');
buttonSubmit.addEventListener('click', submitClicked);

function submitClicked() {
    const nameInput =  document.forms["myForm"]["nameInput"].value;
    const phoneNumberInput =  document.forms["myForm"]["phoneNumberInput"].value;
    const instrumentInput =  document.forms["myForm"]["instrumentInput"].value;
    const requirement =  /^\d[\d\(\)\ -]{4,14}\d$/;
    if(nameInput == '') {
        alert("Введіть ім'я");
    }
    if(phoneNumberInput == '') {
        alert("Введіть номер телефону");
    }
    if(instrumentInput == '') {
        alert("Введіть прилад, який потрібно полагодити");
    }
    if(!requirement.test(phoneNumberInput))
    {
        alert("Неправильно введений номер телефона");
    }
}