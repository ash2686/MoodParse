// import { createClient } from "@supabase/supabase-js";

const supabaseClient = supabase.createClient(
  "https://dnqlpmmrrixhxvngmwsp.supabase.co",
  "sb_publishable_GelgjOJz4pQgtvN3Ki7IgA_SkFIaqyt"
);


let themeButton = document.querySelector(".theme-button-block");
let mainContainer = document.querySelector(".main-container");
const submitBtn = document.getElementById("submit-button");
let emotionCloud = document.getElementById("cloud");
let currentCloud = document.querySelector(".current-cloud");
let numberOfEntriesBlock = document.getElementById("entry-count");
let pastEntries = document.querySelector("#past-entries");
let pastEntryCount = document.getElementById("numEntries");
let delButton;
let newEntryButton = document.getElementById("new-entry-button");
let userInput = document.querySelector("#entry");
let clickedEmotionSelect = document.querySelector("#clicked-emotion");
let selectedEmotionBlock = document.querySelector(".emotion-selected-block");
let settingsGear = document.querySelector("#gear");
let settings = document.querySelector(".settings");
let pastLabel = document.querySelector('label[for="past-entries"]');

let themeIcon = document.getElementById("theme-icon");
const savedTheme = localStorage.getItem("theme") || "light";
console.log(savedTheme);

let uniqueEmotionsCount;
let cloudDivs;


//************************************** FORM LOGIC **********************************************
let loginButton = document.getElementById("login-button");
let logoutButton = document.getElementById("logout-button");

let delAccount = document.getElementById("delete-account");

let loginQuestion = document.getElementById("login-question");
let registerQuestion = document.getElementById("register-question");
let registerForm = document.getElementById("user-form");
let loginForm = document.getElementById("user-login-form");
let formTitle = document.getElementById("form-title");
let closeFormButton = document.getElementById("close-form");
let formContainer = document.querySelector(".form-container");
let formBlockDiv = document.querySelector(".form-block-div");

let registerBtn = document.getElementById("register-user");
let loginBtn = document.getElementById("login-user");

let resetForm = document.getElementById("reset-form");
let forgotLink = document.getElementById("forgot-password");
let backToLoginButton = document.getElementById("back-to-login");

registerBtn.disabled = true;
// loginBtn.disabled = true;

// *********************************** RESET FORN***************************************************



// supabaseClient.auth.onAuthStateChange((event, session) => {
//   // console.log("EVENT:", event);
//   // console.log("SESSION:", session);

//   if (event === "PASSWORD_RECOVERY") {
//     sessionStorage.setItem("passwordRecovery", "true");
//   }
// });

// console.log("Windows href is - ",window.location.href);

forgotLink.addEventListener("click", async () => {
  // loginForm.style.display = "none";
  //  resetForm.style.display = "flex";

   formTitle.textContent = "Reset Password";

    const email = prompt("Enter your email address");

    if (!email) return;

    const { error } = await supabaseClient.auth.resetPasswordForEmail(
      email,
      {
         redirectTo: "http://127.0.0.1:5501/index.html"
      }
    );

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password reset email sent!");
  });

  backToLoginButton.addEventListener("click",()=>{
    resetForm.style.display = "none";
    loginForm.style.display = "flex";
    formTitle.textContent = "Login";
  })


// window.addEventListener("load", () => {

// });


//  ************************** Reset Passwrod One *************************************

let resetPasswordOne, resetPasswordTwo;
let resetPassOne = document.getElementById("reset-one");
let resetPassTwo = document.getElementById("reset-two");

resetPassTwo.disabled = true;
let resetOneBlock = resetPassOne.parentElement;

let resetOneCheck = document.getElementById("reset-one-check");
let resetOneUncheck = document.getElementById("reset-one-uncheck");
let resetOneGuide = document.getElementById("reset-one-guide");

let ResetCheckOne = false;
let ResetCheckTwo = false;
let ResetCheckThree = false;
let ResetCheckFour = false;

resetPassOne.addEventListener("focus",(e)=>{
   resetPasswordOne = e.target.value;
  // console.log("FOCUS EVENT IS FIRED!");
  if(resetPasswordOne.trim().length>0){
   resetOneGuide.style.display = "flex";
   resetOneCheck.style.display = "none";
   resetOneUncheck.style.display = "block";
   resetPassOne.type ="password";
}else{
   resetOneGuide.style.display = "none";
   resetOneCheck.style.display = "none";
   resetOneUncheck.style.display ="none";
   resetOneBlock.style.outline = "none"
}
})

resetPassOne.addEventListener("input",(e)=>{

    // console.log(e.target.value);
    resetPasswordOne = e.target.value;
    
    if(resetPasswordOne.trim().length>0){
    resetOneUncheck.style.display ="block";
    resetOneGuide.style.display = "flex";
    }else{
      resetOneBlock.style.outline = "none";
    }

    if(/[a-z]/.test(resetPasswordOne)){      
        document.querySelector(".reset-condition-one").style.color = "green";
        ResetCheckOne = true;
        
    }else{
        document.querySelector(".reset-condition-one").style.color = "red";
        ResetCheckOne = false;
    }

     if(/[A-Z]/.test(resetPasswordOne)){
        document.querySelector(".reset-condition-two").style.color = "green";
        ResetCheckTwo = true;
     }else{
        document.querySelector(".reset-condition-two").style.color = "red";
        ResetCheckTwo = false;
    }

      if(/[0-9]/.test(resetPasswordOne)){
        document.querySelector(".reset-condition-three").style.color = "green";
        ResetCheckThree = true;
     }else{
        document.querySelector(".reset-condition-three").style.color = "red";
        ResetCheckThree = false;
    }

     if(resetPasswordOne.length >= 6){
        document.querySelector(".reset-condition-four").style.color = "green";
        ResetCheckFour = true;
     }else{
        document.querySelector(".reset-condition-four").style.color = "red";
        ResetCheckFour =false;
    }    

       if(ResetCheckOne && ResetCheckTwo && ResetCheckThree && ResetCheckFour){
      
        resetPassTwo.disabled = false;
        resetOneBlock.style.outline = "4px solid green"
       }else{
        resetOneBlock.style.outline = "4px solid red";
        resetPassTwo.disabled = true;
        e.preventDefault();
       }

})

resetPassOne.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
       resetPasswordOne = e.target.value;
  }
    
    if(resetPasswordOne.trim().length>0){
    resetOneUncheck.style.display ="block";
    resetOneGuide.style.display = "flex";
    }else{
      resetOneBlock.style.outline = "none";
    }

    if(/[a-z]/.test(resetPasswordOne)){      
        document.querySelector(".reset-condition-one").style.color = "green";
        ResetCheckOne = true;
        
    }else{
        document.querySelector(".reset-condition-one").style.color = "red";
        ResetCheckOne = false;
    }

     if(/[A-Z]/.test(resetPasswordOne)){
        document.querySelector(".reset-condition-two").style.color = "green";
        ResetCheckTwo = true;
     }else{
        document.querySelector(".reset-condition-two").style.color = "red";
        ResetCheckTwo = false;
    }

      if(/[0-9]/.test(resetPasswordOne)){
        document.querySelector(".reset-condition-three").style.color = "green";
        ResetCheckThree = true;
     }else{
        document.querySelector(".reset-condition-three").style.color = "red";
        ResetCheckThree = false;
    }

     if(resetPasswordOne.length >= 6){
        document.querySelector(".reset-condition-four").style.color = "green";
        ResetCheckFour = true;
     }else{
        document.querySelector(".reset-condition-four").style.color = "red";
        ResetCheckFour =false;
    }    

       if(ResetCheckOne && ResetCheckTwo && ResetCheckThree && ResetCheckFour){
      
        resetPassTwo.disabled = false;
        resetOneBlock.style.outline = "4px solid green"
       }else{
        resetOneBlock.style.outline = "4px solid red";
        resetPassTwo.disabled = true;
        // e.preventDefault();
       }
});

resetPassOne.addEventListener("change",(e)=>{
 resetPasswordOne = e.target.value;

  if(resetPasswordOne.trim().length>0){
    resetOneUncheck.style.display ="block";
    resetOneGuide.style.display = "flex";
    }else{
      resetOneBlock.style.outline = "none";
    }

if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(resetPasswordOne)) || !(resetPasswordOne.length>=6)){
        resetOneBlock.style.outline = "4px solid red";       
    }else{
        resetOneBlock.style.outline = "4px solid green";     
    }

//  passOneBlock.style.outline = "none";
 resetOneGuide.style.display= "none";
 resetOneUncheck.style.display = "block";
});

resetOneUncheck.addEventListener("click",()=>{
      if(resetPassOne.type === "password"){
        resetPassOne.type = "text";
        resetOneUncheck.style.display = "none";
    resetOneCheck.style.display = "block";
    
    }else{
        resetPassOne.type = "password";
        resetOneUncheck.style.display = "block";
    resetOneCheck.style.display = "none";
    }
});

resetOneCheck.addEventListener("click",()=>{
    if(resetOne.type === "text"){
        resetOne.type = "password";
        resetOneUncheck.style.display = "block";
         resetOneCheck.style.display ="none";
         
    }else{
        resetOne.type = "text";
        resetOneUncheck.style.display = "none";
    resetOneCheck.style.display = "block";
    resetOneCheck.style.color ="black";
    }
})

// **************************************** Reset Password 2 *******************************************

let resetTwoBlock = resetPassTwo.parentElement;

let resetTwoCheck = document.getElementById("reset-two-check");
let resetTwoUncheck = document.getElementById("reset-two-uncheck");



resetPassTwo.addEventListener("input",(e)=>{
  resetTwoUncheck.style.display ="block";
})


resetPassTwo.addEventListener("change", (e) => {
  resetPasswordTwo = e.target.value;
  resetTwoUncheck.style.display = "block";

  if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(resetPasswordTwo)) || !(resetPasswordTwo.length>=6)){
        resetTwoBlock.style.outline = "4px solid red";
        //  passOneGuide.style.outline = "4px solid red";
        //  passOneValid = false;
    }
});

resetPassTwo.addEventListener("blur",(e)=>{
  //  passOneGuide.style.display = "none";
  resetTwoUncheck.style.display = "block";
  resetTwoCheck.style.display = "none";
   resetPassTwo.type ="password";
})

resetPassTwo.addEventListener("focus",(e)=>{
   resetPasswordTwo = e.target.value;

   if(resetPasswordTwo.trim().length>0){
  resetTwoCheck.style.display = "none";
  resetTwoUncheck.style.display = "block";
   resetPassTwo.type ="password";
}else{
  resetTwoCheck.style.display = "none";
  resetTwoUncheck.style.display = "none"
}
})


resetTwoUncheck.addEventListener("click",()=>{
   
    if(resetPassTwo.type === "password"){
        resetPassTwo.type = "text";
         resetTwoUncheck.style.display = "none";
         resetTwoCheck.style.display = "block";
    }else{
        
      resetPassTwo.type = "password";
        resetTwoUncheck.style.display = "block";
        resetTwoCheck.style.display = "none";
    }
});

resetTwoCheck.addEventListener("click",()=>{
    if(resetPassTwo.type === "text"){
        resetPassTwo.type = "password";
        resetTwoUncheck.style.display = "block";
        resetTwoCheck.style.display ="none";
    }else{
        resetPassTwo.type = "text";
         resetTwoUncheck.style.display = "none";
         resetTwoCheck.style.display = "block";
         resetTwoCheck.style.color ="black";
    }
})




//  ********************************* RESET FORM SUBMIT **************************************


resetForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // let newPass = document.getElementById("new-pass").value;
  // let confirmPass = document.getElementById("confirm-pass").value;
 console.log("reset fom clicked")
  let newPass = resetPasswordOne;
  let confirmPass = resetPasswordTwo;

  console.log(newPass);
  console.log(confirmPass);   

  // if (!newPass.trim() && !confirmPass.trim() &&  newPass.trim() === newPass.trim() &&  newPass.trim().length >= 6 && confirmPass.trim().length >= 6){
   if(newPass === confirmPass){
            const newPassword = newPass;

            const {
              data: { session },
              error: sessionError,
            } = await supabaseClient.auth.getSession();

            console.log("Session:", session);
            console.log("Session Error:", sessionError);

           const { error } = await supabaseClient.auth.updateUser({
            password: newPassword,
            });

                if (error) {
                  alert(error.message);
                } else {
                  alert("Password updated successfully");
                }

                sessionStorage.removeItem("passwordRecovery");
  } else {
    
    alert("something went wrong, try again");
  }

  resetForm.style.display = "none";
  loginForm.style.display = "flex";
});



// ******************************* REGISTRATION FORM VALIDATION *******************************************


let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two");
let registerUserButton = document.getElementById("register-user");
let firstPass, secondPass;


const inputBlock = userName.parentElement;
let info = document.createElement("div");
info.id = "name-info";
info.style.display = "none";
inputBlock.appendChild(info);

let approved = document.getElementById("approved");
let declined = document.getElementById("declined");


userName.addEventListener("input",(e)=>{  
    
    registerBtn.disabled = false;
    declined.style.display="none";
    approved.style.display="none";
    info.style.display ="none";

    let name = e.target.value;


     if(!(/^[A-Za-z ]*$/.test(name) && name.trim().length>=2)) {  
       e.preventDefault();      
     }

})

userName.addEventListener("change",(e)=>{
        let name = e.target.value;
        //  declined.style.display="none";
        //  approved.style.display="none";

           if(name.trim() === ""){
         info.style.display ="flex";
         info.style.color ="red";
         info.textContent ="Empty field not allowed!"
        declined.style.display="block";
        approved.style.display="none";
        inputBlock.style.outline ="4px solid red";
    }

        if(name.trim().length <2){
            info.style.display = "flex";
            info.style.color ="red";
            info.textContent = "Name has to be atlest 2 characters!";           
             inputBlock.style.outline = "4px solid red";
             declined.style.display = "block";
        }

        if(/^[A-Za-z ]*$/.test(name) && name.trim().length>=2){                   
            inputBlock.style.outline = "none";
            approved.style.display = "block"
        }else{
            info.style.color ="red";
            info.textContent = "Only alphabets allowed!";           
            info.style.display = "flex";
            inputBlock.style.outline = "4px solid red";
            declined.style.display = "block";
        }

})

userName.addEventListener("focus",(e)=>{
        e.target.value = e.target.value;
        info.style.display ="none";
        declined.style.display="none";
        approved.style.display="none";
        inputBlock.style.outline ="none";
})


// ***************************** EMAIL VALIDATION ***********************************************

let emailBlock = userEmail.parentElement;
let emailInfo = document.createElement("div");
emailInfo.id = "email-info";
emailInfo.style.display ="none";
emailBlock.appendChild(emailInfo);

let eApproved = document.getElementById("e-approved");
let eDeclined = document.getElementById("e-declined");

userEmail.addEventListener("input",(e)=>{
    eDeclined.style.display="none";
      eApproved.style.display="none";
      emailInfo.style.display ="none";

      let email = e.target.value;

   

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  // emailBlock.style.outline = "4px solid red";
  e.preventDefault();
 }
 //else{
//     // emailBlock.style.outline = "4px solid green";        
// }
})

userEmail.addEventListener("change",(e=>{
    let email = e.target.value;
         eDeclined.style.display="none";
         eApproved.style.display="none";

          if (email.trim() === "") {
            emailInfo.style.display = "flex";
            emailInfo.textContent = "Empty fields not allowed!";
            eDeclined.style.display = "none";
            eApproved.style.display = "none";
            emailBlock.style.outline = "none";
          }

           
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  

        if(emailRegex.test(email) && email.trim().length>=2){                        
            emailBlock.style.outline = "none";
            eApproved.style.display = "block"
        }else{
            emailInfo.style.color ="red";
            emailInfo.textContent = "Invalid Email!";           
            emailInfo.style.display = "flex";
            emailBlock.style.outline = "4px solid red";
            eDeclined.style.display = "block";
        }
}))
 

userEmail.addEventListener("focus",(e)=>{
        e.target.value = e.target.value;
        emailInfo.style.display ="none";
        eDeclined.style.display="none";
        eApproved.style.display="none";
        emailBlock.style.outline ="none";
    })


//************************************ PASSWORD CHECK *************************************************
passTwo.disabled = true;
let passOneBlock = passOne.parentElement;

let pOneCheck = document.getElementById("p-one-check");
let pOneUncheck = document.getElementById("p-one-uncheck");
let passOneGuide = document.getElementById("pass-one-guide");

let checkOne = false;
let checkTwo = false;
let checkThree = false;
let checkFour = false;

// let checkAll = checkOne && checkTwo && checkThree && checkFour;
passOne.addEventListener("input",(e)=>{

    // console.log(e.target.value);
    firstPass = e.target.value;
    
    if(firstPass.trim().length>0){
    pOneUncheck.style.display ="block";
    passOneGuide.style.display = "flex";
    }

    if(/[a-z]/.test(firstPass)){
        document.querySelector(".condition-one").style.color = "green";
        checkOne = true;
    }else{
        document.querySelector(".condition-one").style.color = "red";
        checkOne = false;
    }

     if(/[A-Z]/.test(firstPass)){
        document.querySelector(".condition-two").style.color = "green";
        checkTwo = true;
     }else{
        document.querySelector(".condition-two").style.color = "red";
        checkTwo = false;
    }

      if(/[0-9]/.test(firstPass)){
        document.querySelector(".condition-three").style.color = "green";
        checkThree = true;
     }else{
        document.querySelector(".condition-three").style.color = "red";
        checkThree = false;
    }

     if(firstPass.length >= 6){
        document.querySelector(".condition-four").style.color = "green";
        checkFour = true;
     }else{
        document.querySelector(".condition-four").style.color = "red";
        checkFour =false;
    }    

       if(checkOne && checkTwo && checkThree && checkFour){
      
        passTwo.disabled = false;
        passOneBlock.style.outline = "4px solid green"
       }else{
        passOneBlock.style.outline = "4px solid red";
        passTwo.disabled = true;
       }

})

passOne.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
        firstPass = e.target.value;
  }

   if(firstPass.trim().length>0){
    pOneUncheck.style.display ="block";
    passOneGuide.style.display = "flex";
    }

    if(/[a-z]/.test(firstPass)){
        document.querySelector(".condition-one").style.color = "green";
        checkOne = true;
    }else{
        document.querySelector(".condition-one").style.color = "red";
        checkOne = false;
    }

     if(/[A-Z]/.test(firstPass)){
        document.querySelector(".condition-two").style.color = "green";
        checkTwo = true;
     }else{
        document.querySelector(".condition-two").style.color = "red";
        checkTwo = false;
    }

      if(/[0-9]/.test(firstPass)){
        document.querySelector(".condition-three").style.color = "green";
        checkThree = true;
     }else{
        document.querySelector(".condition-three").style.color = "red";
        checkThree = false;
    }

     if(firstPass.length >= 6){
        document.querySelector(".condition-four").style.color = "green";
        checkFour = true;
     }else{
        document.querySelector(".condition-four").style.color = "red";
        checkFour =false;
    }    

        if(checkOne && checkTwo && checkThree && checkFour){
        
        passTwo.disabled = false;
        passOneBlock.style.outline = "4px solid green";
       }else{
        passOneBlock.style.outline = "4px solid red";
        passTwo.disabled = true;
       }
});

passOne.addEventListener("change",(e)=>{
 firstPass = e.target.value;

if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(firstPass)) || !(firstPass.length>=6)){
        passOneBlock.style.outline = "4px solid red";       
    }else{
        passOneBlock.style.outline = "4px solid green";     
    }

 passOneBlock.style.outline = "none";
 passOneGuide.style.display= "none";
 pOneUncheck.style.display = "block";
});

// passOne.addEventListener("blur",(e)=>{
//    firstPass = e.target.value;

//    if(firstPass.trim().lenght>0){
//     pOneUncheck.style.display = "block";
//     passOne.type ="password";
//     pOneCheck.style.display = "none";
//     passOneGuide.style.display = "none";
//    }else{
//    passOneGuide.style.display = "none";
//    pOneCheck.style.display = "none";
//    pOneUncheck.style.display = "none";
//    passOne.type ="password";
//    }
// })

passOne.addEventListener("focus",(e)=>{
   firstPass = e.target.value;
  // console.log("FOCUS EVENT IS FIRED!");
  if(firstPass.trim().length>0){
   passOneGuide.style.display = "flex";
   pOneCheck.style.display = "none";
   pOneUncheck.style.display = "block";
   passOne.type ="password";
}else{
   passOneGuide.style.display = "none";
   pOneCheck.style.display = "none";
   pOneUncheck.style.display ="none";
   passOneBlock.style.outline = "none"
}
})



// console.log(passTwo)

pOneUncheck.addEventListener("click",()=>{
      if(passOne.type === "password"){
        passOne.type = "text";
        pOneUncheck.style.display = "none";
    pOneCheck.style.display = "block";
    
    }else{
        passOne.type = "password";
        pOneUncheck.style.display = "block";
    pOneCheck.style.display = "none";
    }
});

pOneCheck.addEventListener("click",()=>{
    if(passOne.type === "text"){
        passOne.type = "password";
        pOneUncheck.style.display = "block";
         pOneUncheck.style.color ="black";
         pOneCheck.style.display ="none";
         
    }else{
        passOne.type = "text";
        pOneUncheck.style.display = "none";
    pOneCheck.style.display = "block";
    pOneCheck.style.color ="black";
      

    }
})

// ************************************** PASSWORD TWO ***********************************************

let passTwoBlock = passTwo.parentElement;

let pTwoCheck = document.getElementById("p-two-check");
let pTwoUncheck = document.getElementById("p-two-uncheck");


passTwo.addEventListener("input",(e)=>{
  pTwoUncheck.style.display ="block";
})


passTwo.addEventListener("change", (e) => {
  secondPass = e.target.value;
  pTwoUncheck.style.display = "block";

  if(!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(secondPass)) || !(secondPass.length>=6)){
        passTwoBlock.style.outline = "4px solid red";
        //  passOneGuide.style.outline = "4px solid red";
        //  passOneValid = false;
    }
});

passTwo.addEventListener("blur",(e)=>{
  //  passOneGuide.style.display = "none";
   pTwoCheck.style.display = "none";
   pTwoUncheck.style.display = "block";
   passTwo.type ="password";
})

passTwo.addEventListener("focus",(e)=>{
   secondPass = e.target.value;

   if(secondPass.trim().length>0){
   pTwoCheck.style.display = "none";
   pTwoUncheck.style.display = "block";
   passTwo.type ="password";
}else{
  pTwoCheck.style.display = "none";
  pTwoCheck.style.display = "none"
}
})


pTwoUncheck.addEventListener("click",()=>{
   
    if(passTwo.type === "password"){
        passTwo.type = "text";
         pTwoUncheck.style.display = "none";
         pTwoCheck.style.display = "block";
    }else{
        passTwo.type = "password";
        pTwoUncheck.style.display = "block";
        pTwoCheck.style.display = "none";
    }
});

pTwoCheck.addEventListener("click",()=>{
    if(passTwo.type === "text"){
        passTwo.type = "password";
        pTwoUncheck.style.display = "block";
         pTwoCheck.style.display ="none";
    }else{
        passTwo.type = "text";
        pTwoUncheck.style.display = "none";
         pTwoCheck.style.display = "block";
         pTwoCheck.style.color ="black";
    }
})

// ********************************** REGISTRATION FORM SUBMISSION *******************************************


let formSubmitted = false;
registerForm.addEventListener("submit",async (e)=>{
    e.preventDefault();
    console.log("Form Submitted!");
    let email = userEmail.value;
    let password = firstPass;
    let name = userName.value.trim().split(" ")[0];

    

    if(userName.value.trim() ==="" ||  userEmail.value.trim() ===""){
      e.preventDefault();
      alert("Name and Email field can't be empty!");
      return;
    }

     if(firstPass.trim().length !== secondPass.trim().length || firstPass.trim() !== secondPass.trim()){            
        e.preventDefault(); // ⛔ stop form submission
        alert("Passwords do not match!");
        return;
    }
    // alert("Form submitted successfully!");
    // const formData = new FormData(registerForm);
    // const data = Object.fromEntries(formData.entries());

    // console.log(data);

     passOneBlock.style.outline = "none";
        passTwoBlock.style.outline = "none";
        eApproved.style.display = "none";
        approved.style.display = "none";
        pOneCheck.style.display ="none"
        pOneUncheck.style.display ="none";
        pTwoCheck.style.display = "none";
        pTwoUncheck.style.display = "none";


    // ********************************** DB Integration **************************

// const { data, error } = await supabaseClient.auth.signUp({
//   email,
//   password,
// });

const { data, error } = await supabaseClient.auth.signUp({
  email,
  password,
  options: {
    data: {
      display_name: name
    }
  }
});

if (error) {
  alert(error.message);
  return;
}  
// else{
//   formSubmitted = true;
//   localStorage.setItem('username', name);
// }
console.log(data);
alert("Account created");
registerForm.reset();
  
document.getElementsByClassName("welcome-block")[0].style.display = "flex";

window.location.reload();

})

// let newUser = localStorage.getItem('username') || "";




// *********************************************** LOGIN FORM VALIDATION ************************************************



let loginInput = document.getElementById("user-login-pass");
let loginPassCheck = document.getElementById("login-pass-check");
let loginPassUncheck = document.getElementById("login-pass-uncheck");

loginInput.addEventListener("focus",(e)=>{
    let pass = e.target.value;

    if(pass.trim().length>0){
          loginPassUncheck.style.display = "block";
    }
})

loginInput.addEventListener("input",(e)=>{
        let pass = e.target.value;

         if(pass.trim().length>0){
          loginPassUncheck.style.display = "block";
    }else{
      loginPassUncheck.style.display = "none";
    }

})

loginPassUncheck.addEventListener("click",()=>{
     loginPassUncheck.style.display = "none";
     loginPassCheck.style.display = "block";
     if(loginInput.type === "password"){
         loginInput.type = "text";
     }else{
       loginInput.type = "password";
     }
})

loginPassCheck.addEventListener("click",()=>{
     loginPassUncheck.style.display = "block";
     loginPassCheck.style.display = "none";
     if(loginInput.type === "text"){
         loginInput.type = "password";
     }else{
       loginInput.type = "text";
     }
})


// *********************************************** LOGIN FORM SUBMISSION ******************************************************


const loginUserButton = document.getElementById("login-user");

loginUserButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.getElementById("user-login-email").value;
  const password = document.getElementById("user-login-pass").value;

  // const rememberMe = document.getElementById("remember-me").checked;

  // localStorage.setItem("rememberMe", rememberMe);

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if (error) {
    alert(error.message);
    return;
  }

  console.log(data);  
  // alert("Logged in");
  window.location.reload();
  // submitBtn.disabled = false;
  // userInput.disabled = false;
});

// **************************************** LOGOUT LOGIC ********************************************************


logoutButton.addEventListener("click", async () => {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error(error.message);
    return;
  }

  console.log("User logged out successfully!");

  document.getElementsByClassName("welcome-block")[0].style.display = "flex";

  // optional: reset UI
  window.location.reload();
});



// **************************************** Account Deletion *************************************************


delAccount.addEventListener("click", async () => {
  console.log("Account Delete Block!");

  const confirmDelete = confirm(
    "This will permanently delete your account and all data. Continue?"
  );

  if (!confirmDelete) return;

  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  if (!session) {
    alert("Not logged in");
    return;
  }

  const res = await fetch(
    "https://dnqlpmmrrixhxvngmwsp.supabase.co/functions/v1/delete-account",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    }
  );

  if (!res.ok) {
    const msg = await res.text();
    console.error(msg);
    alert("Failed to delete account");
    return;
  }

  await supabaseClient.auth.signOut();
  alert("Account deleted");
  location.reload();
});

// ******************************* END OF REGISTRATION FORM VALIDATION *******************************************







loginQuestion.addEventListener("click",()=>{
    console.log("Link clicked!");
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
    formTitle.textContent = "Registration Form"
});

registerQuestion.addEventListener("click",()=>{
    registerForm.style.display = "none";
    loginForm.style.display = "flex";
    formTitle.textContent = "Login"
});

loginButton.onclick = ()=>{

  
    if(formContainer.classList.contains("close")){
    formContainer.classList.remove("close");
   }

   formContainer.classList.toggle("open");
   loginForm.style.display="flex";
   registerForm.style.display ="none";
   resetForm.style.display="none";
   formTitle.textContent = "Login";

   
}

closeFormButton.addEventListener("click",()=>{
   if(formContainer.classList.contains("open")){
    formContainer.classList.remove("open");
   }

   formContainer.classList.add("close");
})
// // // ************************************** END OF FORM LOGIC **********************************************

//  *********************************** MISC LOGIC *********************************************

settingsGear.onclick =(e)=>{
  e.stopPropagation();
   if(settings.classList.contains("close")){
    settings.classList.remove("close");
  }
    settings.classList.toggle("open");
}

settings.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("click",()=>{
  if(settings.classList.contains("open")){
    settings.classList.remove("open");
  }
  settings.classList.add("close")
})

document.addEventListener("click",()=>{
  settings.classList.remove("open");
})

themeButton.addEventListener("click",()=>{
    themeButton.classList.toggle("slide");
    mainContainer.classList.toggle("dark");
    if (themeIcon.src.includes("sun.png")) {
    themeIcon.src = "./assets/moon.png";
    localStorage.setItem("theme", "light");

  } else {
    localStorage.setItem("theme", "dark");
    themeIcon.src = "./assets/sun.png";
  }
})


 function UTC2Local(utc) {
   const local = new Date(utc).toLocaleString("en-NZ", {
     timeZone: "Pacific/Auckland",
     hour12: true,
     year: "numeric",
     month: "2-digit",
     day: "2-digit",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit",
   });

  //  console.log(local);
   return local;
 }

// ********************************************************** MAIN LOGIC **********************************************

let entries = [];
let emotionsPool = [];
let numberOfEntries = 0;
let currentEmotions = [];


// console.log(entries);
// console.log(emotionsPool);

async function fetchEntries(userId) {
  const { data, error } = await supabaseClient
    .from("entries")
    .select(`
      *,
      entry_emotions (
        emotion
      )
    `)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Fetch error:", error);
    return [];
  }

  return data;
}

function normalizeEntries(data = []) {
  if (!Array.isArray(data)) return [];

  return data.map(entry => ({
    id: entry.id,
    text: entry.text,
    createdAt: entry.created_at,
    emotions: entry.entry_emotions?.map(e => e.emotion) || []
  }));
}

async function entriesDB(){
  const { data: { user },} = await supabaseClient.auth.getUser();

   if (!user) return [];
  let rawEntries = await fetchEntries(user.id);
  return normalizeEntries(rawEntries);
}




// *************************************** NEW ENTRY BUTTON *************************************

newEntryButton.onclick = ()=>{
  userInput.value = "";
  userInput.focus();
  currentCloud.innerHTML = "";
  pastEntries.value ="";
  clickedEmotionSelect.value="";
  selectedEmotionBlock.style.display = "none";
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = "#198754";
  submitBtn.textContent = "Extract"
  delButton.style.display = "none";
  renderEmotions(emotionsPool);

}



//******************************************* WINDOWS ON LOAD *********************************************
window.onload = async () => { 


if (window.location.href.includes("type=recovery")) {
  formContainer.style.display = "flex";
  formBlockDiv.style.display = "flex";
  loginForm.style.display = "none";
  resetForm.style.display = "flex";
  formTitle.textContent = "Reset Password";
  return;
}
  
let { data: { session },} = await supabaseClient.auth.getSession();

if (session) {
  console.log("User logged in");
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  submitBtn.disabled = false;
  userInput.disabled = false;
} else {
  console.log("No session");
  loginButton.style.display = "block";
  logoutButton.style.display = "none";
  submitBtn.disabled = true;
  userInput.disabled = true;
  userInput.placeholder = `Welcome! Please create an account and/or login to start. Enter your daily moods or how you'are feeling, this App will extract accurate emotions and log them for you to assess daily and over time.  `;
}


const user = session?.user;

if (user) {
  const { data } = await supabaseClient
    .from("profiles")
    .select("display_name")
    .eq("id", user.id)
    .single();
 
    document.getElementsByClassName("welcome-block")[0].style.display = "flex";
    document.getElementById("logged-user").textContent = data?.display_name ? data.display_name : "Guest";

  // console.log(data?.display_name);
}



  entries = await entriesDB();
  emotionsPool = entries.flatMap(e => e.emotions);

  numberOfEntriesBlock.innerHTML = "";
  let stats = uniqueEmoCount();
  let newP1 = document.createElement("p");
  let newP2 = document.createElement("p");
  newP1.textContent = `Number of Entries - ${stats.EC}`;
  newP2.textContent = `Total Unique Emotions - ${stats.UQ}`;
  numberOfEntriesBlock.appendChild(newP1);
  numberOfEntriesBlock.appendChild(newP2);
  pastEntryCount.textContent = stats.EC;

 if(savedTheme === "dark") {
    mainContainer.classList.add("dark");
  }
  renderEmotions(emotionsPool);
  addToSelect();
}



// **************************************** MAIN SUBMIT HANDLER *********************************************
submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const first = emotionCloud.firstElementChild;

  emotionCloud.innerHTML = "";
  emotionCloud.appendChild(first);

  let text = document.querySelector("#entry").value;
  text = text.trim();

  let wordCount = text.trim().split(" ");
  if (wordCount.length < 10) {
    alert("Entry too short, write a bit more!");
    return;
  }
  if (!text) {
    alert("Nothing to submit!");
    return;
  }



// ***************************************** NEW CODE ******************************************

async function analyzeTextEmotion(userText) {
const endPoint = "https://dnqlpmmrrixhxvngmwsp.supabase.co/functions/v1/groq-chat";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRucWxwbW1ycml4aHh2bmdtd3NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyOTQ1ODIsImV4cCI6MjA5NTg3MDU4Mn0.yLXjxN-cMUnipkM_FbZrb3E63jirDA5eKDBJq_DK29I";
try {
  const response = await fetch(
    endPoint,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      body: JSON.stringify({ text: userText }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Server error:", data);
    return ["api_error"];
  }

  document.querySelector("#entry").value = "";

  return data.emotions || ["system_error"];
} catch (error) {
  console.error("Error analyzing text:", error);
  return ["system_error"];
}
}

// ******************************* END OF EDGE FUNCTION *********************************************


const { data: { user },} = await supabaseClient.auth.getUser();

console.log("**** NEW ENTRY ****")
console.log(user.id);
console.log(user.email);


const emotions = await analyzeTextEmotion(text);
console.log("This entry emotions are - ", emotions);

currentEmotions = emotions;

const { data: entry, error } = await supabaseClient
    .from("entries")
    .insert({
      user_id: user.id,
      text,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    return;
  }

  const emotionRows = emotions.map((e) => ({
    user_id: user.id,
    entry_id: entry.id,
    emotion: e,
  }));

  const { error: emotionError } = await supabaseClient
    .from("entry_emotions")
    .insert(emotionRows);

  if (emotionError) {
    console.error(emotionError);
    return;
  }

  const rawEntries = await fetchEntries(user.id);
  entries = normalizeEntries(rawEntries);

  emotionsPool = entries.flatMap((e) => e.emotions);

  // Test call

  // numberOfEntriesBlock.innerHTML = "";
  // let stats = uniqueEmoCount();
  // let newP1 = document.createElement("p");
  // let newP2 = document.createElement("p");
  // newP1.textContent = `Number of Entries - ${stats.EC}`;
  // newP2.textContent = `Total Unique Emotions - ${stats.UQ}`;
  // numberOfEntriesBlock.appendChild(newP1);
  // numberOfEntriesBlock.appendChild(newP2);
  // pastEntryCount.textContent = stats.EC;
  // numberOfEntriesBlock.textContent = `Number of Entries - ${stats.EC}  |  Total Unique Emotions - ${stats.UQ}`;

  renderEmotions(emotionsPool);
  addToSelect();
});
// *********************************** End of analyzyTextEmotion function ***********************************


// ************************************End of addEventListner of Main Form  **********************************

// ************************************ EMOTION REDUCER FUNCTION ***********************************************

function uniqueEmotions(arr) {
  const counts = {};
   
  if(arr){
  for (let item of arr) {
    counts[item] = (counts[item] || 0) + 1;
  }
}

  return counts;
}



// // ************************************ RENDER FUNCTION *****************************************************************

function renderEmotions(x) {
  let cloudCells = emotionCloud.querySelectorAll(".emotion-item");
    
  if(cloudCells){
  cloudCells.forEach(item=>{
      item.remove();
    });
  }
  const mutedColors = [
    "#6B7280", // muted gray
    "#4B5563", // charcoal gray
    "#374151", // slate
    "#7C6F64", // dusty taupe
    "#8D8F8A", // stone gray
    "#A3A29E", // warm gray
    "#6A5F4D", // faded olive brown
    "#5C6D70", // muted blue-gray
    "#7A8A8F", // desaturated steel
    "#8C7F7A", // soft clay
    "#6F5E76", // muted plum
    "#7A6C8A", // dusty lavender
    "#8A7E6D", // faded khaki
    "#6D7A6F", // muted sage
    "#7B8B7A", // soft moss
    "#8A6F6A", // muted terracotta
    "#6E6A8A", // dull indigo
    "#7A7F8C", // desaturated navy
    "#8B6A7A", // dusty rose-brown
    "#6A7A8B", // muted cool blue
  ];

  function genRand() {
    let randomNumber = Math.floor(Math.random() * 20);
    return randomNumber;
  }

  

  let existingEmotions = uniqueEmotions(x);
 
  let strengthEmotions = Object.entries(existingEmotions).sort(
    (a, b) => b[1] - a[1],
  );

  for (const [emotion, count] of strengthEmotions) {
   
    let newDiv = document.createElement("Div");
    newDiv.classList.add("emotion-item");

    newDiv.style.backgroundColor = mutedColors[genRand()];
    newDiv.style.color = "white";

    currentEmotions.forEach((emo) => {
      if (emo === emotion) {
        newDiv.style.color = "red";
        newDiv.style.fontWeight = "bolder";
        newDiv.style.backgroundColor = "transparent";
      }
    });

    let emotionSpan = document.createElement("span");
    emotionSpan.classList.add("emo-text");

    let countSpan = document.createElement("span");
    countSpan.classList.add("emo-count");

    emotionSpan.textContent = emotion;
    countSpan.textContent = count;

    newDiv.appendChild(emotionSpan);
    newDiv.appendChild(countSpan);

    emotionCloud.appendChild(newDiv);
  }

  cloudDivs = getCloudDivs();

  numberOfEntriesBlock.innerHTML = "";
  let stats = uniqueEmoCount();
  let newP1 = document.createElement("p");
  let newP2 = document.createElement("p");
  newP1.textContent = `Number of Entries - ${stats.EC}`;
  newP2.textContent = `Total Unique Emotions - ${stats.UQ}`;
  numberOfEntriesBlock.appendChild(newP1);
  numberOfEntriesBlock.appendChild(newP2);
  pastEntryCount.textContent = stats.EC;
  currentEmotions = [];
}




// // *************************************** RESET FUNCTION *************************************

// async function resetApp() {
window.resetApp = async function () {
  const { data: { user },} = await supabaseClient.auth.getUser();

  const confirmed = confirm(
    "Delete ALL entries and emotions from database?"
  );

  if (!confirmed) return;

  // delete child table first
  const { error: emotionsError } = await supabaseClient
    .from("entry_emotions")
    .delete()
    .eq("user_id", user.id);

  if (emotionsError) {
    console.error(emotionsError);
    return;
  }

  // delete parent table
  const { error: entriesError } = await supabaseClient
    .from("entries")
    .delete()
    .eq("user_id", user.id);;

  if (entriesError) {
    console.error(entriesError);
    return;
  }

  alert("Database cleared.");

  location.reload();
}


// // ************************************** PAST ENTRIES SELECT BUILDER ***********************************************

function addToSelect() {
  pastEntries.innerHTML = "";
  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let firstOp = document.createElement("option");
  firstOp.value = "";
  firstOp.textContent = "Choose";
  firstOp.hidden = true;

  pastEntries.appendChild(firstOp);

  entries.forEach((entry, index) => {
    let newOption = document.createElement("option");
    newOption.value = entry.createdAt;

  //  console.log("Select Bulider created at - ", entry.createdAt);
   let localTime = UTC2Local(entry.createdAt);

  //  console.log(localTime);
    

    let [yy,mm,dd] = entry.createdAt.split("T")[0].split("-");
    let time = entry.createdAt.split("T")[1].split(".")[0];
    // let ampm = Number(entry.createdAt.split("T")[1].slice(0,2))>=12 ? "PM" : "AM";

    // console.log("Time is --",time);


    // newOption.textContent = `${dd} ${monthsShort[Number(mm-1)]} ${yy.slice(-2)} - ${time}`;
       newOption.textContent = localTime;
    pastEntries.appendChild(newOption);
  });
}



// // *********************************** EVENT LISTER ON PAST ENTRIES ******************************************
pastEntries.addEventListener("change", (e) => {
  currentCloud.innerHTML = "";

  let entry = e.target.value;
  console.log(entries[0])
  let delEntry = entries.filter(x=>x.createdAt === entry);


  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "grey";
  submitBtn.textContent = "Extract(disabled)"

 
  delButton = document.createElement("button");
  delButton.id = "del-past-entry";
  delButton.type = "button";
  delButton.textContent = "Delete";
  pastLabel.appendChild(delButton);

  delButton.addEventListener("click",()=>{
    delPastEntry(delEntry[0].id);
  })

  entries.forEach((item) => {
    if (item["createdAt"]===entry) {
      document.getElementById("entry").value = item.text;

      item.emotions.forEach((emo) => {
        let newSpan = document.createElement("span");
        newSpan.classList.add("current-emos");

        newSpan.textContent = emo;

        currentCloud.appendChild(newSpan);
      });
    }
  });
});

// // *************************************** DELETE PAST ENTRY *****************************************************

async function delPastEntry(id){

  let res = confirm("Are you sure you want to delete this entry!");
  if(!res){
    return;
  }
  delButton.style.display = "none";

  
  await supabaseClient.from("entries").delete().eq("id", id);

  const { data: { user }, } = await supabaseClient.auth.getUser();

  const rawEntries = await fetchEntries(user.id);
  entries = normalizeEntries(rawEntries);

  emotionsPool = entries.flatMap(e => e.emotions);

    userInput.value = "";
    currentCloud.innerHTML="";

    numberOfEntriesBlock.innerHTML = "";
      let stats = uniqueEmoCount();
      let newP1 = document.createElement("p");
      let newP2 = document.createElement("p");
      newP1.textContent = `Number of Entries - ${stats.EC}`;
      newP2.textContent = `Total Unique Emotions - ${stats.UQ}`;
      numberOfEntriesBlock.appendChild(newP1);
      numberOfEntriesBlock.appendChild(newP2);
    
    renderEmotions(emotionsPool);
    addToSelect();   
    alert("Entry Deleted!"); 
}


function getCloudDivs(){
  let loggedEmotions = document.querySelectorAll("#cloud .emotion-item");
  activateCloud(loggedEmotions)
  return loggedEmotions;
}



function activateCloud(x) {
  x.forEach((div) => {
    div.addEventListener("click", () => {
      selectedEmotionBlock.style.display = "flex";
      clickedEmotionSelect.innerHTML = "";
      userInput.value = "";
      let foundEntries = [];
      let emotionSpan = div.querySelector(".emo-text");
      let clickedEmotion = emotionSpan.textContent;

       console.log("This is in activate cloud - ",entries);

      entries.forEach((entry, index) => {
        if (entry["emotions"].includes(clickedEmotion)) {
          // console.log("Entry FOund!");
          foundEntries.push(entry);
        }
      });

      renderSelectForEmotion(clickedEmotion, foundEntries);
    });
  });
}

function renderSelectForEmotion(clickedEmotion, foundEntries) {
  // console.log("Clicked Emotion is - ",clickedEmotion);
  // console.log("Number of entries presest are - ",foundEntries);
  let clickedEmo = document.getElementById("selected-emo-name");

  clickedEmo.textContent = `${foundEntries.length} Entries for Emotion - "${clickedEmotion.charAt(0).toUpperCase() + clickedEmotion.slice(1)}"`;
  clickedEmo.style.fontWeight = "bolder";
  clickedEmo.style.color = "#dc3545";

  // let select = document.querySelector("#clicked-emotion");

  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let firstOp = document.createElement("option");
  firstOp.value = "";
  firstOp.textContent = "Choose";
  firstOp.hidden = true;

  clickedEmotionSelect.appendChild(firstOp);

  foundEntries.forEach((entry) => {
    let newOption = document.createElement("option");
    newOption.value = entry.createdAt;
    let [yy,mm,dd] = entry.createdAt.split("T")[0].split("-");
    let time = entry.createdAt.split("T")[1].split(".")[0];

    let localTime = UTC2Local(entry.createdAt);

    // newOption.textContent = `${dd} ${monthsShort[Number(mm-1)]} ${yy.slice(-2)} - ${time}`;
    newOption.textContent = localTime;
    clickedEmotionSelect.appendChild(newOption);
  });
}

clickedEmotionSelect.addEventListener("change",(e)=>{
  let ctx = e.target.value;
  console.log("CTX", ctx);
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "grey";
  submitBtn.textContent = "Extract(disabled)"
  entries.forEach(entry=>{

       if(entry.createdAt === ctx){
       userInput.value = entry["text"];
       }
       
  })
})



function uniqueEmoCount(){
   let uniqueEmos = emotionsPool.filter((item, index) => emotionsPool.indexOf(item) === index);

   let UQ = uniqueEmos.length;
   let EC = entries.length;

   return {UQ,EC};

}

