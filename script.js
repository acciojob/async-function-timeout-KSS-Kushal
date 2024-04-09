//your JS code here. If required.
const getData = () => {
	return new Promise((resolve, reject)=>{
		const textHTML = document.getElementById("text");
		const timeHTML = document.getElementById('delay');
		console.log()
		setTimeout(()=>{
			resolve(textHTML.value);
		},timeHTML.value);
	})
}

const btnHTML = document.getElementById("btn");
const handleClick = async () => {
	const text = await getData();
	document.getElementById('output').innerText = text;
}
btnHTML.addEventListener('click', handleClick);