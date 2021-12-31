const dy = new Date();
document.getElementsByClassName("date").innerHTML = dy.getDay();
setInterval(function() {
const dx = new Date();
  document.getElementById("time").innerHTML = dx.toLocaleTimeString();
},1000);


  				let dz = new Date();
  				let dz1 = dz.getDay();
  			let day = document.getElementById("day");
  			const day_array = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


if(dz1===0){
				day.innerHTML = day_array[0];
}
else if(dz1===1) {
				day.innerHTML = day_array[1];
}
else if(dz1===2) {
				day.innerHTML = day_array[2];
}
else if(dz1===3) {
				day.innerHTML = day_array[3];
}
else if(dz1===4) {
				day.innerHTML = day_array[4];
}
else if(dz1===5) {
				day.innerHTML = day_array[5];
}
else{
				day.innerHTML = day_array[6];
}



let dw = new Date();
document.getElementById("date").innerHTML = dw.toLocaleDateString();

 
