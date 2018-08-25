const infoBox = document.querySelector('.new-site-info');
const blackScreen = document.querySelector('.black');
const items = document.querySelectorAll('.collection-item');
const add_items = document.querySelector('#add');
const active_items = document.querySelectorAll('.active-item');

// add new site bookmark
add_items.addEventListener('click', (e) =>{
	// container to append items to
	const container = document.querySelector('.container');

	// create new .site div
	let newDiv = document.createElement('div');
	newDiv.className += 'site';

	// create new li item
	let newLi = document.createElement('li');
	newLi.className += 'collection-item';
	newLi.className += ' avatar';
	newLi.className += ' highlight';
	// append li to container 
	container.appendChild(newLi);

	//  create i element
	let newI = document.createElement('i');
	newI.className += 'material-icons'
	newI.className += ' circle'
	// append to li
	newLi.appendChild(newI);

	// create new span
	let newA = document.createElement('a'); 
	let newSpan = document.createElement('span');
	newSpan.className += 'title';
	newSpan.innerHTML = 'Title';
	newLi.appendChild(newA);
	newA.appendChild(newSpan);

	// create new p tag
	let newP = document.createElement('p');
	let newBr = document.createElement('br');
	newP.innerHTML = 'First Line';
	newLi.appendChild(newP);
	newP.append(newBr);
	newP.innerHTML += 'Second line';
});


document.addEventListener('click', (e) =>{
	let target = e.target;

	if(target.classList.contains('collection-item')){
		console.log('active item');
		target.classList.toggle('active-item');

		// active item clicked
		if (target.classList.contains('active-item')){
			target.classList.add('indigo');
			target.classList.remove('highlight');
		}else{	
			target.classList.remove('indigo');
			target.classList.add('highlight');
		}

		// check if next element is .accounts div
		let nextElement = target.nextElementSibling;
		// show hide accounts div
		try{
			if(nextElement.classList.contains('accounts')){
					nextElement.classList.toggle('hide');
			}else{
				return false
			}
		}catch(error){}	

	}

	// add new accounts 
	if(target.classList.contains('add-users')){
		const accounts = document.querySelector('.accounts');
		if(!accounts){
			console.log('not availble');
		}
		console.log('emfkf');
		// create div 
		let newDiv = document.createElement('div');
		newDiv.className += 'account';
		accounts.appendChild(newDiv);
		// create span element
		let newSpan = document.createElement('span');
		newSpan.id += 'username';
		newSpan.innerHTML = 'Username:';
		newDiv.appendChild(newSpan);

		let newSpan2 = document.createElement('span');
		newSpan2.id += 'password';
		newSpan2.innerHTML = 'Password:';
		newDiv.appendChild(newSpan2);

		let newSpan3 = document.createElement('span');
		newSpan3.id += 'email';
		newSpan3.innerHTML = 'Email:';
		newDiv.appendChild(newSpan3);
	}

	// add new sites
	if(target.id == 'add'){
		console.log('add');

		let backgroundBlack = document.querySelector('.black');
		let new_site_box = document.querySelector('.new-site-info')
		backgroundBlack.style.display = '';
		new_site_box.style.display = '';
	}

	// delete sites
	if(target.id == 'delete'){
		let sites = document.querySelectorAll('.site');

		for(let i = 0; i < sites.length; i++){
			const liElement = sites[i].firstElementChild;

			if(liElement.classList.contains('active-item')){
				sites[i].remove();
				
			}
		}
	}

	e.preventDefault();
}); 