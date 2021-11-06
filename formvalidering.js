//Använder objektet fält för att spara flera värden. 
var rndNums = [];

while (rndNums.length < 10) {
  let rnd = Math.floor(Math.random() * 100) + 1;
  if (!rndNums.includes(rnd)) {
      rndNums.push(rnd);
  }
}

//Använder objektet document för att få värden på rubrikerna och det man har skrivit in i formen.
document.getElementById("Arr").innerHTML = rndNums;
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
  var password = document.getElementById("password").value;
  var passwordConfirm = document.getElementById("passwordConfirm").value;
  var user = document.getElementById("username").value;
  var checkBox = document.getElementById("check").checked;
  var email = document.getElementById("email").value; 

  if ((password == "" || password.length < 6 || passwordConfirm == "") && password != passwordConfirm){
    alert("Password invalid.")
  }
  else if(email == "" || (!email.includes("@", email.length) && !email.includes("."))){
    alert("Email invalid.")
  }
  else if (user == ""){
    alert("Username invalid");
  }
  else if (!checkBox){
    alert("Check the box");
  }
  else{
    document.getElementById("form").action = "confirmed.html";
  }
}