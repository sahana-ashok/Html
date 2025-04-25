function Submitform(){
    let name=document.formName.nameName.value
    let num=document.formName.numb.value
    let email=document.formName.emailEmail.value
    let pass=document.formName.passwordPassword.value
    let conf=document.formName.confirmpass.value

    alert(name+num+email+pass+conf)
}