var number = document.forms['form']['Number'];
var back = document.forms['form']['Back'];
var name1 = document.forms['form']['Name'];
var date = document.forms['form']['Date'];

var number_l = 16;
var back_l = 3;
var name_l = 3;

number.addEventListener('textInput', number_Verify);
back.addEventListener('textInput', back_Verify);
name1.addEventListener('textInput', name_Verify);

function validated(){
	if (number.value.length < number_l || number.value.length > number_l) {
		number.style.border = "2px solid red";
		number.focus();
		return false;
	}
	if (back.value.length < back_l || back.value.length > back_l) {
		back.style.border = "2px solid red";
		back.focus();
		return false;
	}
  if (name1.value.length < name_l) {
		name1.style.border = "2px solid red";
		name1.focus();
		return false;
	}
}

function number_Verify(){
	if (number.value.length == number_l - 1) {
		number.style.border = "2px solid #3498db";
  }
}
function back_Verify(){
	if (back.value.length >= back_l - 1) {
		back.style.border = "2px solid #3498db";
  }
}
function  name_Verify(){
	if (name1.value.length >= name_l - 1) {
		name1.style.border = "2px solid #3498db";
  }
}
