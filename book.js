function myfunction() {
  var name = document.getElementById('name').value;
  var id = document.getElementById('id').value;
  var no = document.getElementById('no').value;
  var add = document.getElementById('add').value;

  if (name == "") {
    document.getElementById('yname').innerHTML = "**Please enter your Name.";
    return false;
  }
  if (!isNaN(name)) {
    document.getElementById('yname').innerHTML = "**Integers are not allowed.";
    return false;
  }
  if (name.length<=2) {
    document.getElementById('yname').innerHTML = "**Characters must more than 2.";
    return false;
  }   
  if (id == "") {
    document.getElementById('yid').innerHTML = "**Please enter your Email Id.";
    return false;
  }
  if (id.indexOf('@') <=0 ) {
    document.getElementById('yid').innerHTML = "**Position of '@' is not appropiate.";
    return false;
  }

  if ((id.charAt(id.length-4)!='.') && (id.charAt(id.length-3)!='.')) {
    document.getElementById('yid').innerHTML = "**Position of '.' is not appropiate.";
    return false;
  }
  if (no == "") {
    document.getElementById('yno').innerHTML = "**Please enter your phone no.";
    return false;
  }
   if (isNaN(no)) {
    document.getElementById('yno').innerHTML = "**Only integers should written in this cloumn.";
    return false;
  }
  if (no.length != 10) {
    document.getElementById('yno').innerHTML = "**Phone no. must be of 10 digits.";
    return false;
  }
  if (add == "") {
    document.getElementById('yadd').innerHTML = "**Enter your Address also."
    return false;
  }
}