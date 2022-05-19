const div = document.createElement('div');
div.className = 'container';
document.body.append(div);


for (let i = 0; i < 5; i++) {
	let divChild = document.createElement('div');


	divChild.innerHTML = 'Vasya';
	divChild.style.border = '1px solid #000';
	divChild.style.background = '#000';
	divChild.style.color = '#fff';
	divChild.style.textAlign = 'center';
	divChild.style.margin = '10px';

	divChild.style.width = `150px`;
	divChild.style.height = `150px`;

	div.appendChild(divChild);

}
