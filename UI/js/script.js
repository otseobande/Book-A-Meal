const deleteLinks = document.getElementsByClassName('delete-meal');

for (let i = 0; i <= deleteLinks.length - 1; i++) {
  deleteLinks[i].onclick = e => alert('Are you sure you want to delete meal?');
}

const navToggle = document.querySelector('#nav-toggle');
const navMenus = document.querySelector('.nav-menus');
const mask = document.querySelector('.mask');

navToggle.onclick = (e) => {
  if (navMenus.style.display === 'none' || navMenus.style.display === '') {
    navMenus.style.display = 'block';
    mask.style.height = '222px';
  } else {
    navMenus.style.display = 'none';
    mask.style.height = '304px';
  }
};
