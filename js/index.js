const buttonSubmit = document.querySelector('#submitButton');
buttonSubmit.addEventListener('click', submitClicked);

function submitClicked() {
    const nameInput =  document.forms["myForm"]["nameInput"].value;
    const phoneNumberInput =  document.forms["myForm"]["phoneNumberInput"].value;
    const instrumentInput =  document.forms["myForm"]["instrumentInput"].value;
    const requirement =  /^\d[\d\(\)\ -]{4,14}\d$/;
    if(nameInput == '') {
        window.showAlert("Введіть ім'я", false);
    }
    if(phoneNumberInput == '') {
        window.showAlert("Введіть номер телефону", false);
    }
    if(instrumentInput == '') {
       window.showAlert("Введіть прилад, який потрібно полагодити", false);
    }
    if(!requirement.test(phoneNumberInput))
    {
        window.showAlert("Неправильно введений номер телефона", false);
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