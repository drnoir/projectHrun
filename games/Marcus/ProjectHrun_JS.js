window.onload = function(){
const MessageBox=document.getElementById('MessageBox')
const ClearButton=document.getElementById('ClearButton')
const LogInButton = document.getElementById('LogInButton')
const UsernameLog=document.getElementById("UsernameLog")
const PasswordLog=document.getElementById("PasswordLog")
const UsernameSign=document.getElementById("UsernameSign")
const PasswordSign=document.getElementById("PasswordSign")
const ConfirmPasswordSign=document.getElementById("ConfirmPasswordSign")
const SignUpButton=document.getElementById("SignUpButton")
const AlertPlaceholder = document.getElementById('AlertPlaceholder')
const CreateAlert = (message, type) => {
    AlertPlaceholder.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
}


if (ClearButton){
ClearButton.addEventListener('click',()=>{
    MessageBox.value=''
})
}

if (LogInButton) {

    LogInButton.addEventListener('click', () => {
        if (UsernameLog.value === '' || PasswordLog.value === ''){
            CreateAlert('Username and Password must be present', "danger")
        }
        else{
            CreateAlert('Login valid', 'success')
        }
    })
}
if (SignUpButton) {

    SignUpButton.addEventListener('click', () => {
        if (UsernameSign.value === '' || PasswordSign.value === ''){
            CreateAlert('Username and password must be present', "danger")
        }
        else if (PasswordSign.value !== ConfirmPasswordSign.value){
            CreateAlert('Passwords must match', "danger")
        }
        else{
            CreateAlert('Sign up valid', 'success')
        }
    })
}
}