window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let output = document.getElementById("output");
let p1 = new Promise((resolve,reject) =>{
	setInterval(()=>{
		resolve("promise1 resolve");
		
	},1000)
})

let p2 = new Promise((resolve,reject) =>{
	setInterval(()=>{
		resolve("promise2 resolve");
		
	},2000)
})

let p3 = new Promise((resolve,reject) =>{
	setInterval(()=>{
		resolve("promise3 resolve");
		
	},3000)
})

let p4 = new Promise((resolve,reject) =>{
	setInterval(()=>{
		resolve("promise4 resolve");
		
	},4000)
})

let p5 = new Promise((resolve,reject) =>{
	setInterval(()=>{
		resolve("promise5 resolve");
		
	},5000)
})
promises.push(p2);
promises.push(p4);
promises.push(p5);
promises.push(p3);
promises.push(p1);
Promise.any(promises).then((value) => {
	output.innerHTML = value;
})