const max = 10;
var rndNums = [],
  range = 100;

function Arrlength(max, rndNums) {
  for (let i = 0; i < max; i++) {
    rndNums.push(i);
  }
  return rndNums;
}

function RandomizeNums(rndnums, range) {
  for (let i = 0; i < rndnums.length; i++) {
    let rnd = Math.floor(Math.random() * range) + 1;
    if (!rndNums.includes(rnd)) {
      rndnums[i] = rnd;
    }
  }
  return rndNums;
}


document.getElementById("Arr").innerHTML = RandomizeNums(Arrlength(max, rndNums), range);
document.getElementById("Arr2").innerHTML = rndNums.sort(function (a, b) {
  return a - b;
});

function VerifyForm() {
  let emailStatus, passwordStatus, userStatus;
  let checkBoxStatus = document.getElementById("check").checked;

  emailStatus = VerifyEmail(emailStatus);
  passwordStatus = VerifyPassword(password, passwordConfirm);
  userStatus = VerifyUser();

  VerifyAll(emailStatus, passwordStatus, userStatus, checkBoxStatus);
}

function NewPage() {
  window.open("confirmed.html", "_blank");
}

function VerifyEmail(emailStatus) {
  const mail = ["@gmail.se", "@gmail.com", "@hotmail.se", "@hotmail.com", "@yahoo.se", "@yahoo.com", "@outlook.se", "@outlook.com"];
  let email = document.getElementById("email").value;

  for (let i = 0; i < mail.length; i++) {
    let emailtmp = email.slice(0, -mail[i].length);
    if (email.includes(mail[i], (emailtmp.length))) {
      emailStatus = true;
      break;
    }
  }
  return emailStatus;
}

function VerifyPassword(password, passwordConfirm) {
  password = document.getElementById("password").value;
  passwordConfirm = document.getElementById("passwordConfirm").value;
  return password === passwordConfirm && password.length >= 6;
}

function VerifyUser() {
  let username = document.getElementById("username").value;
  return username.length >= 6 && username !== "";
}

function VerifyAll(emailStatus, passwordStatus, userStatus, checkBoxStatus) {
  if (emailStatus && passwordStatus && userStatus && checkBoxStatus) {
    window.open("confirmed.html", "_blank");
  } else if (!passwordStatus) {
    alert("Password do not match or requires 6 characters.");
  } else if (!userStatus) {
    alert("Username requires atleast 6 characters.")
  } else if (!checkBoxStatus) {
    alert("Agreeing to the terms is required.")
  } else if (!emailStatus) {
    alert("E-mail required.")
  }
}