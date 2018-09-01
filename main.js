const items = document.querySelectorAll('.collection-item');
const add_items = document.querySelector('#add');
const active_items = document.querySelectorAll('.active-item');

// new site input variables 
const siteInput = document.querySelector('#site-input');
const siteSubmit = document.querySelector('#site-submit');

// new account variables
const userInput = document.querySelector('#user-input');
const passInput = document.querySelector('#pass-input');
const emailInput = document.querySelector('#email-input');

// new site popup
const backgroundBlack = document.querySelector('.black');
const new_site_info = document.querySelector('.new-site-info');
const new_account_info = document.querySelector('.new-account-info');
const alert = document.querySelector('.no-value-alert');
const alert2 = document.querySelector('.no-value-alert2');

// create new site bookmark
let newSite = function(){
	// alert error
	if(siteInput.value.length == 0){
		alert.classList.remove('hide');
	}else{
		const container = document.querySelector('.container');

		alert.classList.add('hide');
		backgroundBlack.classList.toggle('hide');
		new_site_info.classList.toggle('hide');

		// create new .site div
		let newDiv = document.createElement('div');
		newDiv.className += 'site';
		newDiv.className += ' light-green';
		newDiv.className += ' lighten-5';
		container.appendChild(newDiv);

		// create new li item
		let newLi = document.createElement('li');
		newLi.className += 'collection-item';
		newLi.className += ' avatar';
		newLi.className += ' highlight';
		// append li to container 
		newDiv.appendChild(newLi);

		//  create i element
		let newI = document.createElement('i');
		newI.className += 'material-icons';
		newI.className += ' circle';
		newI.innerHTML = 'folder';
		// append to li
		newLi.appendChild(newI);

		// create new span
		let newA = document.createElement('a'); 
		let newSpan = document.createElement('span');
		newA.href = siteInput.value;
		newA.target = '_blank';
		newSpan.className += 'title';
		newSpan.innerHTML = siteInput.value;
		newLi.appendChild(newA);
		newA.appendChild(newSpan);

		// create new p tag
		let newP = document.createElement('p');
		let newP2 = document.createElement('p');
		let newBr = document.createElement('br');
		newP.id = 'description-text';
		newP.innerHTML = 'this is an example';
		newP2.innerHTML += '# of accounts';
		newLi.appendChild(newP);
		newLi.appendChild(newP2);

		// create star icon
		let star = document.createElement('a');
		let starIcon = document.createElement('i');
		star.className += 'secondary-content';
		starIcon.innerHTML = 'grade';
		starIcon.className += 'material-icons';
		newLi.appendChild(star);
		star.appendChild(starIcon);
		
		// create add accounts button
		let newAccounts = document.createElement('span');
		newAccounts.innerHTML = 'Add Accounts';
		newAccounts.className += 'add-users';
		newAccounts.className += ' lime';
		newAccounts.className += ' lighten-2';
		newLi.appendChild(newAccounts);

	}
}

// Submit a new site listeners
siteSubmit.addEventListener('click', newSite);
siteInput.addEventListener('keyup', (e)=>{
	if(e.keyCode == 13){
		newSite();
	}
});

// a few click listeners for other elements
document.addEventListener('click', (e) =>{
	let target = e.target;

	if(target.matches('.collection-item')){
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
	if(target.matches('.add-users')){
		let accounts = document.querySelector('.accounts');

		backgroundBlack.classList.toggle('hide');
		new_account_info.classList.toggle('hide');

		// alert error
		if(userInput.value.length || passInput.value.length || emailInput.value.length == 0){
			alert2.classList.remove('hide');
		}else{
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
	}

	if(target.id == 'add'){
		backgroundBlack.classList.toggle('hide');
		new_site_info.classList.toggle('hide');
	}

	if(target.matches('#close-box')){
		backgroundBlack.classList.toggle('hide');
		new_site_info.classList.toggle('hide');
	}else if(target.matches('#close-box2')){
		backgroundBlack.classList.toggle('hide');
		new_account_info.classList.toggle('hide');
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
