function validation() {
  var name = document.getElementById('name').value;

  if (name == "") {
    document.getElementById('username').innerHTML = "**Please enter your Name.";
    return false;
  }
  if (!isNaN('name')) {
    document.getElementById('username').innerHTML = "**Integers are not allowed.";
    return false;
  }
  if (name.length<=2) {
    document.getElementById('username').innerHTML = "**Characters must more than 2.";
    return false;
  }
}