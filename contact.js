function myfun() {
  var name = document.getElementById('yname').value;
  var id = document.getElementById('yid').value;
  var no = document.getElementById('yno').value;
  var add = document.getElementById('yadd').value;

  if (name == "") {
    document.getElementById('uname').innerHTML = "**Please enter your Name.";
    return false;
  }
  if (!isNaN(name)) {
    document.getElementById('uname').innerHTML = "**Integers are not allowed.";
    return false;
  }
  if (name.length<=2) {
    document.getElementById('uname').innerHTML = "**Characters must more than 2.";
    return false;
  }   
  if (id == "") {
    document.getElementById('uid').innerHTML = "**Please enter your Email Id.";
    return false;
  }
  if (id.indexOf('@') <=0 ) {
    document.getElementById('uid').innerHTML = "**Position of '@' is not appropiate.";
    return false;
  }

  if ((id.charAt(id.length-4)!='.') && (id.charAt(id.length-3)!='.')) {
    document.getElementById('uid').innerHTML = "**Position of '.' is not appropiate.";
    return false;
  }

   if (isNaN(no)) {
    document.getElementById('uno').innerHTML = "**Only integers should written in this cloumn.";
    return false;
  }
  if (no.length != 10) {
    document.getElementById('uno').innerHTML = "**Phone no. must be of 10 digits.";
    return false;
  }
  if (add == "") {
    document.getElementById('uadd').innerHTML = "**Enter your Address also."
    return false;
  }
}