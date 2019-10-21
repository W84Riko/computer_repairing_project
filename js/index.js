const buttonSubmit = document.querySelector('#submitButton');
buttonSubmit.addEventListener('click', submitClicked);

function submitClicked() {
    const nameInput =  document.forms["myForm"]["nameInput"].value;
    const phoneNumberInput =  document.forms["myForm"]["phoneNumberInput"].value;
    const instrumentInput =  document.forms["myForm"]["instrumentInput"].value;
    const requirement =  /^\d[\d\(\)\ -]{4,14}\d$/;
    let errorString = '';
    if(nameInput == '') {
        errorString += " Введіть ім'я!";
    }
    if(phoneNumberInput == '') {
       errorString += " Введіть номер телефону!";
    }
    if(instrumentInput == '') {
       errorString += " Введіть прилад, який потрібно полагодити!";
    }
    if(!requirement.test(phoneNumberInput)){
       errorString += " Неправильно введений номер телефону!";
    }
    if(errorString != '') {
        window.showAlert(errorString, false);
    }
}


function showAlert(message, success = true) {
  const alertTemplate = `<div class="alert alert-dismissible ${
    success ? 'alert-success' : 'alert-danger'
  }" role="alert">
          <strong>${message}</strong>
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
  const alertElement = $('body').append(alertTemplate);
  alertElement.alert();
}

const themeSelect = document.querySelector('#theme').addEventListener("change", changeTheme);

function changeTheme() {
    const selectedIndex = document.querySelector('#theme').selectedIndex;
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    if(selectedIndex == 0) {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        header.style.backgroundColor = "white";
    }
    else {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        header.style.backgroundColor = "#00bc8c";
    }
}