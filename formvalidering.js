const max = 10;
//Använder objektet array för att spara flera värden. 
var rndNums = [],
  range = 100;

//Lägger till ett antal element i fältet.
function Arrlength(max, rndNums) {
  //Har använt for-loop för att man kan specifiera antalet element man vill ha i fältet.
  for (let i = 0; i < max; i++) {
    rndNums.push(i);
  }
  return rndNums;
}

//Ersätter element vid ett specifikt index med ett slumpmässigt tal. 
function RandomizeNums(rndnums, range) {
  //Behöver använda for-loop för att ta reda på indexen och ersätta elementet.
  for (let i = 0; i < rndnums.length; i++) {
    //Använder objekten Math för att avrunda neråt till det närmaste talet och slumpmässigt få fram ett tal 
    //(Math.floor avrundar och Math.random ger ett slumpmässigt tal).
    let rnd = Math.floor(Math.random() * range) + 1;
    if (!rndNums.includes(rnd)) {
      rndnums[i] = rnd;
    }
  }
  return rndNums;
}

//Använder objektet document för att få värden på rubrikerna och det man har skrivit in i formen.
document.getElementById("Arr").innerHTML = RandomizeNums(Arrlength(max, rndNums), range);
//Sort metoden jämför två parametrar returnerar antingen något som är mindre än 0, 0 eller större än 0. 
/*
Om a < b returneras ett tal mindre 0, som då sorterar a före b.
Om a > b returneras ett tal mindre 0, som då sorterar b före a.
Om a == b returneras 0, vilket betyder att parameterna index inte ändras.
*/ 
document.getElementById("Arr2").innerHTML = rndNums.sort(function (a, b) {
  return a - b;
});

//Kollar om man har skrivit ner allting och checkat "Terms of Service".
function VerifyForm() {
  let emailStatus, passwordStatus, userStatus;
  let checkBoxStatus = document.getElementById("check").checked;

  emailStatus = VerifyEmail(emailStatus);
  passwordStatus = VerifyPassword(password, passwordConfirm);
  userStatus = VerifyUser();

  VerifyAll(emailStatus, passwordStatus, userStatus, checkBoxStatus);
}

//Funktion för att öppna en ny sida.
function NewPage() {
  window.open("confirmed.html", "_blank");
}

//Funktion som kollar om man har skrivit en email.
function VerifyEmail(emailStatus) {
  //Ett fält som har flera email-tjänster.
  const mail = ["@gmail.se", "@gmail.com", "@hotmail.se", "@hotmail.com", "@yahoo.se", "@yahoo.com", "@outlook.se", "@outlook.com"];
  let email = document.getElementById("email").value;

  //Använder mig av en for-loop för att kolla om någon av email-tjänsterna stämmer med det man har skrivit i email.
  for (let i = 0; i < mail.length; i++) {
    
    let emailtmp = email.slice(0, -mail[i].length);
    if (email.includes(mail[i], (emailtmp.length))) {
      emailStatus = true;
      break;
    }
  }
  return emailStatus;
}

//Funktionen kollar om lösenorden stämmer.
function VerifyPassword(password, passwordConfirm) {
  password = document.getElementById("password").value;
  passwordConfirm = document.getElementById("passwordConfirm").value;
  return password === passwordConfirm && password.length >= 6;
}

//En funktion som kollar om username har mer än 6 karaktärer.
function VerifyUser() {
  let username = document.getElementById("username").value;
  return username.length >= 6;
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