// step 1
document.getElementById("screen").focus();

function display(val){
	document.getElementById("screen").value += val;
	let x = document.getElementById("screen").value;
}

function solve(){
	try {
		let x = document.getElementById("screen").value;
		let y = eval(x);
		let ans = y.toLocaleString("en-Us");
		document.getElementById("screen").value = y;
		document.getElementById("result").value = ans;
	} catch (e) {
		if (e.name == "SyntaxError"){
			document.getElementById("result").value = "Syntax Error";
		}
	}
	
}

function clearInput(){
	document.getElementById("screen").value = "";
	document.getElementById("result").value = "0";
	document.getElementById("screen").focus();
}

function round(){
	try {
		let x = document.getElementById("screen").value;
		let y = eval(x);
		y = Math.ceil(y);
		let ans = y.toLocaleString("en-Us");
		document.getElementById("result").value = ans;
	} catch (e) {
		if (e.name == "SyntaxError"){
			document.getElementById("result").value = "Syntax Error";
		}
	}
}


function root(){
	let x = document.getElementById("screen").value;
	document.getElementById("screen").value = `sqrt(${x})`;
}

function sqrt(x){
	return Math.sqrt(x);
}

