const max = 10;
//Använder objektet fält för att spara flera värden. 
var rndNums = [],
  range = 100;

//En funktion som Lägger till ett antal element i fältet.
function Arrlength(max, rndNums) {
  //Har använt for-loop för att man kan specificiera antalet element man vill ha i fältet.
  for (let i = 0; i < max; i++) {
    //Ett värde kommer att tilläggas i fältet.
    rndNums.push(0);
  }
  return rndNums;
}

//Ersätter element vid ett specifikt index med ett slumpmässigt tal. 
function RandomizeNums(rndnums, range) {
  //Behöver använda for-loop för att ta reda på indexen och ersätta elementet.
  for (let i = 0; i < rndnums.length; i++) {
    //Använder objektet Math för att avrunda neråt till det närmaste talet och slumpmässigt få fram ett tal.
    //(Math.floor avrundar och Math.random ger ett slumpmässigt tal).
    //Använder while-loop för att iterera igen om ett tal redan finns i fältet.
    while (true){
      let rnd = Math.floor(Math.random() * range) + 1;
      //Kollar om det slumpmässiga talet finns i fältet. Om den inte finns läggs den i fältet.
      if (!rndNums.includes(rnd)) {
        rndnums[i] = rnd;
        break;
      }
    }
  }
  return rndNums;
} 

//Använder objektet document för att få värden på rubrikerna och det man har skrivit in i formen.
document.getElementById("Arr").innerHTML = RandomizeNums(Arrlength(max, rndNums), range);
document.getElementById("Arr2").innerHTML = rndNums.sort(function (a, b) {
  return a - b;
});
/*
Sort-metoden har en funktion som jämför två parametrar och returnerar antingen ett värde som är mindre än 0, 0 eller större än 0. 
Om a < b returneras ett tal mindre 0, som då sorterar a före b.
Om a > b returneras ett tal mindre 0, som då sorterar b före a.
Om a == b returneras 0, vilket betyder att parameterna index inte ändras.
*/ 

//Funktion som verifierar formen. 
function VerifyForm() {
  let emailStatus, passwordStatus, userStatus;
  //Lagrar om man har checkad av "Terms of Service" eller inte.
  let checkBoxStatus = document.getElementById("check").checked;

  emailStatus = VerifyEmail(emailStatus);
  passwordStatus = VerifyPassword(password, passwordConfirm);
  userStatus = VerifyUser();

  VerifyAll(emailStatus, passwordStatus, userStatus, checkBoxStatus);
}

//Funktion för att öppna en ny sida. Den används för submit-knappen i den andra formen.
function NewPage() {
  window.open("confirmed.html", "_blank");
}

//Funktion som kollar om man har skrivit en email.
function VerifyEmail(emailStatus) {
  //Ett fält som har flera email-domäner.
  const mail = ["@gmail.se", "@gmail.com", "@hotmail.se", "@hotmail.com", "@yahoo.se", "@yahoo.com", "@outlook.se", "@outlook.com"];
  let email = document.getElementById("email").value;

  //Använder mig av en for-loop för att kolla om någon av elementen i mail-fältet stämmer med det man har skrivit i email.
  for (let i = 0; i < mail.length; i++) {
    //Med slice tar jag bort en del av det man har skrivit i email med någon av värdena i fältet och lagrar det i en temporär variabel.
    //Om man har skrivit rätt kommer emailtmp spara exempelvis bertil@gmail.com som bertil. 
    let emailtmp = email.slice(0, -mail[i].length);
    //Jämför emailtmp med det man har skrivit i formen. Om bertil@gmail.com är en email ska if-satsen kolla om @gmail.com är efter bertil
    if (email.includes(mail[i], (emailtmp.length))) {
      emailStatus = true;
      break; //Har break här för att for-loopen inte ska iterera flera gånger än vad som behövs.
    }
  }
  return emailStatus;
}

//Funktionen kollar om lösenorden stämmer och är längre än 6 karaktärer.
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

//En funktion som kollar om personuppgifterna stämmer.
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