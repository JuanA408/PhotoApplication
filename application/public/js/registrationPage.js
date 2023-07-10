function registrationValidator() {
    let usernameRegex = /^(?=.{3})[a-zA-Z]+([a-zA-Z]|[0-9])/;
    let username = document.getElementById('username').value;
    var flag = true;
    if(usernameRegex.test(username)) {
      document.querySelector("#usernameError").style.cssText = "visibility: hidden; max-height: 0";
    }
    else {
      console.log("Invalid Username, length is " + username.length);
      document.querySelector("#errorMessages").style.cssText = "visibility: visible; max-height: 100%";
      document.querySelector("#usernameError").style.cssText = "visibility: visible; max-height: 100%";

      flag = false;
    }

    let pswdRegex = /(?=.*\d)(?=.*[A-Z])(?=.*[*-+!@#$^&*]).{8,}/;
    let pswd = document.getElementById('password').value;
    
    if(pswdRegex.test(pswd)) {
      document.querySelector("#passwordError").style.cssText = "visibility: hidden; max-height: 0";
    }
    else {
      console.log("Invalid Password, length is " + pswd.length);
      document.querySelector("#errorMessages").style.cssText = "visibility: visible; max-height: 100%";
      document.querySelector("#passwordError").style.cssText = "visibility: visible; max-height: 100%";

      flag = false;
    }

    if(pswd != document.getElementById('confirm_password').value){
      console.log("Invalid Password match: " + pswd + " and "+ document.getElementById('confirm_password').value);
      document.querySelector("#errorMessages").style.cssText = "visibility: visible; max-height: 100%";
      document.querySelector("#passwordNotMatch").style.cssText = "visibility: visible; max-height: 100%";
      flag = false
    }

    else{
      document.querySelector("#passwordNotMatch").style.cssText = "visibility: hidden; max-height: 0";
    }


    if(flag == true){
      document.querySelector("#errorMessages").style.cssText = "visibility: hidden; max-height: 0";
    }
    return flag;
  }