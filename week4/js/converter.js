const celciusInput = document.getElementById("Celcius");
const farenheightInput = document.getElementById("Farenheight");
const kelvinInput = document.getElementById("Kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
	let input = inputs[i];
	
	input.addEventListener("input", function (e) {
		let value = (e.target.value);
		console.log(e.target.name + ":" value);
		switch(e.target.name){
			case "Celcius":
			fahrenheightInput.value = (value * 1.8) + 32
			kelvinInput.value = (value + 273.15);
			
			break;
			case "Farenheight":
			celciusInput.value = (value - 32) / 1.8;
			kelvinInput.value = (value - 32) / 1.8) + 273.15;
			break;
			case "Kelvin":
			fahrenheightInput.value = (value - 273.15) * 1.8) + 32;
			celciusInput.value = (value - 273.15);
		}
	}
};