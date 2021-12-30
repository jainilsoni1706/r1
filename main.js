const dy = new Date();
document.getElementsByClassName("date").innerHTML = dy.getDay();
setInterval(function() {
const dx = new Date();
  document.getElementById("time").innerHTML = dx.toLocaleTimeString();
},1000);


  				const dz = new Date();
  				let dz1 = dz.getDay();
  			let day = document.getElementById("day");
  			const day_array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

switch(dz1){
				case 0:{
								day.innerHTML = day_array[0];
				}
				case 1:{
								day.ineerHTML = day_array[1];
				}
				case 2:{
								day.innerHTML = day_array[2];
				}
				case 3:{
								day.innerHTML = day_array[3];
				}
				case 4:{
								day.innerHTML = day_array[4];
				}
				case 5:{
								day.innerHTML = day_array[5];
				}
				case 6:{
								day.innerHTML = day_array[6];
				}
				default:{
								
				}
}
  		
/*var msg = new SpeechSynthesisUtterance(); msg.text = "Hello There! Welcom to the official site of Mister Jainil Soni. My name is JAVA, Jainils Artificial virtual Assistant and i am a virtual assistant."; window.speechSynthesis.speak(msg);
*/

let dw = new Date();
document.getElementById("date").innerHTML = dw.toLocaleDateString();

 