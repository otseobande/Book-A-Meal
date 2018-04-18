let deleteLinks = document.getElementsByClassName('delete-meal');

for(let i = 0; i <= deleteLinks.length -1; i++ ){
	deleteLinks[i].onclick = (e) => alert('Are you sure you want to delete meal?')
}
