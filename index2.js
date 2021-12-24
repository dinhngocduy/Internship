let form = document.forms.registerForm;
let userName= form.userName;
let email=form.email;
let password=form.password;
let passwordConfirm = form.passwordConfirm;
let format= /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let alert = document.getElementById("alertUsername");
let button = form.button;


userName.onblur=function(){
    if(userName.value==''){
        userName.classList="invalid";
        alert.innerHTML="Must Not Be Empty!";
    }
    else if(format.test(userName.value)){
        userName.classList="invalid";
        alert.innerHTML="Invalid Username Pattern";
    }
    else{
        userName.classList="valid";
    }
}

userName.onfocus=function(){
    if(userName.classList.contains('invalid')||userName.classList.contains('valid')){
        userName.className='';
        alert.innerHTML='';
    }
}

email.onblur=function(){
    if(email.value==''){
        email.classList="invalid";
        document.getElementById("alertEmail").innerHTML="Must Not Be Empty!";
    }
    else if(!email.value.includes("@")){
        email.classList="invalid"
        document.getElementById("alertEmail").innerHTML="Wrong Email Pattern";
    }
    else{
        email.classList.add("valid");
        return email.className;
    }
    
}

email.onfocus=function(){
    if(email.classList.contains('invalid')||email.classList.contains('valid')){
        email.removeAttribute("class");
        document.getElementById("alertEmail").innerHTML='';
    }
}

password.onblur=function(){
    password.maxLength = "32";
    let uppercase=/[A-Z]/g;
    let lowercase=/[a-z]/g;
    if(password.value==''){
        password.classList="invalid";
        document.getElementById("alertPassword").innerHTML="Must Not Be Empty!";
    }
    else if(password.value.length<8){
        password.classList="invalid"
        document.getElementById("alertPassword").innerHTML="Minimum of 8 characters"
    }
    else{
        if(!uppercase.test(password.value) || !lowercase.test(password.value)){
            password.classList.add("invalid")
            document.getElementById("alertPassword").innerHTML="Need atleast 1 uppercase character or 1 lowercase character"
        }
        else if(password.value.length!==passwordConfirm.value.length &&passwordConfirm.value.length!==0){
            passwordConfirm.classList='invalid'
            document.getElementById("alertPasswordConfirm").style.color='red'
            document.getElementById("alertPasswordConfirm").innerHTML='Password Not Correct!';
            document.getElementById('signUp').disabled = true;
            password.classList="valid"
        }
        else if(password.value.length===passwordConfirm.value.length &&passwordConfirm.value.length!==0){
            document.getElementById("alertPasswordConfirm").innerHTML='Correct!';
            document.getElementById("alertPasswordConfirm").style.color='green'
            passwordConfirm.classList='valid';
            password.classList="valid"
        }
        else{
            password.classList="valid"
        }
    }
}

password.onfocus=function(){
    if(password.classList.contains('invalid')||password.classList.contains('valid')){
        password.className='';
        document.getElementById("alertPassword").innerHTML='';
    }
}
passwordConfirm.onblur=function(){
    if(passwordConfirm.value===''){
        passwordConfirm.classList="invalid";
        document.getElementById("alertPasswordConfirm").style.color='red'
        document.getElementById("alertPasswordConfirm").innerHTML='Must Not Be Empty';
    }
    else if(passwordConfirm.value===password.value){
        passwordConfirm.classList="valid";
    }
}
passwordConfirm.oninput=function(){  
    if(passwordConfirm.value===password.value){
    document.getElementById("alertPasswordConfirm").innerHTML='Correct!';
    document.getElementById("alertPasswordConfirm").style.color='green'
    passwordConfirm.classList='valid'
    form.addEventListener("change", () => {

        document.getElementById('signUp').disabled = !form.checkValidity()
     
     });
    }
    else{
        form.addEventListener("change", () => {

            document.getElementById('signUp').disabled = true;
         
         });
         passwordConfirm.classList='invalid'
        document.getElementById("alertPasswordConfirm").style.color='red'
        document.getElementById("alertPasswordConfirm").innerHTML='Password Not Correct!';
    }
}





function myF(event){
    document.getElementById('result').innerHTML='Sign Up Suscessful!'
    event.preventDefault();
}