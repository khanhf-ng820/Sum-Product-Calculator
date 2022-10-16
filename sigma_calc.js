// document.getElementById('result').style.height = document.getElementsByClassName('item2')[0].getBoundingClientRect()['height'];
// document.getElementById('result').style.width = document.getElementsByClassName('item4')[0].getBoundingClientRect()['width'];



// window.addEventListener('resize', function(event) {
// 	document.getElementById('result').style.height = document.getElementsByClassName('item2')[0].getBoundingClientRect()['height'];
// 	document.getElementById('result').style.width = document.getElementsByClassName('item4')[0].getBoundingClientRect()['width'];
// }, true);


function sigmasum() {
	let e = nerdamer(document.getElementById('expr').value);
	let lower = parseInt(document.getElementById('lower').value || 0);
	let upper = parseInt(document.getElementById('upper').value || 0);
	let total_sum = 0;

	try {
		let f = e.buildFunction(['n']);
		for (let i = lower; i <= upper; i++) {
			total_sum += f(i);
		}
		document.getElementById('result').innerHTML = total_sum;
	} catch {
		document.getElementById('result').innerHTML = undefined;
	}
}