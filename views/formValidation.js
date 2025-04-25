const validateUserForm = (e) => {
    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const state = document.getElementById("inputState");
    const gender = document.query("input[name='gender']: checked");
    const terms = document.getElementById("")



    let errorCount = 0;

    const nameRegex = /^[A-Za-z\s]{2,100}$/;
    if (!nameRegex.test(fullname.value.trim())) { 
        fullname.style.border = "1px solid red";  
        document.getElementById("fullnameError").style.color = "red";
        document.getElementById("fullnameError").textContent = "Enter a valid full name. Alphabet characters only (2 to 100)";
        errorCount++;
    } else {
        fullname.style.border = "1px solid green";
        document.getElementById("fullnameError").textContent = "" ;
    }

// email validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.value.trim())) {  // Condition changed to 'not' match regex
        email.style.border = "1px solid red";  // Apply red border for invalid input
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emalError").textContent = "Enter a valid email";
        errorCount++;
    } else {
        email.style.border = "1px solid green"; 
        document.getElementById("emailError").textContent = "" ;
        
    }


    // validate state (dropdown)
    if(state.value === "" || state.value === "choose.."){
        state.style.border = "1px solid red";  // Apply red border for invalid input
        document.getElementById("stateError").style.color = "red";
        document.getElementById("stateError").textContent = "Select the state";
        errorCount++;
    } else {
        state.style.border = "1px solid green"; 
        document.getElementById("stateError").textContent = "" ;
        
    }


    //validation for radio buttons
    if(!gender){
        document.getElementById("genderError").color = "red";
        document.getElementById("genderError").textContent ="please select your gender";
        errorCount++
    }else{
        document.getElementById("genderError").textContent = "";
    }

    if(!terms.checked){
        document.getElementById("termsError").color = "red";
        document.getElementById("termsError").textContent ="Please accept the terms and conditions";
        errorCount++
    }else{
        document.getElementById("termsError").textContent = "";
    }

        
    



    if (errorCount > 0) {
        e.preventDefault();
        return false;
    }

    return true;
};
