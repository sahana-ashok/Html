// function onClick(){
//     document.getElementById('nameErrorId').innerHTML = 'Please provide minimum length';
// }





function submitForm() {
    let values = true;
    let nameInput = document.formName.nameID.value;
    let numberInput = document.formName.numberId.value;
    // let mailInput = document.formName.mailId.value;
    // let ageInput = document.formName.ageId.value;
    // let cityInput = document.formName.cityId.value;

    // alert(a+" "+b+" "+c+" "+d+" "+e);
    if (nameInput.length < 3 || nameInput.length > 20) {
        values = false;
        errorMsg('nameIdError','Enter min 3 character');
    }
    else{
        true;
    }
    if (numberInput.length != 10) {
        values = false;
        errorMsg('numberIdError','Enter 10 digits number');
    }
    else{
        true;
    }
    // if (ageInput < 18) {
    //     values = false;
    //     errorMsg();
    // }
    // if(cityInput.length < 10){
    //     values = false;
    //     errorMsg();
    // }
    return values;
}
function errorMsg(id, message){
    console.log(id);
    console.log(message);
    document.getElementById(id).innerHTML = message;
}

function clearForm(){
    document.getElementById('nameIdError').innerHTML = '';
}

function clearFields(id){
    document.getElementById(id).innerHTML = '';
}